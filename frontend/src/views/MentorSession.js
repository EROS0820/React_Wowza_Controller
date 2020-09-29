import React from "react";
import 'react-notifications-component/dist/theme.css';
import { store } from 'react-notifications-component';
import "react-big-calendar/lib/css/react-big-calendar.css";

export default class MentorSession extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
  }

  showFail(text) {
    store.addNotification({
      title: "Fail",
      message: text,
      type: "danger",
      insert: "top",
      container: "top-right",
      dismiss: {
        duration: 500,
        onScreen: false,
        waitForAnimation: false,
        showIcon: false,
        pauseOnHover: false
      }
    });
  }

  showWarning(text) {
    store.addNotification({
      title: "Warning",
      message: text,
      type: "warning",
      insert: "top",
      container: "top-right",
      dismiss: {
        duration: 500,
        onScreen: false,
        waitForAnimation: false,
        showIcon: false,
        pauseOnHover: false
      }
    })
  }

  changeMonth = (value) => {
    this.setState({events: value});
  }

  showLoading = (value) => {
    this.setState({loading: value});
  }

  render() {
    return (
      <>
      
      </>
    );
  }
}

