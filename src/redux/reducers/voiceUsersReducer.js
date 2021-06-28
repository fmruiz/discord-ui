import {
  GET_VOICEUSERS,
  GET_VOICEUSERS_SUCCESS,
  GET_VOICEUSERS_FAILED,
} from "../types/index";

const initialState = {
  voiceUsers: [],
  loading: false,
  error: false,
};

export default function voiceUsersReducer(state = initialState, action) {
  switch (action.type) {
    case GET_VOICEUSERS:
      return {
        ...state,
        loading: action.payload,
      };
    case GET_VOICEUSERS_SUCCESS:
      return {
        ...state,
        loading: false,
        voiceUsers: action.payload,
      };
    case GET_VOICEUSERS_FAILED:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
}
