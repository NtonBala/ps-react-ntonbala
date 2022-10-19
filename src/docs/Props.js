import PropTypes from 'prop-types';

export const Props = ({ props }) => (
  <table className="props">
    <thead>
      <tr>
        <th>Name</th>
        <th>Description</th>
        <th>Type</th>
        <th>Default</th>
        <th>Required</th>
      </tr>
    </thead>
    <tbody>
      {Object.keys(props).map(key => {
        const {
          description,
          type: { name },
          defaultValue,
          required,
        } = props[key];

        return (
          <tr key={key}>
            <td>{key}</td>
            <td>{description}</td>
            <td>{name}</td>
            <td>{defaultValue?.value}</td>
            <td>{required && 'X'}</td>
          </tr>
        );
      })}
    </tbody>
  </table>
);

Props.propTypes = {
  props: PropTypes.object.isRequired,
};
