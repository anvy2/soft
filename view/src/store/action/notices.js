import axios from 'axios';

const API = `${process.env.REACT_APP_API_URL}`;

export const get_notices = (user_id) => async (dispatch) => {
  const res = await axios.get(`${API}/get/notices`, {
    user_id,
  });
  dispatch({
    type: 'FETCH_NOTICES',
    payload: res,
  });
};

export const edit_notice = (user_id, notice_id) => async (dispatch) => {
  await axios.patch(`${API}/edit/notice`, {
    user_id,
    notice_id,
  });
  dispatch(get_notices);
};

export const delete_notice = (user_id, notice_id) => async (dispatch) => {
  await axios.delete(`${API}/delete/notice`, {
    user_id,
    notice_id,
  });
  dispatch(get_notices);
};
