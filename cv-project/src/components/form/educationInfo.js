/* eslint-disable no-unused-vars */
/* eslint-disable react/prefer-stateless-function */
/* eslint-disable react/prop-types */
import React from "react";
import ShortAnswer from "./shortAnswer";
import DeleteButton from "./deleteButton";

class EducationInfo extends React.Component {
  render() {
    const {
      school,
      title,
      dateFrom,
      dateTo,
      handleChange,
      handleDelete,
      itemNumber,
    } = this.props;

    return (
      <div className="section">
        <ShortAnswer
          labelText="School Name: "
          name="school"
          section="education"
          itemNumber={itemNumber}
          type="text"
          handleChange={handleChange}
          value={school}
        />
        <ShortAnswer
          labelText="Course name: "
          name="title"
          section="education"
          itemNumber={itemNumber}
          type="text"
          handleChange={handleChange}
          value={title}
        />
        <ShortAnswer
          labelText="Started Studying: "
          name="dateFrom"
          section="education"
          itemNumber={itemNumber}
          type="date"
          handleChange={handleChange}
          value={dateFrom}
        />
        <ShortAnswer
          labelText="Finished Studying: "
          name="dateTo"
          section="education"
          itemNumber={itemNumber}
          type="date"
          handleChange={handleChange}
          value={dateTo}
        />
        <DeleteButton
          section="education"
          itemNumber={itemNumber}
          onClick={handleDelete}
        />
      </div>
    );
  }
}
export default EducationInfo;
