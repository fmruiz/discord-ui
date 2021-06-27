import {
  GET_ADMININFO,
  GET_ADMININFO_SUCCESS,
  GET_ADMININFO_FAILED,
} from "../types/index";
import { graphCms } from "../../apis/graphCms";
import { queries } from "../graphCms/cmsQueries";

export function getAdminInfoAction() {
  return async (dispatch) => {
    dispatch(getAdminInfo());
    try {
      const res = await graphCms.request(queries.adminInfoQuery);
      dispatch(getAdminInfoSuccess(res.adminInfo));
    } catch (error) {
      console.log(error);
    }
  };
}

const getAdminInfo = () => ({
  type: GET_ADMININFO,
  payload: true,
});

const getAdminInfoSuccess = (adminInfo) => ({
  type: GET_ADMININFO_SUCCESS,
  payload: adminInfo,
});
