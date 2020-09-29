import React from "react";
import {
  Route,
  Switch,
  Redirect,
  withRouter,
} from "react-router-dom";
import classnames from "classnames";

// styles
import useStyles from "./styles";

// components
import Header from "../Header";
import Sidebar from "../Sidebar";

// pages
import Dashboard from "../../pages/dashboard";
import Typography from "../../pages/typography";
import Notifications from "../../pages/notifications";
import Maps from "../../pages/maps";
import Icons from "../../pages/icons";
import Charts from "../../pages/charts";

import ClassList from '../../pages/ClassList';
import ClassNew from '../../pages/ClassNew';
import ClassSchedule from '../../pages/ClassSchedule';
import StudentList from '../../pages/StudentList';
import StudentNew from '../../pages/StudentNew';
import StudentView from '../../pages/StudentView';
import StudentEdit from '../../pages/StudentEdit';
import TutorList from '../../pages/TutorList';
import TutorNew from '../../pages/TutorNew';
import TutorEdit from '../../pages/TutorEdit';
import TutorView from '../../pages/TutorView';
// context`
import { useLayoutState } from "../../context/LayoutContext";

function Layout(props) {
  var classes = useStyles();

  // global
  var layoutState = useLayoutState();

  return (
    <div className={classes.root}>
        <>
          <Header history={props.history} />
          <Sidebar />
          <div
            className={classnames(classes.content, {
              [classes.contentShift]: layoutState.isSidebarOpened,
            })}
          >
            <div className={classes.fakeToolbar} />
            <Switch>
              <Route path="/app/dashboard" component={Dashboard} />
              <Route path="/app/class/list" component={ClassList} />
              <Route path="/app/class/new" component={ClassNew} />
              <Route path="/app/class/schedule" component={ClassSchedule} />
              <Route path="/app/student/list" component={StudentList} />
              <Route path="/app/student/new" component={StudentNew} />
              <Route path="/app/student/view" component={StudentView} />
              <Route path="/app/student/edit" component={StudentEdit} />
              <Route path="/app/tutor/list" component={TutorList} />
              <Route path="/app/tutor/new" component={TutorNew} />
              <Route path="/app/tutor/edit" component={TutorEdit} />
              <Route path="/app/tutor/view" component={TutorView} />
              <Route path="/app/typography" component={Typography} />
              <Route path="/app/notifications" component={Notifications} />
              <Route
                exact
                path="/app/ui"
                render={() => <Redirect to="/app/ui/icons" />}
              />
              <Route path="/app/ui/maps" component={Maps} />
              <Route path="/app/ui/icons" component={Icons} />
              <Route path="/app/ui/charts" component={Charts} />
            </Switch>
          </div>
        </>
    </div>
  );
}

export default withRouter(Layout);
