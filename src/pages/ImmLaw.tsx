import React from 'react';
import Container from 'react-bootstrap/Container';
import ListGroup from 'react-bootstrap/ListGroup';

function ImmLaw() {
  return (
    <Container>
      <ListGroup>
        <ListGroup.Item>Immigration Appeals for all Refusals (Marriage, Medical, Financial, Adoption, Criminal Record Refusal)</ListGroup.Item>
        <ListGroup.Item>Appeals to Immigration Appeal Division</ListGroup.Item>
        <ListGroup.Item>Appeals to Federal Court (Canada)</ListGroup.Item>
        <ListGroup.Item>Appeals to Federal Court of Appeal</ListGroup.Item>
        <ListGroup.Item>Judicial Review Applications</ListGroup.Item>
        <ListGroup.Item>Federal Court Application for all Refusals including Applications for Stay of Execution of Removal Orders</ListGroup.Item>
        <ListGroup.Item>Spousal Sponsorships</ListGroup.Item>
        <ListGroup.Item>Family Class Sponsorships</ListGroup.Item>
        <ListGroup.Item>In Canada Marriage Cases</ListGroup.Item>
        <ListGroup.Item>Humanitarian and Compassionate Cases</ListGroup.Item>
      </ListGroup>
    </Container>
  );
}

export default ImmLaw;
