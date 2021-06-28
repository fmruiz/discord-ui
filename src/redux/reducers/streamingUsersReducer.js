import {
  GET_STREAMINGUSERS,
  GET_STREAMINGUSERS_SUCCESS,
  GET_STREAMINGUSERS_FAILED,
} from "../types/index";

const initialState = {
  streamingUsers: [],
  loading: false,
  error: false,
};

export default function streamingUsersReducer(state = initialState, action) {
  switch (action.type) {
    case GET_STREAMINGUSERS:
      return {
        ...state,
        loading: action.payload,
      };
    case GET_STREAMINGUSERS_SUCCESS:
      return {
        ...state,
        loading: false,
        streamingUsers: action.payload,
      };
    case GET_STREAMINGUSERS_FAILED:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
}
