import {
  GET_INITIAL_MEMES,
  GET_INITIAL_MEMES_SUCCESS,
  GET_INITIAL_MEMES_ERROR,
  GET_MEMES,
  GET_MEMES_SUCCESS,
  GET_MEMES_ERROR,
} from "../types";

const initialState = {
  memes: [],
  loading: false,
  error: false,
  initialMeme: [],
};

export default function MemesReducer(state = initialState, action) {
  switch (action.type) {
    case GET_INITIAL_MEMES:
    case GET_MEMES:
      return {
        ...state,
        loading: action.payload,
      };
    case GET_INITIAL_MEMES_SUCCESS:
      return {
        ...state,
        loading: false,
        initialMeme: action.payload,
      };
    case GET_MEMES_SUCCESS:
      return {
        ...state,
        loading: false,
        memes: action.payload,
      };
    case GET_INITIAL_MEMES_ERROR:
    case GET_MEMES_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
}
