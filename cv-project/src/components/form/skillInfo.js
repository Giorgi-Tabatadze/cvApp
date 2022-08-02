/* eslint-disable no-unused-vars */
/* eslint-disable react/prefer-stateless-function */
/* eslint-disable react/prop-types */
import React from "react";
import SkillDropdown from "./skillDropdown";

class SkillInfo extends React.Component {
  render() {
    const { name, level, handleChange, itemNumber } = this.props;

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
      </div>
    );
  }
}
export default SkillInfo;
