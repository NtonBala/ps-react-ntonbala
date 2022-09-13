import PropTypes from "prop-types";

export const Navigation = ({ components }) => (
  <ul className="navigation">
    {components.map((name) => (
      <li key={name}>
        <a href={`#${name}`}>{name}</a>
      </li>
    ))}
  </ul>
);

Navigation.propTypes = {
  components: PropTypes.arrayOf(PropTypes.string).isRequired,
};
