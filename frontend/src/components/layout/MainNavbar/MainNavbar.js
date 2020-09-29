import React from "react";
import classNames from "classnames";
import { Container, Navbar, NavbarBrand } from "shards-react";

const classes = classNames(
  "main-navbar",
  "bg-white",
  "main-nav-bar-class",
  "sticky-top"
);

export default class MainNavbar extends React.Component {

  toggleType() {
    const { toggleType } = this.props;
    toggleType();
  }

  toggle_search(searchKey) {
    const { onSearch } = this.props;
    onSearch(searchKey);
  }

  render() {

    return (
      <div className={classes}>
        <Container className="p-0 fix-position">
          <Navbar type="light" className="align-items-stretch flex-md-nowrap p-0">
            <div className="sidebar-main-navbar-class">
              <Navbar
                className="align-items-stretch bg-white flex-md-nowrap border-bottom p-0"
                type="light"
              >
                <NavbarBrand
                  className="w-100 mr-0"
                  href="#"
                  style={{ lineHeight: "25px" }}
                >
                  <div className="d-table m-auto">
                    <img
                      id="main-logo"
                      className="d-inline-block align-top mr-1"
                      style={{ marginLeft: "30px" }}
                      src={require("../../../images/logo.svg")}
                      alt="Shards Dashboard"
                    />
                  </div>
                </NavbarBrand>
              </Navbar>
            </div>
          </Navbar>
        </Container>
      </div>
    );
  }
};

