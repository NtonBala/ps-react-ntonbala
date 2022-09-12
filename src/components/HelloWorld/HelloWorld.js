import React from 'react';

export const HelloWorld = (message) => <div>Hello ${message}</div>;

HelloWorld.propTypes = {
  message: PropTypes.string
};
