import { Fragment } from "react";
import { ChatMain } from "../Main/ChatMain";
import { Header } from "../Main/Header";

const Memes = () => (
  <Fragment>
    <Header title="memes" />
    <ChatMain isMemes/>
  </Fragment>
);

export default Memes;
