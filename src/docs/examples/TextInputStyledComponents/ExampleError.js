import React from 'react';
import TextInputStyledComponents from 'ps-reusable-react-components-ntonbala/TextInputStyledComponents';

/** Required TextBox with error */
const ExampleError = () => (
  <TextInputStyledComponents
    htmlId="example-optional"
    label="First Name"
    name="firstname"
    onChange={() => {}}
    required
    error="First name is required"
  />
);

export default ExampleError;
