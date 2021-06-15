import {
  GET_TEXTCHANNELS,
  GET_TEXTCHANNELS_SUCCESS,
  GET_TEXTCHANNELS_FAILED,
} from "../types/index";

// Get Text channels
export const getTextChannelsAction = () => {
  return async (dispatch) => {
    dispatch(getTextChannels());
    try {
      dispatch(getTextChannelsSuccess());
    } catch (error) {
      console.log(error);
      dispatch(getTextChannelsFailed());
    }
  };
};

const getTextChannels = () => ({
  type: GET_TEXTCHANNELS,
  payload: true,
});

const getTextChannelsSuccess = () => ({
  type: GET_TEXTCHANNELS_SUCCESS,
  payload: "",
});

const getTextChannelsFailed = () => ({
  type: GET_TEXTCHANNELS_FAILED,
  payload: true,
});
