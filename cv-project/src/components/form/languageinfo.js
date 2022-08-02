/* eslint-disable no-unused-vars */
/* eslint-disable react/prefer-stateless-function */
/* eslint-disable react/prop-types */
import React from "react";
import LanguageDropdown from "./languageDropdown";

class LanguageInfo extends React.Component {
  render() {
    const { name, level, handleChange, itemNumber } = this.props;

    return (
      <div className="section">
        <LanguageDropdown
          name="name"
          selectName="level"
          handleChange={handleChange}
          type="text"
          value={name}
          selectValue={level}
          labelText="Language Name: "
          selectLabelText="Level: "
          section="languages"
          itemNumber={itemNumber}
        />
      </div>
    );
  }
}
export default LanguageInfo;
