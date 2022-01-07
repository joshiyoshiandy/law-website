import React from 'react';
import Container from 'react-bootstrap/Container';

function NotFound() {
  return (
    <Container fluid>
      <h1>OOPS!</h1>
      <h5>The page you are trying to access does not exist.</h5>
    </Container>
  );
}

export default NotFound;
