import { GET_LOGO, GET_LOGO_SUCCESS, GET_LOGO_FAILED } from "../types/index";
import { queries } from "../graphCms/cmsQueries";
import { graphCms } from "../../apis/graphCms";

// Get Logo
export const getLogoAction = () => {
  return async (dispatch) => {
    dispatch(getLogo());
    try {
      const res = await graphCms.request(queries.logoQuery);
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
