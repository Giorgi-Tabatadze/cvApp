/* eslint-disable react/no-access-state-in-setstate */
/* eslint-disable react/destructuring-assignment */
import React from "react";
import GeneralInfo from "./components/form/generalInfo";
import EducationInfo from "./components/form/educationInfo";
import JobInfo from "./components/form/jobInfo";
import SkillInfo from "./components/form/skillInfo";
import LanguageInfo from "./components/form/languageinfo";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      info: {
        general: [{ name: "", email: "", phone: "", birth: "", about: "" }],
        education: [{ school: "", title: "", dateFrom: "", dateTo: "" }],
        job: [
          { company: "", position: "", tasks: "", dateFrom: "", dateTo: "" },
        ],
        skills: [{ name: "", level: "Begginer" }],
        languages: [{ name: "", level: "No Proficiency" }],
      },
    };

    this.handleChange = this.handleChange.bind(this);
    this.addNewSection = this.addNewSection.bind(this);
    this.resetItemData = this.resetItemData.bind(this);
  }

  handleChange(event) {
    const sectionToChange = event.target.dataset.section;
    const itemNumber = event.target.dataset.number;
    const stateToChange = event.target.dataset.name;
    const { value } = event.target;
    this.setState({
      info: {
        ...this.state.info,
        [sectionToChange]: this.state.info[sectionToChange].map(
          (item, index) => {
            const newItem = item;
            const itemN = Number(itemNumber);
            if (itemN === index) {
              newItem[stateToChange] = value;
            }
            return newItem;
          },
        ),
      },
    });
  }

  addNewSection(event) {
    const sectionToChange = event.target.dataset.section;
    let newItem = { ...this.state.info[sectionToChange][0] };
    newItem = this.resetItemData(newItem);
    this.setState({
      info: {
        ...this.state.info,
        [sectionToChange]: [...this.state.info[sectionToChange], newItem],
      },
    });
  }

  // eslint-disable-next-line class-methods-use-this
  resetItemData(item) {
    const cleanItem = item;
    const keys = Object.keys(cleanItem);
    keys.forEach((key) => {
      cleanItem[key] = "";
    });
    return cleanItem;
  }

  render() {
    return (
      <div className="App">
        <form>
          <h2>General Information</h2>
          {this.state.info.general.map((item, index) => (
            <GeneralInfo
              handleChange={this.handleChange}
              itemNumber={index}
              // eslint-disable-next-line react/no-array-index-key
              name={item.name}
              email={item.email}
              phone={item.phone}
              birth={item.birth}
              about={item.about}
            />
          ))}
          <h2>Education Information</h2>
          {this.state.info.education.map((item, index) => (
            <EducationInfo
              handleChange={this.handleChange}
              itemNumber={index}
              // eslint-disable-next-line react/no-array-index-key
              school={item.school}
              title={item.title}
              dateFrom={item.dateFrom}
              dateTo={item.dateTo}
            />
          ))}
          <button
            type="button"
            data-section="education"
            onClick={this.addNewSection}
          >
            Add Education
          </button>
          <h2>Job Experiance</h2>
          {this.state.info.job.map((item, index) => (
            <JobInfo
              handleChange={this.handleChange}
              itemNumber={index}
              // eslint-disable-next-line react/no-array-index-key
              company={item.company}
              position={item.position}
              tasks={item.tasks}
              dateFrom={item.dateFrom}
              dateTo={item.dateTo}
            />
          ))}
          <button type="button" data-section="job" onClick={this.addNewSection}>
            Add Workplace
          </button>
          <h2>Skills</h2>

          {this.state.info.skills.map((item, index) => (
            <SkillInfo
              handleChange={this.handleChange}
              itemNumber={index}
              // eslint-disable-next-line react/no-array-index-key
              name={item.name}
              level={item.level}
            />
          ))}
          <button
            type="button"
            data-section="skills"
            onClick={this.addNewSection}
          >
            Add Another Skill
          </button>
          <h2>Languages</h2>

          {this.state.info.languages.map((item, index) => (
            <LanguageInfo
              handleChange={this.handleChange}
              itemNumber={index}
              // eslint-disable-next-line react/no-array-index-key
              name={item.name}
              level={item.level}
            />
          ))}
          <button
            type="button"
            data-section="languages"
            onClick={this.addNewSection}
          >
            Add Another Language
          </button>

          <button type="submit">submit</button>
        </form>
      </div>
    );
  }
}

export default App;
