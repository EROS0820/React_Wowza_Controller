import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import validate from 'validate.js';
import { InputAdornment, TextField, Button, CircularProgress } from '@material-ui/core';
import queryString from 'query-string';
import Autocomplete from '@material-ui/lab/Autocomplete';
import AddIcon from '@material-ui/icons/Add';
import Service from "../../service/Service";
import Logout, {INVALID_TOKEN} from "../../utils/logout";
import {ListSyllabus} from "../../utils/values";
import ShadowInput from '../../components/ShadowInput';
import RangeSlider from '../../components/RangeSlider';
import TutorSubject from '../../components/TutorSubject';
import ChipArea from '../../components/ChipArea';
import useStyles from "./styles";

const test = {
    first_name: "Aloshin",
    last_name: 'Sergey',
    email: "senior_lancer@protonmail.com",
    phone: "+123455667",
    syllabus: "CBSE",
    grade: '3 - 8',
    subjects: [
        "English", "Russia", "Portuguese",
    ]
};

const TutorView = (props) => {
    const {history} = props;
    var classes = useStyles();

    const [user, setUser] = useState(null)
    const [errorMeg, setErrorMsg] = useState('');
    const [visibleIndicator, setVisibleIndicator] = useState(false);

    useEffect(() => {
        getTutor();
    }, []);

    const handleClickOk = () => {
        history.push('/app/tutor/list');
    }
    const handleClickDeleteChip = (data) => {
        
    }

    const getTutor = () => {
        const values = queryString.parse(window.location.search);
        const id = values.id;
        setVisibleIndicator(true);
        Service.get_tutor(id).then(
            response => {
                setVisibleIndicator(false);
                console.log(response.data);
                if(response.data.code === 200) {
                    localStorage.setItem("token", response.data.data.token);
                    if(response.data.data.profile) {
                        console.log(response.data.data.profile);    
                        let profile = response.data.data.profile;
                        if(profile.subject === null || profile.subject === '') {
                            profile.subjects = [];
                        } else {
                            profile.subjects = profile.subject.split(', ');
                        }
                        
                        setUser(profile);
                    } else {
                        setErrorMsg("Error to get user information.");
                    }
                } else {
                    if(response.data.message === INVALID_TOKEN) {
                        Logout();
                        history.push('/');
                    } else {
                        setErrorMsg(response.data.message);
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
                setErrorMsg(resMessage);
                console.log(error);
            }
        )
    }

    return (
        <div className={classes.root}>
            {visibleIndicator ? <div className={classes.div_indicator}> <CircularProgress className={classes.indicator} /></div> : <div/> }
            <div className={classes.div_title}>
                <span className={classes.title}>TUTOR</span>
            </div>
            <div className={classes.content}>
                <div className={classes.content_head}>
                    <span className={classes.parent_title}>TUTOR {'>>'} </span>
                    <span className={classes.child_title}>&nbsp;View TUTOR</span>
                </div>
                <div className={classes.table_head}>
                    View TUTOR 
                </div>
                <div className={classes.div_context}>
                    <div>
                        
                        <div className={classes.div_inline}>
                            <ShadowInput
                                className={classes.textinput}
                                name="first_name"
                                value={user === null || user.first_name === null ? '' : user.first_name}
                                startAdornment={
                                    <InputAdornment position="start">
                                       <div className={classes.prefix} position="start">First Name:</div>
                                    </InputAdornment>
                                }
                            />
                            <div className={classes.div_split}/>
                            <ShadowInput
                                className={classes.textinput}
                                name="last_name"
                                value={user === null || user.last_name === null ? '' : user.last_name}
                                startAdornment={
                                    <InputAdornment position="start">
                                       <div className={classes.prefix} position="start">Last Name:</div>
                                    </InputAdornment>
                                }
                            />
                            <div className={classes.div_split}/>
                            <ShadowInput
                                className={classes.textinput}
                                name="email"
                                value={user === null || user.email === null ? '' : user.email}
                                startAdornment={
                                    <InputAdornment position="start">
                                       <div className={classes.prefix} position="start">Email:</div>
                                    </InputAdornment>
                                }
                            />
                        </div>
                        <div className={classes.div_inline}>
                            <ShadowInput
                                className={classes.textinput}
                                name="phone"
                                value={user === null || user.phone === null ? '' : user.phone}
                                startAdornment={
                                    <InputAdornment position="start">
                                       <div className={classes.prefix} position="start">Contact No:</div>
                                    </InputAdornment>
                                }
                            />
                            <div className={classes.div_split}/>
                            <ShadowInput
                                className={classes.textinput}
                                name="syllabus"
                                value={user === null || user.syllabus === null? '' : user.syllabus}
                                startAdornment={
                                    <InputAdornment position="start">
                                       <div className={classes.prefix} position="start">Syllabus:</div>
                                    </InputAdornment>
                                }
                            />
                        </div>
                        <div className={classes.div_inline}>
                            <ShadowInput
                                className={classes.textinput}
                                name="phone"
                                value={user === null || user.grade === null ? '' : user.grade}
                                startAdornment={
                                    <InputAdornment position="start">
                                       <div className={classes.prefix} position="start">Class / Grade Range:</div>
                                    </InputAdornment>
                                }
                            />
                            <div className={classes.div_split}/>
                            {
                                user === null || user.subjects.length === 0? 
                                    <ShadowInput
                                        className={classes.textinput}
                                        name="first_name"
                                        value=''
                                        startAdornment={
                                            <InputAdornment position="start">
                                            <div className={classes.prefix} position="start">Subjects:</div>
                                            </InputAdornment>
                                        }
                                    /> : 
                                    <ChipArea subjects={user.subjects || []} onDeleteChip={handleClickDeleteChip} />
                            } 
                        </div>
                          
                    </div>
                    <div className={classes.div_button}>
                        <div className={classes.label}>{errorMeg}</div>
                        <div className={classes.div_button_content}>
                            <Button className={classes.button } onClick={handleClickOk}>OK</Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default withRouter(TutorView);
