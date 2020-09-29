import React from "react";
import { Container, Row } from "shards-react";


export default class landingpage extends React.Component{
  componentWillMount() {
    this.removeSession();
  }

  removeSession() {
    localStorage.clear();
  }
  render() {
    
    return (
      <Container fluid className="main-content-container pb-4">
      </Container>
    );
  }
}

