/* eslint-disable react/prefer-stateless-function */
/* eslint-disable react/prop-types */
import React from "react";

class LongAnswer extends React.Component {
  render() {
    const { name, handleChange, value, labelText, section, itemNumber } =
      this.props;

    return (
      <div className="long-answer">
        <label htmlFor={`${section}${name}${itemNumber}`}>{labelText}</label>
        <textarea
          id={`${section}${name}${itemNumber}`}
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
export default LongAnswer;
