import {
  GET_MUSICPUBLICATIONS,
  GET_MUSICPUBLICATIONS_SUCCESS,
  GET_MUSICPUBLICATIONS_FAILED,
} from "../types/index";
import { graphCms } from "../../apis/graphCms";
import { queries } from "../graphCms/cmsQueries";

export function getMusicPublicationsAction() {
  return async (dispatch) => {
    dispatch(getMusicPublications());
    try {
      const res = await graphCms.request(queries.musicPublicationsQuery);
      console.log(res);
      dispatch(getMusicPublicationsSuccess());
    } catch (error) {
      console.log(error);
      dispatch(getMusicPublicationsFailed());
    }
  };
}

const getMusicPublications = () => ({
  type: GET_MUSICPUBLICATIONS,
  payload: true,
});

const getMusicPublicationsSuccess = () => ({
  type: GET_MUSICPUBLICATIONS_SUCCESS,
  payload: "",
});

const getMusicPublicationsFailed = () => ({
  type: GET_MUSICPUBLICATIONS_FAILED,
  payload: true,
});
