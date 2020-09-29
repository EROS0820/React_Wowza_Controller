import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import validate from 'validate.js';
import { CircularProgress, InputAdornment } from '@material-ui/core';
import ShadowInput from '../../components/ShadowInput/ShadowInput';
import RedButton from '../../components/RedButton/RedButton';
import ShadowPan from '../../components/ShadowPan/ShadowPan';
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
    verification: {
      presence: { allowEmpty: false, message: 'is required' },
      length: {
        // maximum: 6,
        minimum: 6,
      }
    },
};

const Verification = (props) => {
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

        setFormValue(formValue => ({
            ...formValue,
            isValid: errors ? false : true,
            errors: errors || {}
        }));
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

    const handleClickVerification = () => {
        if(!formValue.isValid) {
            return
        }
        let privilege = 0;
        let email = localStorage.getItem("email");
        let password = localStorage.getItem("password");
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
        Service.verifycode(email, password, privilege, formValue.values.verification).then(
            response => {
                setVisibleIndicator(false);
                console.log(response.data);
                if(response.data.code === 200) {
                    localStorage.removeItem("email");
                    localStorage.removeItem("password");
                    localStorage.setItem("token", response.data.data.token);
                    localStorage.setItem("user", JSON.stringify(response.data.data.profile));
                    history.push('/sign/register/type=' + props.match.params.type)
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

    const handleClickResend = () => {
        let privilege = 0;
        let email = localStorage.getItem("email");
        let password = localStorage.getItem("password");
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
        Service.signup(email, password, privilege).then(
            response => {
                setVisibleIndicator(false);
                console.log(response.data);
                if(response.data.code === 200) {
                    localStorage.setItem("token", response.data.data.token);
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

    return (
        <div className={
            (
                {
                    'admin': classes.div_parallex_admin,
                    'teacher': classes.div_parallex_teacher,
                    'student' : classes.div_parallex_student,
                    'school' : classes.div_parallex_school,
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
                                'student' : StudentLogo ,
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
                                                'school': AdminIcon
                                            }[props.match.params.type]
                                        )
                                    } />
                                </ShadowPan>
                                <span className={classes.title}>Verification</span>
                            </div>
                            <ShadowInput
                                className={classes.div_email}
                                name="verification"
                                // type="number"
                                onChange={handleChange}
                                value={formValue.values.verification || ''}
                                placeholder="Verification Code"
                                startAdornment={
                                    <InputAdornment position="start">
                                        <img className={classes.icon_insert} src={MailIcon}/>
                                    </InputAdornment>
                                }
                            />
                            <div className={classes.label}>{errorMeg}</div>
                            <div className={classes.div_sign_button}>
                                <RedButton onClick={handleClickVerification} className={!formValue.isValid ? classes.button_disable : classes.button}>Verification</RedButton>
                            </div>
                            <div className={classes.div_resend}>
                                <div className={classes.resend} onClick={handleClickResend}>Resend Code</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        
    );
}

export default withRouter(Verification);
