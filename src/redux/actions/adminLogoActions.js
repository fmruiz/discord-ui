import {
  GET_ADMINLOGO,
  GET_ADMINLOGO_SUCCESS,
  GET_ADMINLOGO_FAILED,
} from "../types/index";

export const getAdminLogoAction = () => {
  return (dispatch) => {
    dispatch(getAdminLogo());
  };
};

const getAdminLogo = () => ({
  type: GET_ADMINLOGO,
  payload: true,
});
