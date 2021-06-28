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
      dispatch(getVoiceUsersSuccess(res.voiceUsers));
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

const getVoiceUsersSuccess = (voiceUsers) => ({
  type: GET_VOICEUSERS_SUCCESS,
  payload: voiceUsers,
});

const getVoiceUsersFailed = () => ({
  type: GET_VOICEUSERS_FAILED,
  payload: true,
});
