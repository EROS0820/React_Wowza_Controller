import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import validate from 'validate.js';
import { CircularProgress, InputAdornment } from '@material-ui/core';
import { GoogleLogin } from 'react-google-login';
import AppleLogin from 'react-apple-login';
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props';
import ShadowInput from '../../components/ShadowInput/ShadowInput';
import RedButton from '../../components/RedButton/RedButton';
import ShadowPan from '../../components/ShadowPan';
import Service from "../../service/Service";
import useGlobal from "../../utils/global-status";
import useStyles from "./styles";

import AdminLogo from '../../images/admin_logo.svg';
import TeacherLogo from '../../images/teacher_logo.svg';
import StudentLogo from '../../images/student_logo.svg';

import AdminIcon from '../../images/admin_small_icon.svg';
import TeacherIcon from '../../images/teacher_small_icon.svg';
import StudentIcon from '../../images/student_small_icon.svg';
import MailIcon from '../../images/icon_mail.svg';
import HideIcon from '../../images/icon_hide.svg';
import FacebookIcon from '../../images/icon_facebook.svg';
import GoogleIcon from '../../images/icon_google.svg';
import AppleIcon from '../../images/icon_apple.svg';

const schema = {
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
    confirm_password: {
        presence: { allowEmpty: false, message: 'is required' },
        length: {
            maximum: 128,
            minimum: 6,
        }
    }
};

