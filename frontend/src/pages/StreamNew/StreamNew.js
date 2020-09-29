import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import validate from 'validate.js';
import { InputAdornment, TextField, Button, CircularProgress } from '@material-ui/core';
import Autocomplete from '@material-ui/lab/Autocomplete';
import AddIcon from '@material-ui/icons/Add';
import Service from "../../service/Service";
import Logout, {INVALID_TOKEN} from "../../utils/logout";
import {ListGrade, ListGender, ListSyllabus} from "../../utils/values";
import ShadowInput from '../../components/ShadowInput/ShadowInput';
import RangeSlider from '../../components/RangeSlider/RangeSlider';
import TutorSubject from '../../components/TutorSubject/TutorSubject';
import ChipArea from '../../components/ChipArea/ChipArea';
import useStyles from "./styles";

const schema = {
    last_name: {
        presence: { allowEmpty: false, message: 'is required' },
        length: {
          maximum: 64
        }
    },
    first_name: {
        presence: { allowEmpty: false, message: 'is required' },
        length: {
          maximum: 64
        }
    },
    email: {
      presence: { allowEmpty: false, message: 'is required' },
      length: {
        maximum: 64
      },
      email: {
        message: "^Please enter a valid email address"
      }
    },
    password: {
      presence: { allowEmpty: false, message: 'is required' },
      length: {
        maximum: 128,
        minimum: 6,
      }
    },
};

const domain = [1, 12];
const defaultValues = [1, 12];

