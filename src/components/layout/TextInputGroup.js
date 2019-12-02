import React from "react";
import PropTypes from "prop-types";

const TextInputGroup = ({
  label,
  name,
  value,
  placeholder,
  type,
  onChange
}) => {
  return (
    <div className="form-group">
      <input
        label={label}
        className="form-control form-control-lg"
        name={name}
        placeholder={placeholder}
        type={type}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

TextInputGroup.propTypes = {
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
};
TextInputGroup.defaultProps = {
  type: "text"
};
export default TextInputGroup;
