import React from 'react';
import TextInputBEM from 'ps-reusable-react-components-ntonbala/TextInputBEM/TextInputBEM';

/** TextInputBEM with error unstyled */
const ExampleErrorUnstyled = () => (
  <TextInputBEM
    htmlId="example-optional"
    label="First Name"
    name="firstname"
    onChange={() => {}}
    required
    error="First name is required"
  />
);

export default ExampleErrorUnstyled;
