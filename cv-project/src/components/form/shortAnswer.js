/* eslint-disable react/prefer-stateless-function */
/* eslint-disable react/prop-types */
import React from "react";

class ShortAnswer extends React.Component {
  render() {
    const { name, handleChange, value, labelText, type, section, itemNumber } =
      this.props;

    return (
      <div>
        <label htmlFor={name}>{labelText}</label>
        <input
          id={name}
          className="short-answer"
          type={type}
          data-name={name}
          data-section={section}
          data-number={itemNumber}
          onChange={handleChange}
          value={value}
        />
      </div>
    );
  }
}
export default ShortAnswer;
