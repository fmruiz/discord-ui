import {
  GET_CHANNELIMAGES,
  GET_CHANNELIMAGES_SUCCESS,
  GET_CHANNELIMAGES_FAILED,
} from "../types/index";

const initialState = {
  channelImages: [],
  loading: false,
  error: false,
};

export default function channelImagesReducer(state = initialState, action) {
  switch (action.type) {
    case GET_CHANNELIMAGES:
      return {
        ...state,
        loading: action.payload,
      };
      case GET_CHANNELIMAGES_SUCCESS:
      return {
        ...state,
        loading: false,
        channelImages: action.payload,
      };
      case GET_CHANNELIMAGES_FAILED:
      return {
        ...state,
        loading: false,
        channelImages: action.payload,
      };
    default:
      return state;
  }
}
