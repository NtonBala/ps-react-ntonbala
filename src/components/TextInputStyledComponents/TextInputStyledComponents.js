import React from 'react';
import PropTypes from 'prop-types';
import Label from '../Label';
import styled from 'styled-components';

/** Text input styled with CSS in JS approach (via styled-components). */
const TextInputStyledComponents = ({
  htmlId,
  name,
  label,
  type = 'text',
  required = false,
  onChange,
  placeholder,
  value,
  error,
  children,
  ...rest
}) => {
  const Fieldset = styled.div`
    margin-bottom: 16px;
  `;

  const Input = styled.input`
    display: block;
    border: ${error && 'solid 1px red'};
  `;

  const Error = styled.div`
    color: red;
  `;

  return (
    <Fieldset>
      <Label htmlFor="htmlId" label={label} required={required} />
      <Input
        id={htmlId}
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        {...rest}
      />
      {children}
      {error && <Error>{error}</Error>}
    </Fieldset>
  );
};

TextInputStyledComponents.propTypes = {
  /** Unique HTML Id. Used for tying label to HTML input. Handy hook for automated testing */
  htmlId: PropTypes.string.isRequired,

  /** Input name. Is set to match object's property so a single change handler can be used */
  name: PropTypes.string.isRequired,

  /** Input label */
  label: PropTypes.string.isRequired,

  /** Input type */
  type: PropTypes.oneOf(['text', 'number', 'password']),

  /** Mark label with asterisk if set to true */
  required: PropTypes.bool,

  /** Function to call onChange */
  onChange: PropTypes.func.isRequired,

  /** Placeholder to display when empty */
  placeholder: PropTypes.string,

  /** Value  */
  value: PropTypes.any,

  /** String to display when error occurs */
  error: PropTypes.string,

  /** Child component to display next to the input */
  children: PropTypes.node,
};

export default TextInputStyledComponents;
