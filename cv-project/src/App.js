/* eslint-disable react/no-access-state-in-setstate */
/* eslint-disable react/destructuring-assignment */
import React from "react";
import GeneralInfo from "./components/generalInfo";
import EducationInfo from "./components/educationInfo";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      info: {
        general: [{ name: "", email: "", phone: "", birth: "" }],
        education: [{ school: "", title: "", dateFrom: "", dateTo: "" }],
        job: {},
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
          {this.state.info.general.map((item, index) => (
            <GeneralInfo
              handleChange={this.handleChange}
              itemNumber={index}
              // eslint-disable-next-line react/no-array-index-key
              name={item.name}
              email={item.email}
              phone={item.phone}
              birth={item.birth}
            />
          ))}
          {console.log(this.state.info)};
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
        </form>
      </div>
    );
  }
}

export default App;