const StreamNew = (props) => {
    const {history} = props;
    var classes = useStyles();

    const [formValue, setFormValue] = useState({
        isValid: false,
        values: {},
        touched: {},
        errors: {}
    })
    const [photo, setPhoto] = useState(null);
    const [video, setVideo] = useState(null);
    const [grade, setGrade] = useState(ListGrade[0].label);
    const [gender, setGender] = useState(ListGender[0].label);
    const [syllabus, setSyllabus] = useState(ListSyllabus[0].label);
    const [checkGrade, setCheckGrade] = useState(false);
    const [subjects, setSubjects] = useState([]);
    const [errorMeg, setErrorMsg] = useState('');
    const [visibleIndicator, setVisibleIndicator] = useState(false);

    useEffect(() => {
        const errors = validate(formValue.values, schema);

        setFormValue(formValue => ({
            ...formValue,
            isValid: errors ? false : true,
            errors: errors || {}
        }));

    }, [formValue.values]);

    useEffect(() => {
        if(grade === '' || typeof(grade) === 'undefined' || gender === '' || typeof(gender) === 'undefined' || syllabus === '' || typeof(syllabus) === 'undefined'){
            setCheckGrade(false);
        } else {
            setCheckGrade(true);
        }
    }, [grade, gender, syllabus]); 

    const handleChange = event => {
        event.persist();
        setFormValue(formValue => ({
            ...formValue,
            values: {
                ...formValue.values,
                [event.target.name]:event.target.value
            },
            touched: {
                ...formValue.touched,
                [event.target.name]: true
            }
        }));
    }
    const hasError = field =>
        formValue.touched[field] && formValue.errors[field] ? true : false;

    const handleClickCancel = () => {
        setFormValue(formValue => ({
            ...formValue,
            values: {},
        }));
        setSubjects([]);
        setGrade(ListGrade[0].label);
        setGender(ListGender[0].label);
        setSyllabus(ListSyllabus[0].label);
    }

    const handleClickGenerate = () => {
        var randomstring = Math.random().toString(36).slice(-8);
        setFormValue(formValue => ({
            ...formValue,
            values: {
                ...formValue.values,
                checkemail: formValue.values.email,
                password: randomstring
            },
            touched: {
                ...formValue.touched,
                password: true
            }
        }));
    }

    const handleChangeSyllabus = event => {
        setSyllabus(event.target.innerText);
    }

    const handleChangeGrade = event => {
        setGrade(event.target.innerText);
    }

    const handleChangeGender = event => {
        setGender(event.target.innerText);
    }

    const handleClickAddSubject = () => {
        console.log(formValue.values.subject);
        if(formValue.values.subject === undefined || formValue.values.subject === '' || subjects.indexOf(formValue.values.subject) !== -1) {
            return;
        }
        let values = [...subjects];
        values.push(formValue.values.subject);
        setSubjects(values);
        setFormValue(formValue => ({
            ...formValue,
            values: {
                ...formValue.values,
                subject: ''
            },
        }));
    }

    const handleDownEnterChip = (event) => {
        if(event.keyCode === 13) {
            handleClickAddSubject();
        }
    }

    const handleDeleteChip = (deletechip) => {
        setSubjects((subjects) => subjects.filter((subject) => subject !== deletechip));
    }

    const handleClickSave = () => {
        if(!formValue.isValid || !checkGrade) {
            return
        }

        let list_subject = "";
        subjects.map((cell, index) => {
            list_subject = list_subject + cell;
            if(index !== subjects.length - 1) {
                list_subject = list_subject + ', ';
            }
        });

        let first_name = formValue.values.first_name;
        let last_name = formValue.values.last_name;
        let email = formValue.values.email;
        let phone = formValue.values.phone;
        let password = formValue.values.password;

        setVisibleIndicator(true);
        Service.add_stream(first_name, last_name, gender, phone, email, grade, syllabus, list_subject, password).then(
            response => {
                setVisibleIndicator(false);
                console.log(response.data);
                if(response.data.code === 200) {
                    localStorage.setItem("token", response.data.data.token);
                    history.push('/wowza/list');
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
            asdfasdfasdfasdf
            {visibleIndicator ? <div className={classes.div_indicator}> <CircularProgress className={classes.indicator} /></div> : <div/> }
            <div className={classes.div_title}>
                <span className={classes.title}>STUDENT</span>
            </div>
            <div className={classes.content}>
                <div className={classes.content_head}>
                    <span className={classes.parent_title}>STUDENT {'>>'} </span>
                    <span className={classes.child_title}>&nbsp;ADD STUDENT</span>
                </div>
                <div className={classes.table_head}>
                    ADD STUDENT
                </div>
                <div className={classes.div_context}>
                    <div>
                        
                        <div className={classes.div_inline}>
                            <ShadowInput
                                className={classes.textinput}
                                name="first_name"
                                error={hasError('first_name')}
                                value={formValue.values.first_name || ''}
                                onChange={handleChange}
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
                                error={hasError('last_name')}
                                value={formValue.values.last_name || ''}
                                onChange={handleChange}
                                startAdornment={
                                    <InputAdornment position="start">
                                       <div className={classes.prefix} position="start">Last Name:</div>
                                    </InputAdornment>
                                }
                            />
                            <div className={classes.div_split}/>
                            <Autocomplete
                                className={classes.div_country}
                                name="gender"
                                options={ListGender}
                                getOptionLabel={(option) => option.label || ""}
                                value={ListGender.find(v => v.label === gender) || {}}
                                onChange={handleChangeGender}
                                renderInput={(params) => 
                                    <TextField 
                                        {...params}
                                        className={classes.text_country}
                                        variant="standard"
                                        InputProps={{
                                            ...params.InputProps,
                                            startAdornment: (
                                                <div className={classes.prefix} position="start">Gender:</div>
                                            ),
                                        }}
                                    />
                                }
                            />
                        </div>
                        <div className={classes.div_inline}>
                            <ShadowInput
                                className={classes.textinput}
                                name="email"
                                error={hasError('email')}
                                value={formValue.values.email || ''}
                                onChange={handleChange}
                                startAdornment={
                                    <InputAdornment position="start">
                                       <div className={classes.prefix} position="start">Email:</div>
                                    </InputAdornment>
                                }
                            />
                            <div className={classes.div_split}/>
                            <ShadowInput
                                className={classes.textinput}
                                name="phone"
                                value={formValue.values.phone || ''}
                                onChange={handleChange}
                                startAdornment={
                                    <InputAdornment position="start">
                                       <div className={classes.prefix} position="start">Contact No:</div>
                                    </InputAdornment>
                                }
                            />
                        </div>
                        <div className={classes.div_inline}>
                            <Autocomplete
                                className={classes.div_country}
                                name="grade"
                                options={ListGrade}
                                getOptionLabel={(option) => option.label || ""}
                                value={ListGrade.find(v => v.label === grade) || {}}
                                onChange={handleChangeGrade}
                                renderInput={(params) => 
                                    <TextField 
                                        {...params}
                                        className={classes.text_country}
                                        variant="standard"
                                        InputProps={{
                                            ...params.InputProps,
                                            startAdornment: (
                                                <div className={classes.prefix} position="start">Class / Grade:</div>
                                            ),
                                        }}
                                    />
                                }
                            />
                            <div className={classes.div_split}/>
                                <Autocomplete
                                    className={classes.div_country}
                                    name="syllabus"
                                    options={ListSyllabus}
                                    getOptionLabel={(option) => option.label || ""}
                                    value={ListSyllabus.find(v => v.label === syllabus) || {}}
                                    onChange={handleChangeSyllabus}
                                    renderInput={(params) => 
                                        <TextField 
                                            {...params}
                                            className={classes.text_country}
                                            variant="standard"
                                            InputProps={{
                                                ...params.InputProps,
                                                startAdornment: (
                                                    <div className={classes.prefix} position="start">Syllabus:</div>
                                                ),
                                            }}
                                        />
                                    }
                                />
                        </div>
                        <div className={classes.div_inline}>
                            <ShadowInput
                                className={classes.textinput}
                                name="subject"
                                value={formValue.values.subject || ''}
                                onChange={handleChange}
                                onKeyDown={handleDownEnterChip}
                                startAdornment={
                                    <InputAdornment position="start">
                                       <div className={classes.prefix} position="start">Enter Subject:</div>
                                    </InputAdornment>
                                }
                            />
                            <div className={classes.div_split}/>
                            <div className={classes.div_icon_add}>
                                <AddIcon className={classes.icon} onClick={handleClickAddSubject} />
                            </div>
                            <div className={classes.div_split}/>
                            <ChipArea subjects={subjects} onDeleteChip={handleDeleteChip}/>
                        </div>
                    </div>
                    <div className={classes.div_password}>
                        <div className={classes.title_password}>Create Email & Password</div>
                        <div className={classes.div_password_content}>
                            <div className={classes.div_password_cell}>
                                <div className={classes.text_password}>email</div>
                                <TextField
                                    className={classes.password}
                                    name="checkemail"
                                    variant="outlined"
                                    value={formValue.values.checkemail || ''}
                                    InputProps={{
                                        classes: {input: classes.password_edit},
                                    }}
                                />
                            </div>
                            <div className={classes.div_padding_vertical} />
                            <div className={classes.div_password_cell}>
                                <div className={classes.text_password}>Password</div>
                                <div className={classes.div_password_generate}>
                                    <TextField
                                        className={classes.password}
                                        name="password"
                                        variant="outlined"
                                        error={hasError('password')}
                                        value={formValue.values.password || ''}
                                        InputProps={{
                                            classes: {input: classes.password_edit},
                                        }}
                                    />
                                    <Button className={classes.btn_generate} onClick={handleClickGenerate}>Generate</Button>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                    <div className={classes.div_button}>
                        <div className={classes.label}>{errorMeg}</div>
                        <div className={classes.div_button_content}>
                            <Button className={classes.button_cancel} onClick={handleClickCancel}>Cancel</Button>
                            <Button className={formValue.isValid && checkGrade? classes.button : classes.button_disable} onClick={handleClickSave}>Save</Button>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    );
}

export default withRouter(StreamNew);
