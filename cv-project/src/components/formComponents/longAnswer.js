/* eslint-disable react/prefer-stateless-function */
/* eslint-disable react/prop-types */
import React from "react";

class LongAnswer extends React.Component {
  render() {
    const { name, handleChange, value, labelText, section, itemNumber } =
      this.props;

    return (
      <div>
        <label htmlFor={name}>{labelText}</label>
        <textarea
          id={name}
          className="long-answer"
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
