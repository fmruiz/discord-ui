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
    default:
      return state;
  }
}
