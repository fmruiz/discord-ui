import {
  GET_GROUPS,
  GET_GROUPS_SUCCESS,
  GET_GROUPS_FAILED,
} from "../types/index";

const initialState = {
  groups: [],
  error: false,
  loading: false,
};

export default function groupsReducer(state = initialState, action) {
  switch (action.type) {
    case GET_GROUPS:
      return {
        ...state,
        loading: action.payload,
      };
    case GET_GROUPS_SUCCESS:
      return {
        ...state,
        loading: false,
        groups: action.payload,
      };
    case GET_GROUPS_FAILED:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
}
