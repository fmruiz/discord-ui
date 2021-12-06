import {
  GET_INITIAL_MEMES,
  GET_INITIAL_MEMES_SUCCESS,
  GET_INITIAL_MEMES_ERROR,
  GET_MEMES,
  GET_MEMES_SUCCESS,
  GET_MEMES_ERROR,
} from "../types";
import { Giphy } from "../../apis/Giphy";
import axios from "axios";

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

//   initial memes fns
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

// get memes from input values
export const getMemes = (name) => {
  return async (dispatch) => {
    dispatch(getInitialsMemes());
    try {
      const res = await axios.get(
        `https://api.giphy.com/v1/gifs/search?api_key=NGlqGXm6ZOPsH0J5AUhH5rgc792tBS01&q=${name}&limit=1`
      );
      const { data } = res.data;
      dispatch(getInitialsMemesSuccess(data));
    } catch (error) {
      dispatch(getInitialsMemesError());
      console.log(error);
    }
  };
};

// get memes from input values fns
const getInitialsMemes = () => ({
  type: GET_MEMES,
  payload: true,
});

const getInitialsMemesSuccess = (memes) => ({
  type: GET_MEMES_SUCCESS,
  payload: memes,
});

const getInitialsMemesError = () => ({
  type: GET_MEMES_ERROR,
  payload: true,
});
