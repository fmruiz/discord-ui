import { GET_LOGO, GET_LOGO_SUCCESS, GET_LOGO_FAILED } from "../types/index";
import { logoQueries } from "../queries";
import { graphCms } from "../../apis/backend";

// Get Logo
export const getLogoAction = () => {
  return async (dispatch) => {
    dispatch(getLogo());
    try {
      const res = await graphCms.request(logoQueries);
      dispatch(getLogoSuccess(res.assets[0]));
    } catch (error) {
      console.log(error);
      dispatch(getLogoFailed());
    }
  };
};

const getLogo = () => ({
  type: GET_LOGO,
  payload: true,
});

const getLogoSuccess = (image) => ({
  type: GET_LOGO_SUCCESS,
  payload: image,
});

const getLogoFailed = () => ({
  type: GET_LOGO_FAILED,
  payload: true,
});
