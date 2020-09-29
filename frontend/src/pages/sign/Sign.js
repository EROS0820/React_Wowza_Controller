import React, { useState, useEffect } from "react";
import { Route, Switch, Redirect, withRouter } from "react-router-dom";
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import SignHeader from '../../components/SignHeader';
import HomeBottom from '../../components/HomeBottom';
import Support from '../../components/Support';
import Login from '../login';
import useStyles from "./styles";

const Sign = (props) => {
    const classes = useStyles();

    const {history} = props;

    useEffect(()=>{
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }, []);

    return(
        <div className={classes.root}>
            <SignHeader history={history} />
            <Switch>
                <Route exact path="/sign" render={() => <Login />} />
            </Switch>
            <HomeBottom />
        </div>
    );
}

export default withRouter(Sign);
