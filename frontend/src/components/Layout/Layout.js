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

// pages
import StreamList from '../../pages/StreamList';
import StreamEdit from '../../pages/StreamEdit';
import StreamNew from '../../pages/StreamNew';

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
          <div
            className={classnames(classes.content, {
              [classes.contentShift]: layoutState.isSidebarOpened,
            })}
          >
            <div className={classes.fakeToolbar} />
            <Switch>
              <Route path="/wowza/list" component={StreamList} />
              <Route path="/wowza/new" component={StreamNew} />
              <Route path="/wowza/edit" component={StreamEdit} />
            </Switch>
          </div>
        </>
    </div>
  );
}

export default withRouter(Layout);
