import {
  GET_TEXTCHANNELS,
  GET_TEXTCHANNELS_SUCCESS,
  GET_TEXTCHANNELS_FAILED,
} from "../types/index";

const initialState = {
  textChannel: [],
  loading: false,
  error: false,
};

export default function textChannelsReducer(state = initialState, action) {
  switch (action.type) {
    case GET_TEXTCHANNELS:
      return {
        ...state,
        loading: action.payload,
      };
    case GET_TEXTCHANNELS_SUCCESS:
      return {
        ...state,
        loading: false,
        textChannel: action.payload,
      };
    case GET_TEXTCHANNELS_FAILED:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
}
