import React from "react";
import { useLocation } from "react-router-dom";
import { Container, Input } from "./styles";
// redux action
import { getMemes } from "../../redux/actions/memesActions";
import { useDispatch } from "react-redux";

const InputChannels = () => {
  // use dispatch
  const dispatch = useDispatch();
  // actual location
  const location = useLocation();
  // get actual route
  let { pathname } = location;
  // meme name
  let memeName = ''
  // change input fn
  const handleChange = (e) => {
    if (pathname === "/memes") {
      return memeName = e
    }
  };
  // on submit 
  const handleSubmit = (e) => {
    e.preventDefault()
    let meme = memeName
    dispatch(getMemes(meme));
  }

  return (
    <Container>
      <form onSubmit={(e) => handleSubmit(e)}>
        <Input
          placeholder="Message"
          onChange={(e) => handleChange(e.target.value)}
        />
      </form>
    </Container>
  );
};

export default InputChannels;
