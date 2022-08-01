/* eslint-disable react/destructuring-assignment */
import React from "react";
import GeneralInfo from "./components/generalInfo";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      info: {
        general: [{ name: "", email: "", phone: "", birth: "" }],
        education: [
          { school: "", title: "", dateFrom: "", dateTo: "" },
          { school: "", title: "", dateFrom: "", dateTo: "" },
        ],
        job: {},
      },
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const sectionToChange = event.target.dataset.section;
    const itemNumber = event.target.dataset.number;
    const stateToChange = event.target.dataset.name;
    const { value } = event.target;
    this.setState({
      info: { [sectionToChange]: { [itemNumber]: { [stateToChange]: value } } },
    });
  }

  render() {
    return (
      <div className="App">
        <form>
          <GeneralInfo
            handleChange={this.handleChange}
            itemNumber={0}
            name={this.state.info.general[0].name}
            email={this.state.info.general[0].email}
            phone={this.state.info.general[0].phone}
            birth={this.state.info.general[0].birth}
          />
        </form>
      </div>
    );
  }
}

export default App;
