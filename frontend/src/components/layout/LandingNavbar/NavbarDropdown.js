import React from "react";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "shards-react";

import SignIn from "../../landingpage/SignIn";

class NavbarDropdown extends React.Component {
  constructor(props) {
    super(props);
    this.signInElement = React.createRef();
    this.toggle = this.toggle.bind(this);

    this.state = {
      dropdown1: false,
      signInOpen: false,
    };
  }

  toggle(which) {
    // const newState = { ...this.state };
    // newState[which] = !this.state[which];
    // this.setState(newState);
    this.setState({dropdown1: !this.state.dropdown1});
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
      <div>
        <SignIn ref={this.signInElement} open={signInOpen} toggle={() => this.toggle_signin()} toggle_modal={() => this.toggle_modal()}/>
        <Dropdown
        open={this.state.dropdown1}
        toggle={() => this.toggle("dropdown1")}
        addonType="append"
        >
        <DropdownMenu small right>
            <DropdownItem className="btn-dropdown-item" onClick={() => this.toggle_signin()}>Sign in</DropdownItem>
        </DropdownMenu>
        </Dropdown>
      </div>
    );
  }
}

export default NavbarDropdown;
