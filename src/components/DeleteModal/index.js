import React from "react";
import { connect } from "react-redux";
import { deleteLead } from "../../redux/actions";
import { ButtonType } from "../../utils/constants";
import PrimaryButton from "../PrimaryButton";
import "./DeleteModal.css";

const DeleteModal = ({ deleteLeadData, selectedId, modifyState }) => {
  const handleDelete = () => {
    deleteLeadData(selectedId);
    closeDeleteModal();
  };

  const closeDeleteModal = () => {
    modifyState({ showDeleteModal: false, selectedId: "" });
  };

  return (
    <div className="delete_lead_form_wrapper">
      <div className="delete_lead_form_heading">
        Do you wish to delete this lead?
      </div>
      <div className="delete_lead_form">
        <PrimaryButton
          type={ButtonType.DELETE}
          text="Delete"
          handleClick={handleDelete}
        />
        <PrimaryButton
          type={ButtonType.CANCEL}
          text="Cancel"
          handleClick={closeDeleteModal}
        />
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    deleteLeadData: (id) => {
      dispatch(deleteLead(id));
    },
  };
};

export default connect(null, mapDispatchToProps)(DeleteModal);
