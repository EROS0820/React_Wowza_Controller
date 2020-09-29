import React from "react";
import classNames from "classnames";
import { Container, Navbar, Button } from "shards-react";

import NavbarDropdown from "./NavbarDropdown";
import SignIn from "../../landingpage/SignIn";
import SignUp from "../../landingpage/SignUp";

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
    this.signUpElement = React.createRef();
    this.state = {
      signInOpen: false,
      signUpOpen: false,
      // isMentor: true, 
    }
    let is_Mentor = false;
  }

  toggle_signin() {
    this.setState({
      signInOpen: !this.state.signInOpen
    });
    if(!this.state.signInOpen) {
      this.signInElement.current.clearValidationErrors();
    }
  }

  toggle_signup() {
    this.setState({
      signUpOpen: !this.state.signUpOpen
    });
    if(!this.state.signUpOpen) {
      this.signUpElement.current.clearValidationErrors();
      this.is_Mentor = false;
    }
  }

  toggle_modal() {
    this.setState({
      signInOpen: !this.state.signInOpen,
      signUpOpen: !this.state.signUpOpen
    });
    if(!this.state.signInOpen) {
      this.signInElement.current.clearValidationErrors();
    }
    if(!this.state.signUpOpen) {
      this.signUpElement.current.clearValidationErrors();
    }
  }

  render() {

    const { signInOpen, signUpOpen } = this.state;

    return (
      <div className={classes}>
        <SignIn ref={this.signInElement} open={signInOpen} toggle={() => this.toggle_signin()} toggle_modal={() => this.toggle_modal()}/>
        <SignUp ref={this.signUpElement} open={signUpOpen} toggle={() => this.toggle_signup()} toggle_modal={() => this.toggle_modal()} isMentor={this.is_Mentor}/>
        <Container className="p-0 fix-position">
          <Navbar type="light" className="align-items-stretch flex-md-nowrap p-0">
            <img
              alt="Project logo"
              src={projectLogo}
              className="logo-image"
            />
            <div className="btn-group-header">
              <Button theme="light" className="mb-2 btn-landingpage white-background" onClick={() => this.toggle_signup()}>
                Sign up
              </Button>
              <Button outline theme="primary" className="mb-2 btn-landingpage btn-custom" onClick={() => this.toggle_signin()}>
                Sign in
              </Button>
            </div>
            <div className="btn-dropdown-header">
              <NavbarDropdown />
            </div>
          </Navbar>
        </Container>
      </div>
    );
  }
};
