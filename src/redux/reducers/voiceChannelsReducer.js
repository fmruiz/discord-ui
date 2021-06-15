import {
  GET_VOICECHANNELS,
  GET_VOICECHANNELS_SUCCESS,
  GET_VOICECHANNELS_FAILED,
} from "../types/index";

const initialState = {
  voiceChannel: [],
  loading: false,
  error: false,
};

export default function voiceChannelsReducer(state = initialState, action) {
  switch (action.type) {
    case GET_VOICECHANNELS:
      return {
        ...state,
        loading: action.payload,
      };
    case GET_VOICECHANNELS_SUCCESS:
      return {
        ...state,
        loading: false,
        voiceChannel: action.payload,
      };
    case GET_VOICECHANNELS_FAILED:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
}