const Signup = (props) => {
    const {history} = props;
    var classes = useStyles();
    const [formValue, setFormValue] = useState({
        isValid: false,
        values: {},
        errors: {}
    })

    const [errorMeg, setErrorMsg] = useState('');
    const [visibleIndicator, setVisibleIndicator] = useState(false);
    const [globalState, globalActions] = useGlobal();

    useEffect(() => {
        const errors = validate(formValue.values, schema);
        // if(!formValue.values.password || !formValue.values.confirm_password || formValue.values.password !== formValue.values.confirm_password) {
        //     errors = true;
        // }

        setFormValue(formValue => ({
            ...formValue,
            isValid: errors ? false : true,
            errors: errors || {}
        }));

        if(!errors) {
            if(formValue.values.password != formValue.values.confirm_password) {
                setFormValue(formValue => ({
                    ...formValue,
                    isValid: false,
                    errors: errors || {}
                }));
            } 
        }

    }, [formValue.values]);

    const handleChange = event => {
        event.persist();
        setFormValue(formValue => ({
            ...formValue,
            values: {
                ...formValue.values,
                [event.target.name]:event.target.value
            }
        }));
    }

    const hasError = field => formValue.errors[field] ? true : false;

    const handleSignup = event => {
        if(!formValue.isValid) {
            return;
        }
        event.preventDefault();

        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
        
        let privilege = 0;
        switch(props.match.params.type) {
            case "admin":
                privilege = 0;
                break;
            case "school":
                privilege = 1;
                break;
            case "teacher":
                privilege = 2;
                break;
            case "student":
                privilege = 3;
                break;
            default: 
                break;
        }
        
        setVisibleIndicator(true);
        Service.signup(formValue.values.email, formValue.values.password, privilege).then(
            response => {
                setVisibleIndicator(false);
                console.log(response.data);
                if(response.data.code === 200) {
                    globalActions.setEmail(formValue.values.email);
                    globalActions.setPassword(formValue.values.password);
                    localStorage.setItem("token", response.data.data.token);
                    localStorage.setItem("email", formValue.values.email);
                    localStorage.setItem("password", formValue.values.password);
                    history.push('/sign/verify/type=' + props.match.params.type);
                } else {
                    setErrorMsg(response.data.message);
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
    };

    const responseGoogleSuccess = (response) => {
        let privilege = 0;
        switch(props.match.params.type) {
            case "admin":
                privilege = 0;
                break;
            case "school":
                privilege = 1;
                break;
            case "teacher":
                privilege = 2;
                break;
            case "student":
                privilege = 3;
                break;
            default: 
                break;
        }

        setVisibleIndicator(true);
        Service.signupsocial(response.profileObj.email, 1, privilege).then(
            response => {
                setVisibleIndicator(false);
                console.log(response.data);
                if(response.data.code === 200) {
                    localStorage.setItem("token", response.data.data.token);
                    localStorage.setItem("user", JSON.stringify(response.data.data.profile));
                    history.push('/sign/register/type=' + props.match.params.type);
                } else {
                    setErrorMsg(response.data.message);
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

    const responseGoogleFailure = (response) => {
        console.log(response);
    }

    const responseFacebookSuccess = (response) => {
        console.log(response);
    }

    const responseFacebookFailure = (response) => {
        console.log(response);
    }

    return (
        <div className={
            (
                {
                    'admin': classes.div_parallex_admin,
                    'teacher': classes.div_parallex_teacher,
                    'student' : classes.div_parallex_student,
                    'school': classes.div_parallex_school,
                }[props.match.params.type]
            )
        }
        >
            <div className={classes.div_context}>
                <div className={classes.sign_content}>
                    <img className={classes.logo} src={
                        (
                            {
                                'admin': AdminLogo,
                                'teacher': TeacherLogo,
                                'student' : StudentLogo,
                                'school' : AdminLogo, 
                            }[props.match.params.type]
                        )
                    } />
                    <div className={classes.div_sign}>
                    <div className={classes.root}>
                        {visibleIndicator ? <div className={classes.div_indicator}> <CircularProgress className={classes.indicator} /></div> : <div/> }
                        <div className={classes.div_title}>
                            <ShadowPan className={classes.div_circle}>
                                <img className={classes.icon} 
                                    src={
                                    (
                                        {
                                            'admin': AdminIcon,
                                            'teacher': TeacherIcon,
                                            'student': StudentIcon,
                                            'school': AdminIcon,
                                        }[props.match.params.type]
                                    )
                                } />
                            </ShadowPan>
                            <span className={classes.title}>
                            {
                                (
                                    {
                                        'admin': 'Admin Signup',
                                        'teacher': 'Tutor Signup',
                                        'student': 'Student Signup',
                                        'school': 'School Signup'
                                    }[props.match.params.type]
                                )
                            }
                            </span>
                        </div>
                        <ShadowInput
                            className={classes.div_email}
                            name="email"
                            onChange={handleChange}
                            value={formValue.values.email || ''}
                            placeholder="Mail"
                            startAdornment={
                                <InputAdornment position="start">
                                    <img className={classes.icon_insert} src={MailIcon}/>
                                </InputAdornment>
                            }
                        />
                        <ShadowInput
                            className={classes.div_password}
                            name="password"
                            placeholder="Pasword"
                            type="password"
                            onChange={handleChange}
                            value={formValue.values.password || ''}
                            startAdornment={
                                <InputAdornment position="start">
                                    <img className={classes.icon_insert} src={HideIcon}/>
                                </InputAdornment>
                            }
                        />
                        <ShadowInput
                            className={classes.div_password}
                            name="confirm_password"
                            placeholder="Confirm Password"
                            type="password"
                            onChange={handleChange}
                            value={formValue.values.confirm_password || ''}
                            startAdornment={
                                <InputAdornment position="start">
                                    <img className={classes.icon_insert} src={HideIcon}/>
                                </InputAdornment>
                            }
                        />
                        <div className={classes.label}>{errorMeg}</div>
                        <div className={classes.div_sign_button}>
                            <RedButton onClick={handleSignup} disabled={true} className={!formValue.isValid ? classes.button_disable : classes.button}>Sign up</RedButton>
                        </div>
                        <div className={classes.div_social}>
                            <FacebookLogin
                                appId={process.env.REACT_APP_FACEBOOK_APP_ID}
                                autoLoad={true}
                                callback={responseFacebookSuccess}
                                onFailure={responseFacebookFailure}
                                render={renderProps => (
                                    <ShadowPan className={classes.facebook} onClick={renderProps.onClick}>
                                        <img className={classes.icon} src={FacebookIcon} />
                                    </ShadowPan>
                                )}
                            />
                            <GoogleLogin
                                clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
                                render={renderProps => (
                                    <ShadowPan className={classes.google} onClick={renderProps.onClick}>
                                        <img className={classes.icon} src={GoogleIcon} />
                                    </ShadowPan>
                                )}
                                buttonText="Login"
                                onSuccess={responseGoogleSuccess}
                                onFailure={responseGoogleFailure}
                                cookiePolicy={'single_host_origin'}
                            />
                            
                            <AppleLogin 
                                clientId={process.env.REACT_APP_APPLE_CLIENT_ID}
                                redirectURI="https://redirectUrl.com" 
                                render={renderProps => (
                                    <ShadowPan className={classes.apple} onClick={renderProps.onClick}>
                                        <img className={classes.icon} src={AppleIcon} />
                                    </ShadowPan>
                                )}
                            />
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>

        
    );
}

export default withRouter(Signup);
