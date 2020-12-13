import React, { useState } from "react";
import { connect } from "react-redux";
import "./App.css";
import AddModal from "./components/AddModal";
import DeleteModal from "./components/DeleteModal";
import List from "./components/List";
import PrimaryButton from "./components/PrimaryButton";
import UpdateModal from "./components/UpdateModal";
import { ButtonType } from "./utils/constants";
import Overlay from "./components/Overlay";
import { logo } from "./assets/loader.gif";

const initialState = {
  showAddModal: false,
  showUpdateModal: false,
  showDeleteModal: false,
  selectedId: "",
};

function App({loading}) {
  const [state, setState] = useState(initialState);
  const activateOverlay = () => {
    const {showAddModal, showUpdateModal, showDeleteModal} = state;
    return showAddModal || showUpdateModal || showDeleteModal || loading;
  }
  const onAddClick = () => {
    setState({ ...state, showAddModal: true });
  };
  const modifyState = (obj) => {
    setState({
      ...state,
      ...obj,
    });
  };
  return (
    <div className="App">
      {activateOverlay() && <Overlay />}
      {loading && <img src={logo} />}
      <PrimaryButton
        type={ButtonType.ADD}
        text="Add Lead"
        handleClick={onAddClick}
      />
      <List modifyState={modifyState} />
      {state.showAddModal && <AddModal modifyState={modifyState} />}
      {state.showUpdateModal && (
        <UpdateModal modifyState={modifyState} selectedId={state.selectedId} />
      )}
      {state.showDeleteModal && (
        <DeleteModal modifyState={modifyState} selectedId={state.selectedId} />
      )}
    </div>
  );
}

const mapStateToProps = (state) => ({
  loading: state.leadsReducer.loading,
});

export default connect(mapStateToProps, null)(App);
