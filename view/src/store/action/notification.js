import axios from "axios";

const API = `${process.env.REACT_APP_API_URL}`;

export const getNotif = (id) => (dispatch) => {
  const res = axios.get(`${API}/getnotifications`, {
    id
  });
  dispatch({
    type: "NOTIFICATION",
    payload: res.data
  });
};