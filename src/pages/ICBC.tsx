import React from 'react';
import Container from 'react-bootstrap/Container';
import ListGroup from 'react-bootstrap/ListGroup';

function ICBC() {
  return (
    <Container>
      <ListGroup>
        <ListGroup.Item>Motor Vehicle Accidents</ListGroup.Item>
        <ListGroup.Item>Motorcycle Accidents</ListGroup.Item>
        <ListGroup.Item>Car Accidents</ListGroup.Item>
        <ListGroup.Item>Fatal Accidents</ListGroup.Item>
        <ListGroup.Item>Soft Tissue Injuries</ListGroup.Item>
        <ListGroup.Item>Physical and Emotional Injuries</ListGroup.Item>
        <ListGroup.Item>Whiplash and Orthopaedic Injuries</ListGroup.Item>
        <ListGroup.Item>Broken Bones</ListGroup.Item>
        <ListGroup.Item>Head Injury Cases</ListGroup.Item>
        <ListGroup.Item>Spinal and Brain Damage Claims</ListGroup.Item>
        <ListGroup.Item>Breach of Policy/Coverage Issues</ListGroup.Item>
        <ListGroup.Item>Hit and Run Cases</ListGroup.Item>
        <ListGroup.Item>Home, Hospital, and Weekend Appointments</ListGroup.Item>
      </ListGroup>
      <p>NOTE: We work on a contingency/percentage basis and will pay all expenses required to pursue your claim. Rest assured that we don't charge any fee until we win or settle your case. If the amount awarded is nil, our fee will be nil.</p>
    </Container>
  );
}

export default ICBC;
