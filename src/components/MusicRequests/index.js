import { Fragment } from "react";
import { ChatMain } from "../Main/ChatMain";
import { Header } from "../Main/Header";

const MusicRequests = () => (
  <Fragment>
    <Header title="music-requests" />
    <ChatMain isMusic />
  </Fragment>
);

export default MusicRequests;
