/* eslint-disable react/prefer-stateless-function */
/* eslint-disable react/prop-types */
import React from "react";
import ShortAnswer from "./shortAnswer";
import LongAnswer from "./longAnswer";

class GeneralInfo extends React.Component {
  render() {
    const { name, email, phone, birth, about, handleChange, itemNumber } =
      this.props;

    return (
      <div className="section">
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
        <LongAnswer
          labelText="About me: "
          name="about"
          section="general"
          itemNumber={itemNumber}
          type="text"
          handleChange={handleChange}
          value={about}
        />
      </div>
    );
  }
}
export default GeneralInfo;
