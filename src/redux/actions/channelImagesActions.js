import {
  GET_CHANNELIMAGES,
  GET_CHANNELIMAGES_SUCCESS,
  GET_CHANNELIMAGES_FAILED,
} from "../types/index";
import { graphCms } from "../../apis/graphCms";
import { queries } from "../graphCms/cmsQueries";

export function getChannelImagesAction() {
  return async (dispatch) => {
    dispatch(getChannelImages());
    try {
      const res = await graphCms.request(queries.channelImagesQuery);
      dispatch(getChannelImagesSuccess(res.channelImages));
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

const getChannelImagesSuccess = (channelImgs) => ({
  type: GET_CHANNELIMAGES_SUCCESS,
  payload: channelImgs,
});

const getChannelImagesFailed = () => ({
  type: GET_CHANNELIMAGES_FAILED,
  payload: true,
});
