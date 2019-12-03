import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";

const TextInputGroup = ({
  label,
  name,
  value,
  placeholder,
  type,
  onChange,
  error
}) => {
  return (
    <div className="form-group">
      <input
        label={label}
        className={classnames("form-control form-control-lg", {
          "is-invalid": error
        })}
        name={name}
        placeholder={placeholder}
        type={type}
        value={value}
        onChange={onChange}
        
      />
      {error && <div className="invalid-feedback"> {error} </div>}
    </div>
  );
};

TextInputGroup.propTypes = {
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  error: PropTypes.string.isRequired
};
TextInputGroup.defaultProps = {
  type: "text"
};
export default TextInputGroup;
