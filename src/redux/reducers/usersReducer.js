import { GET_USERS, GET_USERS_SUCCESS, GET_USERS_FAILED } from "../types/index";

const initialState = {
  users: [],
  error: false,
  loading: false,
};

export default function usersReducer(state = initialState, action) {
  switch (action.type) {
    case GET_USERS:
      return {
        ...state,
        loading: action.payload,
      };
    case GET_USERS_SUCCESS:
      return {
        ...state,
        loading: false,
        error: false,
        users: action.payload,
      };
    case GET_USERS_FAILED:
      return {
        ...state,
        loading: false,
        error: true,
      };
    default:
      return state;
  }
}
