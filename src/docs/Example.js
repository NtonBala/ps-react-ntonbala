import React from 'react';
import PropTypes from 'prop-types';
import CodeExample from './CodeExample';

export class Example extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showCode: false,
    };
  }

  toggleCode = (e) => {
    e.preventDefault();
    this.setState(({ showCode }) => ({ showCode: !showCode }));
  };

  render() {
    const { showCode } = this.state;
    const {
      componentName,
      example: { code, description, name },
    } = this.props;

    const ExampleComponent = require(`./examples/${componentName}/${name}`).default;

    return (
      <div className="example">
        {description && <h4>{description}</h4>}
        <ExampleComponent />
        <p>
          <button type="button" onClick={this.toggleCode}>
            {showCode ? 'Hide Code' : 'Show Code'}
          </button>
        </p>
        {showCode && <CodeExample>{code}</CodeExample>}
      </div>
    );
  }
}

Example.propTypes = {
  componentName: PropTypes.string.isRequired,
  example: PropTypes.object.isRequired,
};
