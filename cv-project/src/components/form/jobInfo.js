/* eslint-disable no-unused-vars */
/* eslint-disable react/prefer-stateless-function */
/* eslint-disable react/prop-types */
import React from "react";
import LongAnswer from "./longAnswer";
import ShortAnswer from "./shortAnswer";

class JobInfo extends React.Component {
  render() {
    const {
      company,
      position,
      tasks,
      dateFrom,
      dateTo,
      handleChange,
      itemNumber,
    } = this.props;

    return (
      <div className="section">
        <ShortAnswer
          labelText="Company Name: "
          name="company"
          section="job"
          itemNumber={itemNumber}
          type="text"
          handleChange={handleChange}
          value={company}
        />

        <ShortAnswer
          labelText="Position: "
          name="position"
          section="job"
          itemNumber={itemNumber}
          type="text"
          handleChange={handleChange}
          value={position}
        />
        <LongAnswer
          labelText="Main Tasks: "
          name="tasks"
          section="job"
          itemNumber={itemNumber}
          type="text"
          handleChange={handleChange}
          value={tasks}
        />
        <ShortAnswer
          labelText="Started Working: "
          name="dateFrom"
          section="job"
          itemNumber={itemNumber}
          type="date"
          handleChange={handleChange}
          value={dateFrom}
        />
        <ShortAnswer
          labelText="Finished Working: "
          name="dateTo"
          section="job"
          itemNumber={itemNumber}
          type="date"
          handleChange={handleChange}
          value={dateTo}
        />
      </div>
    );
  }
}
export default JobInfo;
