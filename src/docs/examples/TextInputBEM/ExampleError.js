import React from 'react';
import TextInputBEM from 'ps-reusable-react-components-ntonbala/TextInputBEM';

/** TextInputBEM with error, imported with styles */
const ExampleError = () => (
  <TextInputBEM
    htmlId="example-optional"
    label="First Name"
    name="firstname"
    onChange={() => {}}
    required
    error="First name is required"
  />
);

export default ExampleError;
