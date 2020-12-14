import {
  DELETE_LEAD_API_URL,
  GET_LEADS_DATA_URL,
  POST_LEAD_DATA_URL,
  UPDATE_MARK_API_URL,
} from "../../utils";
import {
  START_LOADING,
  GET_LEADS_DATA_SUCCESS,
  STOP_LOADING,
  ADD_NEW_LEAD,
  UPDATE_COMMUNICATION_DATA,
  DELETE_LEAD,
} from "../actionTypes";

export const getLeadsList = () => {
  return (dispatch) => {
    dispatch({
      type: START_LOADING,
      payload: {
        loading: true,
      },
    });
    fetch(GET_LEADS_DATA_URL)
      .then((response) => response.json())
      .then((data) => {
        dispatch({
          type: GET_LEADS_DATA_SUCCESS,
          payload: data,
        });
      })
      .then(() => {
        dispatch({
          type: STOP_LOADING,
          payload: {
            loading: false,
          },
        });
      })
      .catch((err) => {
        console.log(err);
        // window.alert(
        //   "Unable to fetch data. Please check your network connection!"
        // );
        // throw new Error(err);
      });
  };
};

export const createNewLead = (formData) => {
  return (dispatch) => {
    dispatch({
      type: START_LOADING,
      payload: {
        loading: true,
      },
    });
    fetch(POST_LEAD_DATA_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        debugger;
        if (data.id) {
          // window.alert("Lead data added successfully!!");
          dispatch({
            type: ADD_NEW_LEAD,
            payload: data,
          });
        } else if(data.email[0]) {
          // window.alert(data.email[0]);
        }
      })
      .then(() => {
        dispatch({
          type: STOP_LOADING,
          payload: {
            loading: false,
          },
        });
      })
      .catch((err) => {
        console.log("Error: ", err);
      });
  };
};

export const updateMarkCommunication = (formData, id) => {
  return (dispatch) => {
    dispatch({
      type: START_LOADING,
      payload: {
        loading: true,
      },
    });
    fetch(UPDATE_MARK_API_URL + id, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then(({ status }) => {
        if (status === "Contacted") {
          // window.alert("Lead's communication data updated successfully!!");
          dispatch({
            type: UPDATE_COMMUNICATION_DATA,
            payload: { ...formData, id },
          });
        }
      })
      .then(() => {
        dispatch({
          type: STOP_LOADING,
          payload: {
            loading: false,
          },
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const deleteLead = (id) => {
  return (dispatch) => {
    dispatch({
      type: START_LOADING,
      payload: {
        loading: true,
      },
    });
    fetch(DELETE_LEAD_API_URL + id, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then(() => {
        dispatch({
          type: DELETE_LEAD,
          payload: { id },
        });
      })
      .then(() => {
        // window.alert("Lead deleted successfully!!");
        dispatch({
          type: STOP_LOADING,
          payload: {
            loading: false,
          },
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
};
