//import React, { Component } from 'react';

import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Logo = () => {
  return (
    <Container>
      <Row className="justify-content-center">
        <div className="d-flex mt-5"></div>
        <div className="d-flex mt-5"></div>
        <div className="d-flex mt-5"></div>
        <Col className="d-flex mt-5"> 
          {/* <img src="logo192.png" alt="Company Logo" className="row img-fluid mx-auto my-5 justify-content-center" /> */}
          <img src={require("../assets/images/logo1.png")} width="364" height="64" className="row img-fluid mx-auto my-5 justify-content-center"/>
        </Col>

      </Row>
      
    </Container>
    
  );
}

export default Logo;
