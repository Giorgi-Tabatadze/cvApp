/* eslint-disable no-unused-vars */
/* eslint-disable react/prefer-stateless-function */
/* eslint-disable react/prop-types */
import React from "react";
import LanguageDropdown from "./languageDropdown";
import DeleteButton from "./deleteButton";

class LanguageInfo extends React.Component {
  render() {
    const { name, level, handleChange, handleDelete, itemNumber } = this.props;

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
        <DeleteButton
          section="languages"
          itemNumber={itemNumber}
          onClick={handleDelete}
        />
      </div>
    );
  }
}
export default LanguageInfo;
