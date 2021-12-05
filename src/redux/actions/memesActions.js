import {
  GET_INITIAL_MEMES,
  GET_INITIAL_MEMES_SUCCESS,
  GET_INITIAL_MEMES_ERROR,
} from "../types";
import { Giphy } from "../../apis/Giphy";

// get initial user admin memes
export const getInitialMemes = () => {
  return async (dispatch) => {
    dispatch(initialMeme());
    try {
      const res = await Giphy.get();
      const { data } = res.data;
      dispatch(initialMemeSuccess(data));
    } catch (error) {
      dispatch(initialMemeError());
      console.log(error);
    }
  };
};

const initialMeme = () => ({
  type: GET_INITIAL_MEMES,
  payload: true,
});

const initialMemeSuccess = (meme) => ({
  type: GET_INITIAL_MEMES_SUCCESS,
  payload: meme,
});

const initialMemeError = () => ({
  type: GET_INITIAL_MEMES_ERROR,
  payload: true,
});
