import React from 'react';
import RegistrationForm from 'ps-reusable-react-components-ntonbala/RegistrationForm';

class ExampleRegistrationForm extends React.Component {
  onSubmit = (user) => {
    alert(JSON.stringify(user, null, 2));
  };

  render() {
    return <RegistrationForm onSubmit={this.onSubmit} />;
  }
}

export default ExampleRegistrationForm;
