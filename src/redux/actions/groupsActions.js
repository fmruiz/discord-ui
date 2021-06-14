import {
  GET_GROUPS,
  GET_GROUPS_SUCCESS,
  GET_GROUPS_FAILED,
} from "../types/index";
import backend from "../../apis/backend";

export function getGroupsAction() {
  return async (dispatch) => {
    dispatch(getGroups());
    try {
      const res = await backend.get("/api/groups");
      dispatch(getGroupsSuccess(res.data));
    } catch (error) {
      console.log(error);
      dispatch(getGroupsFailed());
    }
  };
}

const getGroups = () => ({
  type: GET_GROUPS,
  payload: true,
});

const getGroupsSuccess = (groups) => ({
  type: GET_GROUPS_SUCCESS,
  payload: groups,
});

const getGroupsFailed = () => ({
  type: GET_GROUPS_FAILED,
  payload: true,
});
