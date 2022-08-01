/* eslint-disable react/prefer-stateless-function */
/* eslint-disable react/prop-types */
import React from "react";
import ShortAnswer from "./shortAnswer";

class GeneralInfo extends React.Component {
  render() {
    const { name, email, phone, birth, handleChange, itemNumber } = this.props;

    return (
      <div className="section">
        <h2>General Information</h2>
        <ShortAnswer
          labelText="Full Name: "
          name="name"
          section="general"
          itemNumber={itemNumber}
          type="text"
          handleChange={handleChange}
          value={name}
        />
        <ShortAnswer
          labelText="Full Name: "
          name="name"
          section="general"
          itemNumber={itemNumber}
          type="text"
          handleChange={handleChange}
          value={name}
        />

        <ShortAnswer
          labelText="Email: "
          name="email"
          section="general"
          itemNumber={itemNumber}
          type="email"
          handleChange={handleChange}
          value={email}
        />
        <ShortAnswer
          labelText="Phone Number: "
          name="phone"
          section="general"
          itemNumber={itemNumber}
          type="tel"
          handleChange={handleChange}
          value={phone}
        />
        <ShortAnswer
          labelText="Birth Date: "
          name="birth"
          section="general"
          itemNumber={itemNumber}
          type="date"
          handleChange={handleChange}
          value={birth}
        />
      </div>
    );
  }
}
export default GeneralInfo;
