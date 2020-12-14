import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { createNewLead } from "../../redux/actions";
import { ButtonType } from "../../utils/constants";
import PrimaryButton from "../PrimaryButton";
import "./AddModal.css";
import { initialFormFieldsData } from "./formFieldsData";

const AddModal = ({ addLeadInfo, modifyState }) => {
  const [formFieldsData, setFormFieldsData] = useState(initialFormFieldsData);
  const [allowSubmit, setAllowSubmit] = useState(false);

  useEffect(() => {
    const emptyResponseFields = formFieldsData.filter(
      (field) => field.response === ""
    );
    emptyResponseFields.length === 0
      ? setAllowSubmit(true)
      : setAllowSubmit(false);
  }, [formFieldsData]);

  const inputChange = (event) => {
    const newFormFieldsData = formFieldsData.map((item) => {
      if (item.name === event.target.name)
        return { ...item, response: event.target.value };
      return item;
    });
    setFormFieldsData(newFormFieldsData);
  };

  const handleSave = () => {
    const formData = {};
    formFieldsData.forEach((item) => {
      formData[item.name] = item.response;
    });
    addLeadInfo(formData);
    closeAddModal();
  };

  const closeAddModal = () => {
    modifyState({ showAddModal: false });
  };

  return (
    <div className="add_lead_form_wrapper">
      <div className="add_lead_form_heading">Add Lead</div>
      <div className="add_lead_form">
        <div className="add_lead_form_body">
          {formFieldsData.map((item, index) => {
            return (
              <div key={index}>
                <div className="add_lead_form_input_label">{item.label}</div>
                {item.type === "select" ? (
                  <select
                    className="add_lead_form_select"
                    name={item.name}
                    onChange={inputChange}
                  >
                    {item.options.map((option, index) => (
                      <option value={option.value} key={index}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                ) : (
                  <input
                    className="add_lead_form_input"
                    type="text"
                    name={item.name}
                    onChange={inputChange}
                  />
                )}
              </div>
            );
          })}
        </div>
        <div className="add_lead_form_footer">
          <hr />
          <PrimaryButton
            type={ButtonType.SAVE}
            text="Save"
            handleClick={handleSave}
            disabled={!allowSubmit}
          />
          <PrimaryButton text="Close" handleClick={closeAddModal} />
        </div>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    addLeadInfo: (formData) => {
      dispatch(createNewLead(formData));
    },
  };
};

export default connect(null, mapDispatchToProps)(AddModal);
