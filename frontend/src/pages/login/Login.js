import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import validate from 'validate.js';
import { CircularProgress, InputAdornment } from '@material-ui/core';
import ShadowInput from '../../components/ShadowInput';
import RedButton from '../../components/RedButton';
import ShadowPan from '../../components/ShadowPan';
import Service from "../../service/Service";
import useStyles from "./styles";

import AdminLogo from '../../images/admin_logo.svg';

import AdminIcon from '../../images/admin_small_icon.svg';
import MailIcon from '../../images/icon_mail.svg';
import HideIcon from '../../images/icon_hide.svg';

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
    }
};

const Login = (props) => {
    const {history} = props;

    var classes = useStyles();
    const [formValue, setFormValue] = useState({
        isValid: false,
        values: {},
        errors: {}
    })

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

    const handleClickLogin = () => {
        if(!formValue.isValid) {
            return
        }
        
        setVisibleIndicator(true);
        Service.login(formValue.values.email, formValue.values.password).then(
            response => {
                setVisibleIndicator(false);
                console.log(response.data);
                if(response.data.code === 200) {
                    localStorage.setItem("token", response.data.data.token);
                    localStorage.setItem("user", JSON.stringify(response.data.data.profile));
                    history.push('/app/dashboard');
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
        <div className={classes.div_parallex_admin}>
            <div className={classes.div_context}>
                <div className={classes.sign_content}>
                    <img className={classes.logo} src={AdminLogo} />
                    <div className={classes.div_sign}>
                        <div className={classes.root}>
                            {visibleIndicator ? <div className={classes.div_indicator}> <CircularProgress className={classes.indicator} /></div> : <div/> }
                            <div className={classes.div_title}>
                                <ShadowPan className={classes.div_circle}>
                                    <img className={classes.icon} 
                                        src={AdminIcon}/>
                                </ShadowPan>
                                <span className={classes.title}>
                                    Admin Login
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
                                        <img className={classes.icon_insert}src={HideIcon}/>
                                    </InputAdornment>
                                }
                            />
                            <div className={classes.label}>{errorMeg}</div>
                            <div className={classes.div_sign_button}>
                                <RedButton onClick={handleClickLogin} className={!formValue.isValid ? classes.button_disable : classes.button}>Login</RedButton>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default withRouter(Login);
