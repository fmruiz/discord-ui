import {
  GET_STREAMINGUSERS,
  GET_STREAMINGUSERS_SUCCESS,
  GET_STREAMINGUSERS_FAILED,
} from "../types/index";
import { graphCms } from "../../apis/graphCms";
import { queries } from "../graphCms/cmsQueries";

export function getStreamingUsersAction() {
  return async (dispatch) => {
    dispatch(getStreamingUsers());
    try {
      const res = await graphCms.request(queries.streamingUsersQuery);
      dispatch(getStreamingUsersSuccess(res.streamingUsers));
    } catch (error) {
      console.log(error);
      dispatch(getStreamingUsersFailed());
    }
  };
}

const getStreamingUsers = () => ({
  type: GET_STREAMINGUSERS,
  payload: true,
});

const getStreamingUsersSuccess = (streamingUsers) => ({
  type: GET_STREAMINGUSERS_SUCCESS,
  payload: streamingUsers,
});

const getStreamingUsersFailed = () => ({
  type: GET_STREAMINGUSERS_FAILED,
  payload: true,
});
