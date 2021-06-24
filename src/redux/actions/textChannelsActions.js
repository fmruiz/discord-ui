import {
  GET_TEXTCHANNELS,
  GET_TEXTCHANNELS_SUCCESS,
  GET_TEXTCHANNELS_FAILED,
} from "../types/index";
import { backend } from "../../apis/backend";

// Get Text channels
export const getTextChannelsAction = () => {
  return async (dispatch) => {
    dispatch(getTextChannels());
    try {
      const res = await backend.get("/api/text-channels");
      dispatch(getTextChannelsSuccess(res.data));
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

const getTextChannelsSuccess = (textChannel) => ({
  type: GET_TEXTCHANNELS_SUCCESS,
  payload: textChannel,
});

const getTextChannelsFailed = () => ({
  type: GET_TEXTCHANNELS_FAILED,
  payload: true,
});
