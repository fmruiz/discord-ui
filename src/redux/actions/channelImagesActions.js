import {
  GET_CHANNELIMAGES,
  GET_CHANNELIMAGES_SUCCESS,
  GET_CHANNELIMAGES_FAILED,
} from "../types/index";

export function getChannelImagesAction() {
  return (dispatch) => {
    dispatch(getChannelImages());
    try {
      dispatch(getChannelImagesSuccess());
    } catch (error) {
      console.log(error);
      dispatch(getChannelImagesFailed());
    }
  };
}

const getChannelImages = () => ({
  type: GET_CHANNELIMAGES,
  payload: true,
});

const getChannelImagesSuccess = () => ({
  type: GET_CHANNELIMAGES_SUCCESS,
  payload: "",
});

const getChannelImagesFailed = () => ({
  type: GET_CHANNELIMAGES_FAILED,
  payload: true,
});
