/* eslint-disable react/destructuring-assignment */
import React from "react";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { info: { name: "", email: "" } };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const stateToChange = event.target.dataset.name;
    const { value } = event.target;
    this.setState({ info: { [stateToChange]: value } });
  }

  render() {
    return (
      <div className="App">
        <input
          data-name="name"
          onChange={this.handleChange}
          value={this.state.info.name}
        />
      </div>
    );
  }
}

export default App;
