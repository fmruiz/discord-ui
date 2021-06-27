import {
  GET_ADMINLOGO,
  GET_ADMINLOGO_SUCCESS,
  GET_ADMINLOGO_FAILED,
} from "../types/index";
import { graphCms } from "../../apis/graphCms";
import { queries } from "../graphCms/cmsQueries";

export function getAdminLogoAction() {
  return async (dispatch) => {
    dispatch(getAdminLogo());
    try {
      const res = await graphCms.request(queries.adminLogoQuery);
      dispatch(getAdminLogoSuccess(res.adminLogo));
    } catch (error) {
      console.log(error);
      dispatch(getAdminLogoError());
    }
  };
}

const getAdminLogo = () => ({
  type: GET_ADMINLOGO,
  payload: true,
});

const getAdminLogoSuccess = (logo) => ({
  type: GET_ADMINLOGO_SUCCESS,
  payload: logo,
});

const getAdminLogoError = () => ({
  type: GET_ADMINLOGO_FAILED,
  payload: true,
});
