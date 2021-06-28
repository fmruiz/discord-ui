import {
  GET_STREAMINGUSERS,
  GET_STREAMINGUSERS_SUCCESS,
  GET_STREAMINGUSERS_FAILED,
} from "../types/index";

export function getStreamingUsersAction() {
  return (dispatch) => {
    dispatch(getStreamingUsers());
    try {
      dispatch(getStreamingUsersSuccess());
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

const getStreamingUsersSuccess = () => ({
  type: GET_STREAMINGUSERS_SUCCESS,
  payload: "",
});

const getStreamingUsersFailed = () => ({
  type: GET_STREAMINGUSERS_FAILED,
  payload: true,
});
