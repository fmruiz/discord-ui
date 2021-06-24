import { GET_LOGO, GET_LOGO_SUCCESS, GET_LOGO_FAILED } from "../types/index";
import { strapiCms } from "../../apis/backend";

// Get Logo
export const getLogoAction = () => {
  return async (dispatch) => {
    dispatch(getLogo());
    try {
      const res = await strapiCms.get("/uploads/logo_42e4036c6f.jpg");
      dispatch(getLogoSuccess(res.request.responseURL));
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
