import React from 'react';
import PropTypes from 'prop-types';
import TextInput from '../TextInput';
import PasswordInput from '../PasswordInput';

/** Registration form with built-in validation. */
class RegistrationForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      user: {
        email: '',
        password: '',
      },
      errors: {},
      submitted: false,
    };
  }

  onChange = (e) => {
    const { user } = this.state;

    user[e.target.name] = e.target.value;
    this.setState({ user });
  };

  // * Returns a number from 0 to 100 that represents password quality.
  // * For simplicity, just returning % of min length entered.
  // * Could enhance with checks for number, special char, unique characters, etc.
  passwordQuality(password) {
    const { minPasswordLength } = this.props;

    if (!password) return null;
    if (password.length >= minPasswordLength) return 100;

    const percentOfMinLength = parseInt((password.length / minPasswordLength) * 100, 10);

    return percentOfMinLength;
  }

  validate({ email, password }) {
    const errors = {};
    const { minPasswordLength } = this.props;

    if (!email) errors.email = 'Email required';
    if (password.length < minPasswordLength)
      errors.password = `Password must be at least ${minPasswordLength} characters`;

    this.setState({ errors });

    const formIsValid = Object.getOwnPropertyNames(errors).length === 0;

    return formIsValid;
  }

  onSubmit = () => {
    const { user } = this.state;
    const formIsValid = this.validate(user);

    if (formIsValid) {
      this.props.onSubmit(user);
      this.setState({ submitted: true });
    }
  };

  render() {
    const {
      errors,
      submitted,
      user: { email, password },
    } = this.state;
    const { confirmationMessage } = this.props;

    return submitted ? (
      <h2>{confirmationMessage}</h2>
    ) : (
      <div>
        <TextInput
          htmlId="registration-form-email"
          name="email"
          onChange={this.onChange}
          label="Email"
          value={email}
          error={errors.email}
          required
        />

        <PasswordInput
          htmlId="registration-form-password"
          name="password"
          value={password}
          onChange={this.onChange}
          quality={this.passwordQuality(password)}
          showVisibilityToggle
          error={errors.password}
        />

        <input type="submit" value="Register" onClick={this.onSubmit} />
      </div>
    );
  }
}

RegistrationForm.propTypes = {
  /** Message displayed upon successful submission */
  confirmationMessage: PropTypes.string,

  /** Called when for is submitted */
  onSubmit: PropTypes.func.isRequired,

  /** Minimum password length */
  minPasswordLength: PropTypes.number,
};

RegistrationForm.defaultProps = {
  confirmationMessage: 'Thanks for registering!',
  minPasswordLength: 8,
};

export default RegistrationForm;
