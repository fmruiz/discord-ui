import {
  GET_ADMINLOGO,
  GET_ADMINLOGO_SUCCESS,
  GET_ADMINLOGO_FAILED,
} from "../types/index";

const initialState = {
  adminLogo: [],
  loading: false,
  error: false,
};

export default function adminLogoReducer(state = initialState, action) {
  switch (action.type) {
    case GET_ADMINLOGO:
      return {
        ...state,
        loading: action.payload,
      };
    default:
      return state;
  }
}
