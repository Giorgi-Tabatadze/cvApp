/* eslint-disable no-param-reassign */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prefer-stateless-function */
/* eslint-disable react/prop-types */
import React from "react";
import "../../view.css";

class ViewCv extends React.Component {
  render() {
    const { info, handleEdit } = this.props;
    const { general, education, job, skills, languages } = info;
    return (
      <div className="view">
        <main className="cv">
          <div className="cv-container">
            {general.map((item, index) => {
              return (
                <div className="cv-general">
                  <h1>{item.name}</h1>
                  <div className="cv-contact">
                    <p>
                      <span>Born: </span>
                      {item.birth}
                    </p>
                    <p>
                      <span>Phone: </span>
                      {item.phone}
                    </p>
                    <p>
                      <span>Email: </span>
                      {item.email}
                    </p>
                  </div>
                </div>
              );
            })}
            <div className="cv-text">
              <div className="cv-summary component">
                <h2>Summary: </h2>
                <p>{general[0].about}</p>
              </div>
              <div className="cv-skills component">
                <h2>Skill Highlits: </h2>
                <div className="cv-skill-list">
                  {skills.map((item, index) => {
                    return (
                      <ul>
                        <li>
                          <span>{item.name} - </span>
                          <span>{item.level}</span>
                        </li>
                      </ul>
                    );
                  })}
                </div>
              </div>
              <div className="cv-experience component">
                <h2>Experience: </h2>
                {job.map((item, index) => {
                  item.dateTo =
                    item.dateTo === ""
                      ? (item.dateTo = "Ongoing")
                      : item.dateTo;
                  return (
                    <div className="cv-workplace">
                      <p>
                        <span className="bold-text">{item.position} - </span>
                        <span className="light-text">
                          {item.dateFrom} to {item.dateTo}
                        </span>
                      </p>
                      <p>
                        <span className="bold-text">Company: </span>
                        <span>{item.company}</span>
                      </p>
                      <h4>Responcibilities and Achievments:</h4>
                      <p>{item.tasks}</p>
                    </div>
                  );
                })}
              </div>
              <div className="cv-education component">
                <h2>Education: </h2>
                {education.map((item, index) => {
                  item.dateTo =
                    item.dateTo === ""
                      ? (item.dateTo = "Ongoing")
                      : item.dateTo;
                  return (
                    <div className="cv-school">
                      <p>
                        <span className="bold-text">{item.title} - </span>
                        <span className="light-text">
                          {item.dateFrom} to {item.dateTo}
                        </span>
                      </p>
                      <p>
                        <span className="cv-bold-text">{item.school}</span>
                      </p>
                    </div>
                  );
                })}
              </div>
              <div className="cv-languages component">
                <h2>Languages: </h2>
                {languages.map((item, index) => {
                  return (
                    <ul>
                      <li>
                        <span>{item.name} - </span>
                        <span>{item.level}</span>
                      </li>
                    </ul>
                  );
                })}
              </div>
            </div>
          </div>
          <button className="modify" type="button" onClick={handleEdit}>
            Edit
          </button>
        </main>
      </div>
    );
  }
}
export default ViewCv;
