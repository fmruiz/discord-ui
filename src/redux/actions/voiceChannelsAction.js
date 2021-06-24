import {
  GET_VOICECHANNELS,
  GET_VOICECHANNELS_SUCCESS,
  GET_VOICECHANNELS_FAILED,
} from "../types/index";
import { backend } from "../../apis/backend";

// Get voice channels
export const getVoiceChannelsAction = () => {
  return async (dispatch) => {
    dispatch(getVoiceChannels());
    try {
      const res = await backend.get("/api/voice-channels");
      dispatch(getVoiceChannelsSuccess(res.data));
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

const getVoiceChannelsSuccess = (voiceChannel) => ({
  type: GET_VOICECHANNELS_SUCCESS,
  payload: voiceChannel,
});

const getVoiceChannelsFailed = () => ({
  type: GET_VOICECHANNELS_FAILED,
  payload: true,
});
