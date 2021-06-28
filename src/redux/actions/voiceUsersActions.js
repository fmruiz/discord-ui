import {
  GET_VOICEUSERS,
  GET_VOICEUSERS_SUCCESS,
  GET_VOICEUSERS_FAILED,
} from "../types/index";
import { graphCms } from "../../apis/graphCms";
import { queries } from "../graphCms/cmsQueries";

export function getVoiceUsersAction() {
  return async (dispatch) => {
    dispatch(getVoiceUsers());
    try {
      const res = await graphCms.request(queries.voiceUsersQuery);
      dispatch(getVoiceUsersSuccess());
    } catch (error) {
      console.log(error);
      dispatch(getVoiceUsersFailed());
    }
  };
}

const getVoiceUsers = () => ({
  type: GET_VOICEUSERS,
  payload: true,
});

const getVoiceUsersSuccess = () => ({
  type: GET_VOICEUSERS_SUCCESS,
  payload: "",
});

const getVoiceUsersFailed = () => ({
  type: GET_VOICEUSERS_FAILED,
  payload: true,
});
