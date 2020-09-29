import React from "react";
import classNames from "classnames";
import { Container, Navbar, Button } from "shards-react";

import SignIn from "../../landingpage/SignIn";

import projectLogo from '../../../images/logo.png'

const classes = classNames(
  "main-navbar",
  "bg-white",
  "sticky-top"
);

export default class MainNavbar extends React.Component{

  constructor(props) {
    super(props);
    this.signInElement = React.createRef();
    this.state = {
      signInOpen: false,
    }
  }

  toggle_signin() {
    this.setState({
      signInOpen: !this.state.signInOpen
    });
    if(!this.state.signInOpen) {
      this.signInElement.current.clearValidationErrors();
    }
  }

  toggle_modal() {
    this.setState({
      signInOpen: !this.state.signInOpen,
    });
    if(!this.state.signInOpen) {
      this.signInElement.current.clearValidationErrors();
    }
  }

  render() {

    const { signInOpen } = this.state;

    return (
      <div className={classes}>
        <SignIn ref={this.signInElement} open={signInOpen} toggle={() => this.toggle_signin()} toggle_modal={() => this.toggle_modal()}/>
        <Container className="p-0 fix-position">
          <Navbar type="light" className="align-items-stretch flex-md-nowrap p-0">
            <img
              alt="Project logo"
              src={projectLogo}
              className="logo-image"
            />
            <div className="btn-group-header">
              <Button outline theme="primary" className="mb-2 btn-landingpage btn-custom" onClick={() => this.toggle_signin()}>
                Sign in
              </Button>
            </div>
          </Navbar>
        </Container>
      </div>
    );
  }
};
