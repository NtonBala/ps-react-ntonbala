import React from 'react';
import TextInputCSSModules from 'ps-reusable-react-components-ntonbala/TextInputCSSModules';

/** Required TextBox with error */
const ExampleError = () => (
  <TextInputCSSModules
    htmlId="example-optional"
    label="First Name"
    name="firstname"
    onChange={() => {}}
    required
    error="First name is required"
  />
);

export default ExampleError;
