import PropTypes from "prop-types";

const HelloWorld = (message) => <div>Hello ${message}</div>;

HelloWorld.propTypes = {
  message: PropTypes.string,
};

export default HelloWorld;
