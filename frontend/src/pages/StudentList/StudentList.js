import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import { InputAdornment, TextField, CircularProgress, Button } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import Service from "../../service/Service";
import Logout, {INVALID_TOKEN} from "../../utils/logout";
import List from './List';
import useStyles from "./styles";

const StudentList = (props) => {
    const {history} = props;
    var classes = useStyles();
    
    const [listStudent, setListStudent] = useState([]);
    const [search, setSearch] = useState('');
    const [visibleIndicator, setVisibleIndicator] = useState(false);

    useEffect(() => {
        getStudentList()
    }, []);
    
    const handleChangeSearch = (event) => {
        setSearch(event.target.value);
    }

    const handleDownEnterSearch = (event) => {
        if(event.keyCode === 13) {
            getStudentList();
        }
    }

    const getStudentList = () => {
        setVisibleIndicator(true);
        Service.search_student(search).then(
            response => {
                setVisibleIndicator(false);
                if(response.data.code === 200) {
                    localStorage.setItem("token", response.data.data.token);
                    let listStudent = [];
                    response.data.data.users.map((cell) => {
                        if(cell.subject !== null) {
                            cell.subjects = cell.subject.split(', ');
                        } else {
                            cell.subjects = [];
                        }
                        
                        listStudent.push(cell);
                    });
                    setListStudent(listStudent);
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

    const handleClickDelete = (id) => {
        setVisibleIndicator(true);
        Service.delete_student(id).then(
            response => {
                setVisibleIndicator(false);
                console.log(response.data);
                if(response.data.code === 200) {
                    localStorage.setItem("token", response.data.data.token);
                    getStudentList();
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
        history.push('/app/student/edit?id=' + id);
    }

    const handleClickView = (id) => {
        history.push('/app/student/view?id=' + id);
    }

    const handleClickAdd = () => {
        history.push('/app/student/new');
    }

    return (
        <div className={classes.root}>
            {visibleIndicator ? <div className={classes.div_indicator}> <CircularProgress className={classes.indicator} /></div> : <div/> }
            <div className={classes.div_title}>
                <span className={classes.title}>STUDENT</span>
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
                                <SearchIcon className={classes.search} onClick={getStudentList}/>
                            </InputAdornment>
                        )
                    }}
                />
            </div>
            <div className={classes.content}>
                <div className={classes.content_head}>
                    <span className={classes.parent_title}>STUDENT {'>>'} </span>
                    <span className={classes.child_title}>&nbsp;STUDENT LIST</span>
                </div>
                <div className={classes.table_head}>
                    STUDENT LIST
                </div>
                <List tutorList={listStudent} onClickDelete={handleClickDelete} onClickEdit={handleClickEdit} onClickView={handleClickView}/>
                <div className={classes.div_button}>
                    <Button className={classes.button_add} onClick={handleClickAdd}>Add Student</Button>
                </div>
            </div>
        </div>
    );
}

export default withRouter(StudentList);
