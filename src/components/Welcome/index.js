import { Fragment } from "react";
import { ChatMain } from "../Main/ChatMain";
import { Header } from "../Main/Header";

const Welcome = () => (
  <Fragment>
    <Header title="welcome" />
    <ChatMain isWelcome />
  </Fragment>
);

export default Welcome;
