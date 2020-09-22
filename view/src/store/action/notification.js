import axios from "axios";

const API = `${process.env.REACT_APP_API_URL}`;

export const getNotif = () => (dispatch) => {
  const res = axios.get(`${API}/getnotifications`);
  dispatch({ type: "notification", payload: res.data });
};
