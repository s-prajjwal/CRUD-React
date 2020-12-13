import React from "react";
import "./PrimaryButton.css";

const PrimaryButton = ({ type, text, handleClick, disabled }) => {
  let className = "";
  switch (type) {
    case "ADD":
      className = "primary_btn add_lead_modal_btn";
      break;
    case "UPDATE":
      className = "primary_btn update_lead_modal_btn";
      break;
    case "DELETE":
      className = "primary_btn delete_lead_modal_btn";
      break;
    case "CANCEL":
      className = "primary_btn cancel_lead_modal_btn";
      break;
    case "SAVE":
      className = "primary_btn save_lead_modal_btn";
      break;
    case "DELETE_LEAD":
      className = "primary_btn delete_lead_btn";
      break;
    default:
      className = "primary_btn btn_link";
      break;
  }
  return (
    <button className={className} onClick={handleClick} disabled={disabled}>
      {text}
    </button>
  );
};

export default PrimaryButton;
