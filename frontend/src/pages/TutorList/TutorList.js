import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import { InputAdornment, TextField, CircularProgress, Button } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import Service from "../../service/Service";
import Logout, {INVALID_TOKEN} from "../../utils/logout";
import List from './List';
import useStyles from "./styles";

const TutorList = (props) => {
    const {history} = props;
    var classes = useStyles();
    
    const [listTutor, setListTutor] = useState([]);
    const [search, setSearch] = useState('');
    const [visibleIndicator, setVisibleIndicator] = useState(false);

    useEffect(() => {
        getTutorList()
    }, []);
    
    const handleChangeSearch = (event) => {
        setSearch(event.target.value);
    }

    const handleDownEnterSearch = (event) => {
        if(event.keyCode === 13) {
            getTutorList();
        }
    }

    const getTutorList = () => {
        setVisibleIndicator(true);
        Service.search_tutor(search).then(
            response => {
                setVisibleIndicator(false);
                console.log(response.data);
                if(response.data.code === 200) {
                    localStorage.setItem("token", response.data.data.token);
                    let listTutor = [];
                    response.data.data.users.map((cell) => {
                        if(cell.subject !== null) {
                            cell.subjects = cell.subject.split(', ');
                        } else {
                            cell.subjects = [];
                        }
                        if(cell.grade === null) {
                            cell.grades = "";
                        } else if(cell.grade.indexOf('-') === -1) {
                            console.log('asdffas');
                            var list_grade = cell.grade.split(', ');
                            if(list_grade.length === 0) {
                                cell.grades = ""
                            } else if(list_grade.length === 1) {
                                cell.grades = list_grade[0]
                            } else {
                                cell.grades = list_grade[0] + ', ...';
                            }
                        } else {
                            cell.grades = cell.grade;
                        }
                        listTutor.push(cell);
                    });
                    setListTutor(listTutor);
                } else {
                    if(response.data.message === INVALID_TOKEN) {
                        Logout();
                        history.push('/');
                    }
                }
            },
            error => {
                setVisibleIndicator(false);
                const resMessage =
                    (error.response &&
                        error.response.data &&
                        error.response.data.message) ||
                    error.message ||
                    error.toString();
                // setErrorMsg(resMessage);
                console.log(error);
            }
        )
    }

    const handleClickDelete = (id) => {
        setVisibleIndicator(true);
        Service.delete_tutor(id).then(
            response => {
                setVisibleIndicator(false);
                console.log(response.data);
                if(response.data.code === 200) {
                    localStorage.setItem("token", response.data.data.token);
                    getTutorList();
                } else {
                    if(response.data.message === INVALID_TOKEN) {
                        Logout();
                        history.push('/');
                    }
                    // setErrorMsg(response.data.message);
                    // setListTutor(response.data.data.users);
                }
            },
            error => {
                setVisibleIndicator(false);
                const resMessage =
                    (error.response &&
                        error.response.data &&
                        error.response.data.message) ||
                    error.message ||
                    error.toString();
                // setErrorMsg(resMessage);
                console.log(error);
            }
        )
    }

    const handleClickEdit = (id) => {
        history.push('/app/tutor/edit?id=' + id);
    }

    const handleClickView = (id) => {
        history.push('/app/tutor/view?id=' + id);
    }

    const handleClickAdd = () => {
        history.push('/app/tutor/new');
    }

    return (
        <div className={classes.root}>
            {visibleIndicator ? <div className={classes.div_indicator}> <CircularProgress className={classes.indicator} /></div> : <div/> }
            <div className={classes.div_title}>
                <span className={classes.title}>TUTOR</span>
                <TextField 
                    className={classes.search}
                    name="search"
                    placeholder="Search"
                    variant="outlined"
                    value={search}
                    onChange={handleChangeSearch}
                    onKeyDown={handleDownEnterSearch}
                    InputProps={{
                        classes: {input: classes.edit},
                        endAdornment: (
                            <InputAdornment position="end">
                                <SearchIcon className={classes.search} onClick={getTutorList}/>
                            </InputAdornment>
                        )
                    }}
                />
            </div>
            <div className={classes.content}>
                <div className={classes.content_head}>
                    <span className={classes.parent_title}>TUTOR {'>>'} </span>
                    <span className={classes.child_title}>&nbsp;TUTOR LIST</span>
                </div>
                <div className={classes.table_head}>
                    TUTOR LIST
                </div>
                <List tutorList={listTutor} onClickDelete={handleClickDelete} onClickEdit={handleClickEdit} onClickView={handleClickView}/>
                <div className={classes.div_button}>
                    <Button className={classes.button_add} onClick={handleClickAdd}>Add Tutor</Button>
                </div>
            </div>
        </div>
    );
}

export default withRouter(TutorList);
