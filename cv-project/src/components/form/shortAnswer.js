/* eslint-disable react/prefer-stateless-function */
/* eslint-disable react/prop-types */
import React from "react";

class ShortAnswer extends React.Component {
  render() {
    const { name, handleChange, value, labelText, type, section, itemNumber } =
      this.props;

    return (
      <div className="short-answer">
        <label htmlFor={`${section}${name}${itemNumber}`}>{labelText}</label>
        <input
          id={`${section}${name}${itemNumber}`}
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
