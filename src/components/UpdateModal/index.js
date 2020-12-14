import React, { useState } from "react";
import { connect } from "react-redux";
import { updateMarkCommunication } from "../../redux/actions";
import { ButtonType } from "../../utils/constants";
import PrimaryButton from "../PrimaryButton";
import "./UpdateModal.css";

const UpdateModal = ({ modifyState, selectedId, updateLeadData, leadData }) => {
  const [data, setData] = useState(leadData.communication || "");
  const handleChange = (event) => {
    setData(event.target.value);
  };
  const closeUpdateModal = () => {
    modifyState({ showUpdateModal: false, selectedId: "" });
  };
  const updateCommunicationData = () => {
    const formData = {
      communication: data,
    };
    updateLeadData(formData, selectedId);
    closeUpdateModal();
  };
  return (
    <div className="update_lead_form_wrapper">
      <div className="update_lead_form_heading">Mark Communication</div>
      <div className="update_lead_form">
        <div className="update_leaf_form_body">
          <div className="update_lead_form_input_label">Communication</div>
          <textarea
            name="communication"
            className="form_control_textarea"
            rows="7"
            cols="50"
            onChange={handleChange}
  >{data}</textarea>
        </div>
        <div className="update_lead_form_footer">
          <hr />
          <PrimaryButton
            text="Close"
            handleClick={closeUpdateModal}
          />
          <PrimaryButton
            type={ButtonType.SAVE}
            text="Save"
            handleClick={updateCommunicationData}
          />
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => {
  return {
    leadData: state.leadsReducer.leadsList.filter(lead => lead.id === ownProps.selectedId )[0]
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    updateLeadData: (formData, id) => {
      dispatch(updateMarkCommunication(formData, id));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UpdateModal);
