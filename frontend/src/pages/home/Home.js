import React, { useState, useEffect } from "react";
import { Route, Switch, Redirect, withRouter } from "react-router-dom";
import HomeHeader from '../../components/HomeHeader';
import HomeBottom from '../../components/HomeBottom';
import HomeContent from '../homeContent';
import Login from '../login'
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import "./styles.css";

const Home = (props) => {
    const {history} = props;

    useEffect(()=>{
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }, []);

    return(
        <div className="root">
            <HomeHeader history={history}/>
            <Switch>
                <Route exact path={'/home'}>
                    <HomeContent history={history}/>
                </Route>
                <Route path={'/home/login'} >
                    <Login />
                </Route>
            </Switch>
            <HomeBottom />
            <div className={"btn-top " + (props.topButton ? "show" : "hide")} onClick={() => props.onClickTop()}>
                <KeyboardArrowUpIcon className="arrow-top"/>
            </div>

        </div>
    );
}

export default withRouter(Home);
