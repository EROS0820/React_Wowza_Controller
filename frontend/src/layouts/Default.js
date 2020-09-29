import React from "react";
import { Container, Row, Col } from "shards-react";

import MainNavbar from "../components/layout/MainNavbar/MainNavbar";
    
export default class DefaultLayout extends React.Component {
  constructor(props) {
    super(props);

    this.outcomingRef = React.createRef();
    
    this.state = {
      noNavbar: false,
      noFooter: true,
    }

    this.handleClick = this.handleClick.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  componentWillMount() {
    if(!localStorage.getItem('token')) {
      window.location.href = '/';
      return;
    }
  }

  componentWillUnmount() {
  }

  onChange() {
    this.setState({
      ...this.state,
    });
  }

  handleClick() {

    const { filterType, mentorUrl, studentUrl } = this.state;

    if ( !filterType ) 
      this.props.history.push(mentorUrl);
    else 
      this.props.history.push(studentUrl);
  }

  onSearch(searchKey) {
    console.log(searchKey);
  }

  

  render() {
   
    
    const { children } = this.props;
    const { noNavbar, filterType } = this.state;

    return (
      <Container fluid>
        <Row>
          <Col
            className="main-content p-0 main-content-class"
            tag="main"
          >
            {!noNavbar && <MainNavbar filterType={filterType} toggleType={() => this.handleClick()} onSearch={(searchKey) => this.onSearch(searchKey)}/>}
            {children}
          </Col>
        </Row>
      </Container>
    );
  }
}
