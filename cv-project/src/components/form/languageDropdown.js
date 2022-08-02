/* eslint-disable react/prefer-stateless-function */
/* eslint-disable react/prop-types */
import React from "react";

class LanguageDropdown extends React.Component {
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
          <option value="No Proficiency">No Proficiency</option>
          <option value="Elementary Proficiency">Elementary Proficiency</option>
          <option value="Limited Working Proficiency">
            Limited Working Proficiency
          </option>
          <option value="Professional Working Proficiency">
            Professional Working Proficiency
          </option>
          <option value="Full Professional Proficiency">
            Full Professional Proficiency
          </option>
          <option value="Native / Bilingual Proficiency">
            Native / Bilingual Proficiency
          </option>
        </select>
      </div>
    );
  }
}
export default LanguageDropdown;
