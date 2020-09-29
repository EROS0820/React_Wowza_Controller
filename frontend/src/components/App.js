import React, { useEffect, useState } from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
// context
import { useUserState } from "../context/UserContext";
// pages
import Error from "../pages/error";
import Sign from '../pages/sign';
// components
import Layout from "./Layout";



export default function App() {
  // global
  var { isAuthenticated } = useUserState();

  const [topButton, showTopButton] = useState(false);

    useEffect(() => {
      window.addEventListener('scroll', handleScroll);
    }, []);

    const handleScroll = () => {
      if(window.scrollY > 100) {
          showTopButton(true);
      } else {
          showTopButton(false);
      }
    }

    const handleClickTop = () => {
      window.scrollTo({
          top: 0,
          behavior: 'smooth'
      });
    }

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" render={() => (localStorage.getItem('token') ? <Redirect to="wowza/list" /> : <Redirect to="sign" />)} />
        <Route path={'/wowza'}>
          <Layout />
        </Route>
        <Route path={'/sign'}>
          <Sign onClickTop={handleClickTop} topButton={topButton} />
        </Route>
        <Route component={Error} />
      </Switch>
    </BrowserRouter>
  );
}
