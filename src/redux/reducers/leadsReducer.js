import {
  START_LOADING,
  GET_LEADS_DATA_SUCCESS,
  ADD_NEW_LEAD,
  STOP_LOADING,
  UPDATE_COMMUNICATION_DATA,
  DELETE_LEAD,
} from "../actionTypes";

const initialState = {
  leadsList: [],
  loading: false,
};

export default function userReducer(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case START_LOADING:
    case STOP_LOADING:
      return {
        ...state,
        ...payload,
      };
    case GET_LEADS_DATA_SUCCESS:
      return {
        ...state,
        leadsList: payload,
      };
    case ADD_NEW_LEAD:
      return {
        ...state,
        leadsList: [...state.leadsList, payload],
      };
    case UPDATE_COMMUNICATION_DATA:
      return {
        ...state,
        leadsList: state.leadsList.map((lead) => {
          return lead.id === payload.id
            ? { ...lead, communication: payload.communication }
            : lead;
        }),
      };
    case DELETE_LEAD : 
      return {
        ...state,
        leadsList: state.leadsList.filter(lead => lead.id != payload.id)
      }
    default:
      return { ...state };
  }
}
