import {
  GET_ADMININFO,
  GET_ADMININFO_SUCCESS,
  GET_ADMININFO_FAILED,
} from "../types/index";

const initialState = {
  adminInfo: [],
  loading: false,
  error: false,
};

export default function adminInfoReducer(state = initialState, action) {
  switch (action.type) {
    case GET_ADMININFO:
      return {
        ...state,
        loading: action.payload,
      };
    default:
      return state;
  }
}
