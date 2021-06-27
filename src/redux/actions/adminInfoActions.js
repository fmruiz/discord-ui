import {
  GET_ADMININFO,
  GET_ADMININFO_SUCCESS,
  GET_ADMININFO_FAILED,
} from "../types/index";

export function getAdminInfoAction() {
  return (dispatch) => {
    dispatch(getAdminInfo());
  };
}

const getAdminInfo = () => ({
  type: GET_ADMININFO,
  payload: true,
});
