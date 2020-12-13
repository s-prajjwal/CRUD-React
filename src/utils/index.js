export const API_BASE_URL = process.env.REACT_APP_API_URL;
export const GET_LEADS_DATA_URL =
  API_BASE_URL + "/api/leads/?location_string=India";
export const POST_LEAD_DATA_URL = API_BASE_URL + "/api/leads/";
export const UPDATE_MARK_API_URL = API_BASE_URL + "/api/mark_lead/";
export const DELETE_LEAD_API_URL = API_BASE_URL + "/api/leads/";

export const TICK_IMAGE_URL =
  "https://upload.wikimedia.org/wikipedia/commons/7/73/Flat_tick_icon.svg";
export const ALERT_MESSAGES = {
  UPDATE: "Successfully Updated!",
  REMOVE: "Successfully Removed!",
};
