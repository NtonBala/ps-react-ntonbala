import PropTypes from "prop-types";

/** Lame component that greets by name. */
const HelloWorld = (name) => <div>Hello, ${name}!</div>;

HelloWorld.defaultProps = {
  name: 'World'
}

HelloWorld.propTypes = {
  /** Name to display */
  name: PropTypes.string,
};

export default HelloWorld;
