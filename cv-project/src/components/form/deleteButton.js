/* eslint-disable consistent-return */
/* eslint-disable react/prefer-stateless-function */
/* eslint-disable react/prop-types */
import React from "react";

class DeleteButton extends React.Component {
  render() {
    const { section, itemNumber, onClick } = this.props;

    if (itemNumber === 0) {
      return;
    }
    return (
      <div>
        <button
          type="button"
          data-section={section}
          data-number={itemNumber}
          onClick={onClick}
        >
          Delete
        </button>
      </div>
    );
  }
}
export default DeleteButton;
