import React from 'react';
import PropTypes from 'prop-types';
import ProgressBar from '../ProgressBar';
import EyeIcon from '../EyeIcon';
import TextInput from '../TextInput';

/** Password input with integrated label, quality tips and show password toggle. */
class PasswordInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = { showPassword: false };
  }

  toggleShowPassword = (e) => {
    this.setState((prevState) => ({ showPassword: !prevState.showPassword }));

    if (e) e.preventDefault();
  };

  render() {
    const { htmlId, value, label, error, onChange, placeholder, maxLength, showVisibilityToggle, quality, ...rest } =
      this.props;
    const { showPassword } = this.state;

    return (
      <TextInput
        htmlId={htmlId}
        label={label}
        placeholder={placeholder}
        type={showPassword ? 'text' : 'password'}
        onChange={onChange}
        value={value}
        maxLength={maxLength}
        error={error}
        required
        {...rest}
      >
        {showVisibilityToggle && (
          <button
            type="button"
            className="reset-Button"
            onClick={this.toggleShowPassword}
            style={{ marginLeft: 5, cursor: 'pointer' }}
          >
            <EyeIcon />
          </button>
        )}
        {value.length > 0 && quality && <ProgressBar percent={quality} width={130} />}
      </TextInput>
    );
  }
}

PasswordInput.defaultProps = {
  maxLength: 50,
  showVisibilityToggle: false,
  label: 'Password',
};

PasswordInput.propTypes = {
  /** Unique HTML Id. Used for tying label to HTML input. Handy hook for automated testing */
  htmlId: PropTypes.string.isRequired,

  /** Input name. Is set to match object's property so a single change handler can be used */
  name: PropTypes.string.isRequired,

  /** Input label */
  label: PropTypes.string.isRequired,

  /** Function called when password input value changes */
  onChange: PropTypes.func.isRequired,

  /** Placeholder displayed when no password is entered */
  placeholder: PropTypes.string,

  /** Value  */
  value: PropTypes.any,

  /** Validation error to display */
  error: PropTypes.string,

  /** Max password length accepted */
  maxLength: PropTypes.number,

  /** Set to true to show the toggle for displaying the currently entered password */
  showVisibilityToggle: PropTypes.bool,

  /** Display password quality visually via ProgressBar, accepts a number between 0 and 100 */
  quality: PropTypes.number,
};

export default PasswordInput;
