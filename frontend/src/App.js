import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import routes from "./Routes";
import withTracker from "./withTracker";
// import {webRtcPeer} from 'kurento-utils';

import "bootstrap/dist/css/bootstrap.min.css";
import "./shards-dashboard/styles/shards-dashboards.1.1.0.min.css";
import "../src/assets/mentorWallet.css";
import "../src/assets/student.css";
import "../src/assets/mentor.css";
import "../src/assets/common.css";

export default class App extends React.Component{

  constructor(props) {
    super(props);    
    this.state = {
      
    }
  }

  render() {
    return (
      <Router basename={process.env.REACT_APP_BASENAME || ""}>
        <div>
          {routes.map((route, index) => {
            return (
              <Route
                key={index}
                path={route.path}
                exact={route.exact}
                component={withTracker(props => {
                  return (
                    <route.layout {...props}>
                      <route.component {...props} />
                    </route.layout>
                  );
                })}
              />
            );
          })}
        </div>
      </Router>
    );
  }
};