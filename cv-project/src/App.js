/* eslint-disable class-methods-use-this */
/* eslint-disable react/no-access-state-in-setstate */
/* eslint-disable react/destructuring-assignment */
import React from "react";
import "normalize.css";
import "./App.css";
import GeneralInfo from "./components/form/generalInfo";
import EducationInfo from "./components/form/educationInfo";
import JobInfo from "./components/form/jobInfo";
import SkillInfo from "./components/form/skillInfo";
import LanguageInfo from "./components/form/languageinfo";
// eslint-disable-next-line import/no-named-as-default
import ViewCv from "./components/cv/view";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editMode: true,
      info: {
        general: [
          {
            name: "",
            email: "",
            phone: "",
            birth: "",
            about: "",
          },
        ],
        education: [
          {
            school: "",
            title: "",
            dateFrom: "",
            dateTo: "",
          },
        ],
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
    this.handleDelete = this.handleDelete.bind(this);
    this.setExampleCv = this.setExampleCv.bind(this);
    this.generateCV = this.generateCV.bind(this);
    this.editCv = this.editCv.bind(this);
    this.clearCv = this.clearCv.bind(this);
  }

  handleChange(event) {
    const sectionToChange = event.target.dataset.section;
    const itemNumber = event.target.dataset.number;
    const stateToChange = event.target.dataset.name;
    const { value } = event.target;
    console.log(value);
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

  handleDelete(event) {
    const sectionToChange = event.target.dataset.section;
    const itemNumber = event.target.dataset.number;
    this.setState({
      info: {
        ...this.state.info,
        [sectionToChange]: this.state.info[sectionToChange].filter(
          (item, index) => {
            const itemN = Number(itemNumber);
            return itemN !== index;
          },
        ),
      },
    });
  }

  // eslint-disable-next-line class-methods-use-this

  setExampleCv() {
    this.setState({
      info: {
        general: [
          {
            name: "John Smith",
            email: "testemail@testing.com",
            phone: "252562623",
            birth: "1993-08-25",
            about: `senior Web Developer specializing in front end development, Experienced with all stages of the
            development cycle for dynamic web projects. Well-versed in numerous programming languages
            including HTMLS, PHP OOP, JavaScript, CSS, MySQL. Strong background in project management and
            customer relations.`,
          },
        ],
        education: [
          {
            school: "Columbia University, NY",
            title: "Bachelor of Science: Computer Information Systems",
            dateFrom: "2010-05-21",
            dateTo: "",
          },
        ],
        job: [
          {
            company: "Luna Web Design",
            position: "Web Developer",
            tasks: `Cooperate with designers to create clean interfaces and simple, intuitive interactions and
            experiences.
            Develop project concepts and maintain optimal workflow.
            Work with senior developer to manage large, complex design projects for corporate clients.
            Complete detailed programming and development tasks for front end public and internal
            websites as well as challenging back-end server code
            Carry out quality assurance tests to discover errors and optimize usability.`,
            dateFrom: "2015-03-10",
            dateTo: "2020-09-02",
          },
        ],
        skills: [
          { name: "Javascript", level: "Skilled" },
          { name: "CSS", level: "Skilled" },
          { name: "HTML", level: "Average" },
        ],
        languages: [
          { name: "English", level: "Native / Bilingual Proficiency" },
          { name: "Spanish", level: "Professional Working Proficiency" },
          { name: "Chineese", level: "Limited Working Proficiency" },
        ],
      },
    });
    this.generateCV();
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

  resetItemData(item) {
    const cleanItem = item;
    const keys = Object.keys(cleanItem);
    keys.forEach((key) => {
      cleanItem[key] = "";
    });
    return cleanItem;
  }

  generateCV() {
    this.setState({ editMode: false });
  }

  editCv() {
    this.setState({ editMode: true });
  }

  clearCv() {
    this.setState({
      editMode: true,
      info: {
        general: [
          {
            name: "",
            email: "",
            phone: "",
            birth: "",
            about: "",
          },
        ],
        education: [
          {
            school: "",
            title: "",
            dateFrom: "",
            dateTo: "",
          },
        ],
        job: [
          { company: "", position: "", tasks: "", dateFrom: "", dateTo: "" },
        ],
        skills: [{ name: "", level: "Begginer" }],
        languages: [{ name: "", level: "No Proficiency" }],
      },
    });
  }

  render() {
    const pageToRender = this.state.editMode ? (
      <div>
        <header>
          <h1>Resume Generator</h1>
          <h3>
            Fill up the information and we will generate beautiful resume for
            you
          </h3>
          <button className="example" type="button" onClick={this.setExampleCv}>
            Show Example
          </button>
        </header>
        <main>
          <form onSubmit={this.generateCV}>
            <div className="part">
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
            </div>
            <div className="part">
              <h2>Education Information</h2>
              {this.state.info.education.map((item, index) => (
                <EducationInfo
                  handleChange={this.handleChange}
                  handleDelete={this.handleDelete}
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
                Add Another School
              </button>
            </div>
            <div className="part">
              <h2>Job Experiance</h2>
              {this.state.info.job.map((item, index) => (
                <JobInfo
                  handleChange={this.handleChange}
                  handleDelete={this.handleDelete}
                  itemNumber={index}
                  // eslint-disable-next-line react/no-array-index-key
                  company={item.company}
                  position={item.position}
                  tasks={item.tasks}
                  dateFrom={item.dateFrom}
                  dateTo={item.dateTo}
                />
              ))}
              <button
                type="button"
                data-section="job"
                onClick={this.addNewSection}
              >
                Add Workplace
              </button>
            </div>
            <div className="part">
              <h2>Skills</h2>
              {this.state.info.skills.map((item, index) => (
                <SkillInfo
                  handleChange={this.handleChange}
                  handleDelete={this.handleDelete}
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
            </div>
            <div className="part">
              <h2>Languages</h2>
              {this.state.info.languages.map((item, index) => (
                <LanguageInfo
                  handleChange={this.handleChange}
                  handleDelete={this.handleDelete}
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
            </div>
            <button className="modify" type="submit">
              Generate Resume
            </button>
            <button className="modify" type="button" onClick={this.clearCv}>
              Clear Form
            </button>
          </form>
        </main>
      </div>
    ) : (
      <ViewCv info={this.state.info} handleEdit={this.editCv} />
    );
    return <div className="App">{pageToRender}</div>;
  }
}

export default App;
