import React from 'react';
import PasswordInput from 'ps-reusable-react-components-ntonbala/PasswordInput';

/** All features enabled */
class ExampleAllFeatures extends React.Component {
  constructor(props) {
    super(props);

    this.state = { password: '' };
  }

  getQuality() {
    const length = this.state.password.length;

    return length > 10 ? 100 : length * 10;
  }

  render() {
    return (
      <PasswordInput
        htmlId="password-input-example-all-features"
        name="password"
        onChange={(e) => this.setState({ password: e.target.value })}
        value={this.state.password}
        minLength={8}
        placeholder="Enter password"
        showVisibilityToggle
        quality={this.getQuality()}
        {...this.props}
      />
    );
  }
}

export default ExampleAllFeatures;
