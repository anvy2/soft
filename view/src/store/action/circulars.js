import axios from 'axios';

const API = `${process.env.REACT_APP_API_URL}`;

export const get_circulars = (user_id) => async (dispatch) => {
  const res = await axios.get(`${API}/get/circulars`, {
    user_id,
  });
  dispatch({
    type: 'FETCH_CIRCULARS',
    payload: res,
  });
};

export const edit_circular = (user_id, circular_id) => async (dispatch) => {
  await axios.patch(`${API}/edit/circular`, {
    user_id,
    circular_id,
  });
  dispatch(get_circulars);
};

export const delete_circular = (user_id, circular_id) => async (dispatch) => {
  await axios.delete(`${API}/delete/circular`, {
    user_id,
    circular_id,
  });
  dispatch(get_circulars);
};
