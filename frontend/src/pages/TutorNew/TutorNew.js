import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import validate from 'validate.js';
import { InputAdornment, TextField, Button, CircularProgress, Menu, MenuItem, ListItemText } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import Autocomplete from '@material-ui/lab/Autocomplete';
import AddIcon from '@material-ui/icons/Add';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import Service from "../../service/Service";
import Logout, {INVALID_TOKEN} from "../../utils/logout";
import {ListSyllabus} from "../../utils/values";
import ShadowInput from '../../components/ShadowInput';
import RangeSlider from '../../components/RangeSlider';
import ClassGrade from '../../components/ClassGrade';
import TutorSubject from '../../components/TutorSubject';
import ChipArea from '../../components/ChipArea';
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

const StyledMenu = withStyles({
    paper: {
      border: '1px solid #d3d4d5',
    },
  })((props) => (
    <Menu
      elevation={0}
      getContentAnchorEl={null}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'left',
      }}
      transformOrigin={{
        vertical: 'top',
        horizontal: 'left',
      }}
      {...props}
    />
));

const StyledMenuItem = withStyles((theme) => ({
    root: {
      ' &:select': {
        backgroundColor: '#00D8FF',
      },
    },
}))(MenuItem);

const defaultValues = [1, 12];

const TutorNew = (props) => {
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
    const [syllabus, setSyllabus] = useState(ListSyllabus[0].label);
    const [checkSyllabus, setCheckSyllabus] = useState(false);
    const [grade, setGrade] = useState([1, 12]);
    const [range, setRange] = useState(true);
    const [selectGrade, setSelectGrade] = useState([false, false, false, false, false, false, false, false, false, false, false, false]);
    const [subjects, setSubjects] = useState([]);
    const [anchorEl, setAnchorEl] = React.useState(null);
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
        if(syllabus !== '' && typeof(syllabus) !== 'undefined'){
            setCheckSyllabus(true);
        } else {
            setCheckSyllabus(false);
        }
    }, [syllabus]);

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

    const handleClickGrade = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleCloseGrade = () => {
        setAnchorEl(null);
    };

    const handleClickRange = () => {
        setRange(true);
        setAnchorEl(null);
    }

    const handleClickClassGrade = () => {
        setRange(false);
        setAnchorEl(null);
    }

    const handleChangeClassGradeCheck = (index) => {
        console.log(index);
        let list_check = [...selectGrade];
        list_check[index] = !list_check[index];
        setSelectGrade(list_check);
    }

    const handleChangeGrade = (value) => {
        setGrade(value);
    }

    const handleClickCancel = () => {
        setFormValue(formValue => ({
            ...formValue,
            values: {},
        }));

        setSubjects([]);
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
        console.log(event.target.innerText);
        setSyllabus(event.target.innerText);
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
        if(!formValue.isValid || !checkSyllabus) {
            return
        }
        var grade_value = "";
        if(range) {
            grade_value = grade_value + grade[0];
            grade_value = grade_value + ' - ';
            grade_value = grade_value + grade[1];
        } else {
            selectGrade.map((cell, index) => {
                if(cell === true) {
                    grade_value = grade_value + (index + 1) + ', ';
                }
            });
            grade_value = grade_value.slice(0, grade_value.length - 2);
        }

        var list_subject = [];
        subjects.map((cell) => {
            var cell_subject = {
                subject: cell,
                url_video: "",
                url_photo: ""
            }
            list_subject.push(cell_subject);
        });

        var first_name = formValue.values.first_name;
        var last_name = formValue.values.last_name;
        var phone = formValue.values.phone;
        var email = formValue.values.email;
        var password = formValue.values.password;

        setVisibleIndicator(true);
        Service.add_tutor(first_name, last_name, phone, email, syllabus, grade_value, password, list_subject).then(
            response => {
                setVisibleIndicator(false);
                console.log(response.data);
                if(response.data.code === 200) {
                    localStorage.setItem("token", response.data.data.token);
                    history.push('/app/tutor/list');
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
                    <span className={classes.child_title}>&nbsp;ADD TUTOR</span>
                </div>
                <div className={classes.table_head}>
                    ADD TUTOR 
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
                        </div>
                        <div className={classes.div_inline}>
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
                        <div className={classes.div_grade}>
                            <div className={classes.text_grade} onClick={handleClickGrade}>
                                {range ? "Range" : "Class / Grade"}
                                <ArrowDropDownIcon className={classes.icon_arrow_down}/>
                            </div>
                            <StyledMenu
                                id="customized-menu"
                                anchorEl={anchorEl}
                                keepMounted
                                open={Boolean(anchorEl)}
                                onClose={handleCloseGrade}
                            >
                                <StyledMenuItem onClick={handleClickRange} >
                                    <ListItemText primary="Range: this will be consecutive classes" />
                                </StyledMenuItem>
                                <StyledMenuItem onClick={handleClickClassGrade}>
                                    <ListItemText primary="Class/ Grade: They can select one or more non continues classes" />
                                </StyledMenuItem>
                            </StyledMenu>
                            {range ? 
                                <RangeSlider onChange={handleChangeGrade} defaultValues={defaultValues}/> : 
                                <ClassGrade grades={selectGrade} onClickChange={handleChangeClassGradeCheck}/>
                            }
                            
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
                            <Button className={formValue.isValid && checkSyllabus? classes.button : classes.button_disable} onClick={handleClickSave}>Save</Button>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    );
}

export default withRouter(TutorNew);
