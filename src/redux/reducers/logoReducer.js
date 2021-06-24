import { GET_LOGO, GET_LOGO_SUCCESS, GET_LOGO_FAILED } from "../types/index";

const initialState = {
  logo: [],
  loading: false,
  error: false,
};

export default function logoReducer(state = initialState, action) {
  switch (action.type) {
    case GET_LOGO:
      return {
        ...state,
        loading: action.payload,
      };
    case GET_LOGO_SUCCESS:
      return {
        ...state,
        loading: false,
        logo: action.payload,
      };
    case GET_LOGO_FAILED:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
}
