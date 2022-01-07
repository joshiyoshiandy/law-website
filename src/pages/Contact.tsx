import React from 'react';
import Container from 'react-bootstrap/Container';

import { firmInfo } from '../data/info';

function Contact() {
  return (
    <div>
        <iframe src={firmInfo.maps} width="600" height="450" loading="lazy"></iframe>
        {/* need a contact form here */}
        {/* contact info */}
    </div>
  );
}

export default Contact;
