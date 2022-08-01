/* eslint-disable react/prefer-stateless-function */
/* eslint-disable react/prop-types */
import React from "react";

class InformationInput extends React.Component {
  render() {
    const { name, handleChange, value } = this.props;

    return <input data-name={name} onChange={handleChange} value={value} />;
  }
}
export default InformationInput;
