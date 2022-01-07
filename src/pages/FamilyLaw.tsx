import React from 'react';
import Container from 'react-bootstrap/Container';
import ListGroup from 'react-bootstrap/ListGroup';

function FamilyLaw() {
  return (
    <Container>
      <ListGroup>
        <ListGroup.Item>Divorce</ListGroup.Item>
        <ListGroup.Item>Nullity/Annulment</ListGroup.Item>
        <ListGroup.Item>Property Division</ListGroup.Item>
        <ListGroup.Item>Custody, Guardianship and Access</ListGroup.Item>
        <ListGroup.Item>Parenting Time, Parenting Responsibilities and Contact</ListGroup.Item>
        <ListGroup.Item>Protection Orders</ListGroup.Item>
        <ListGroup.Item>Child Support</ListGroup.Item>
        <ListGroup.Item>Spousal Support</ListGroup.Item>
        <ListGroup.Item>Mobility Applications</ListGroup.Item>
        <ListGroup.Item>Marriage, Pre-Nuptial, Cohabitation and Separation Agreements</ListGroup.Item>
        <ListGroup.Item>Child Protection Matters</ListGroup.Item>
        <ListGroup.Item>Adoption</ListGroup.Item>
      </ListGroup>
    </Container>
  );
}

export default FamilyLaw;
