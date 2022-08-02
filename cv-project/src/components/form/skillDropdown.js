/* eslint-disable react/prefer-stateless-function */
/* eslint-disable react/prop-types */
import React from "react";

class SkillDropdown extends React.Component {
  render() {
    const {
      name,
      selectName,
      handleChange,
      type,
      value,
      selectValue,
      labelText,
      selectLabelText,
      section,
      itemNumber,
    } = this.props;

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
        <label htmlFor={selectName}>{selectLabelText}</label>
        <select
          value={selectValue}
          id={selectName}
          className="dropdown"
          onChange={handleChange}
          data-name={selectName}
          data-section={section}
          data-number={itemNumber}
        >
          <option value="Begginer">Begginer</option>
          <option value="Average">Average</option>
          <option value="Skilled">Skilled</option>
          <option value="Specialist">Specialist</option>
          <option value="Expert">Expert</option>
        </select>
      </div>
    );
  }
}
export default SkillDropdown;
