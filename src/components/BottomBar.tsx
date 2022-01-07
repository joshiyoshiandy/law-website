import React from 'react';

import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import { Row } from 'react-bootstrap';

import { firmInfo } from '../data/info';


function BottomBar() {
  return (
    <Container fluid>
      <Row>
        <Col>
          <h4>Contact Us</h4>
          <ul className='list-unstyled'>
            <li>Phone: {firmInfo.telephone}</li>
            <li>Fax: {firmInfo.fax}</li>
            <li>{firmInfo.email}</li>
          </ul>
        </Col>
        <Col>
          <h4>__</h4>
          <ul className='list-unstyled'>
            <li>{firmInfo.name}</li>
            <li>{firmInfo.address}</li>
            <li>{firmInfo.city}, {firmInfo.province} {firmInfo.postal}</li>
          </ul>
        </Col>
      </Row>
      <Row>&copy; {firmInfo.currentYear} Joshi Lawyers - All Rights Reserved</Row>
    </Container>
  );
}

export default BottomBar;