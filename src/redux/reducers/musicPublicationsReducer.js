import {
  GET_MUSICPUBLICATIONS,
  GET_MUSICPUBLICATIONS_SUCCESS,
  GET_MUSICPUBLICATIONS_FAILED,
} from "../types/index";

const initialState = {
  musicPublications: [],
  loading: false,
  error: false,
};

export default function musicPublicationsReducer(state = initialState, action) {
  switch (action.type) {
    case GET_MUSICPUBLICATIONS:
      return {
        ...state,
        loading: action.payload,
      };
    case GET_MUSICPUBLICATIONS_SUCCESS:
      return {
        ...state,
        loading: false,
        musicPublications: action.payload,
      };
    case GET_MUSICPUBLICATIONS_FAILED:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
}
