import React from 'react';
import TextInput from 'ps-reusable-react-components-ntonbala/TextInput';

/** Required TextBox with error */
const ExampleError = () => (
  <TextInput
    htmlId="example-optional"
    label="First Name"
    name="firstname"
    onChange={() => {}}
    required
    error="First name is required"
  />
);

export default ExampleError;
