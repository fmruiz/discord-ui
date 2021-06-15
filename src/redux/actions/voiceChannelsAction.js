import {
  GET_VOICECHANNELS,
  GET_VOICECHANNELS_SUCCESS,
  GET_VOICECHANNELS_FAILED,
} from "../types/index";

export const getVoiceChannelsAction = () => {
  return (dispatch) => {
    dispatch(getVoiceChannels());
    try {
      dispatch(getVoiceChannelsSuccess());
    } catch (error) {
      console.log(error);
      dispatch(getVoiceChannelsFailed());
    }
  };
};

const getVoiceChannels = () => ({
  type: GET_VOICECHANNELS,
  payload: true,
});

const getVoiceChannelsSuccess = () => ({
  type: GET_VOICECHANNELS_SUCCESS,
  payload: "",
});

const getVoiceChannelsFailed = () => ({
  type: GET_VOICECHANNELS_FAILED,
  payload: true,
});
