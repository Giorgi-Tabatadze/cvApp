/* eslint-disable no-unused-vars */
/* eslint-disable react/prefer-stateless-function */
/* eslint-disable react/prop-types */
import React from "react";
import SkillDropdown from "./skillDropdown";
import DeleteButton from "./deleteButton";

class SkillInfo extends React.Component {
  render() {
    const { name, level, handleChange, handleDelete, itemNumber } = this.props;

    return (
      <div className="section">
        <SkillDropdown
          name="name"
          selectName="level"
          handleChange={handleChange}
          type="text"
          value={name}
          selectValue={level}
          labelText="Skill: "
          selectLabelText="Level: "
          section="skills"
          itemNumber={itemNumber}
        />
        <DeleteButton
          section="skills"
          itemNumber={itemNumber}
          onClick={handleDelete}
        />
      </div>
    );
  }
}
export default SkillInfo;
