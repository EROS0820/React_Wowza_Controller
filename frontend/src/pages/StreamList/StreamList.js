import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import { InputAdornment, TextField, CircularProgress, Button } from '@material-ui/core';
import Service from "../../service/Service";
import Logout, {INVALID_TOKEN} from "../../utils/logout";
import List from './List/List';
import useStyles from "./styles";

const StreamList = (props) => {
    const {history} = props;
    var classes = useStyles();
    
    const [listStream, setListStream] = useState([]);
    const [search, setSearch] = useState('');
    const [visibleIndicator, setVisibleIndicator] = useState(false);

    useEffect(() => {
        getStreamList()
    }, []);
    
    const handleChangeSearch = (event) => {
        setSearch(event.target.value);
    }

    const handleDownEnterSearch = (event) => {
        if(event.keyCode === 13) {
            getStreamList();
        }
    }

    const getStreamList = () => {
        setVisibleIndicator(true);
        Service.get_stream_list().then(
            response => {
                setVisibleIndicator(false);
                if(response.data.code === 200) {
                    localStorage.setItem("token", response.data.data.token);
                    let listStream = [];
                    response.data.data.users.map((cell) => {
                        if(cell.subject !== null) {
                            cell.subjects = cell.subject.split(', ');
                        } else {
                            cell.subjects = [];
                        }
                        
                        listStream.push(cell);
                    });
                    setListStream(listStream);
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
        Service.delete_stream(id).then(
            response => {
                setVisibleIndicator(false);
                console.log(response.data);
                if(response.data.code === 200) {
                    localStorage.setItem("token", response.data.data.token);
                    getStreamList();
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
        history.push('/wowza/edit?id=' + id);
    }

    const handleClickAdd = () => {
        history.push('/wowza/new');
    }

    return (
        <div className={classes.root}>
            {visibleIndicator ? <div className={classes.div_indicator}> <CircularProgress className={classes.indicator} /></div> : <div/> }

            <div className={classes.div_button}>
                <Button className={classes.button_add} onClick={handleClickAdd}>Add Stream</Button>
            </div>
            <div className={classes.content}>
                <List tutorList={listStream} onClickDelete={handleClickDelete} onClickEdit={handleClickEdit}/>
            </div>
        </div>
    );
}

export default withRouter(StreamList);
