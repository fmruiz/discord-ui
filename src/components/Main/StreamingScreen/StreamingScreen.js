import React from "react";
import {
  StreamingContainer,
  StreamingScreenContainer,
  UsersConectedContainer,
  UsersConectedImg,
  UsersConectedImgContainer,
  UsersConectedName,
  VideoStreaming,
} from "./styles";
import Elon from "../../../assets/elon.jpg";
import Bezos from "../../../assets/bezos.jpg";
import Mark from "../../../assets/mark.jpg";
import User from "../../../assets/letraf.jpg";
import ElonVideo from "../../../assets/video/elon.mp4";
import { StreamingHeader } from "./StreamingHeader";
import { StreamingFooter } from "./StreamingFooter";

export const StreamingScreen = () => {
  const streamingUsers = [
    { name: "ElonX", img: Elon, color: "dark" },
    { name: "Mr.Jeff", img: Bezos, color: "brown" },
    { name: "markZ", img: Mark, color: "blue" },
  ];

  return (
    <StreamingContainer>
      <StreamingHeader />
      <StreamingScreenContainer>
        <VideoStreaming width={1275} autoPlay muted>
          <source src={ElonVideo} type="video/mp4" />
        </VideoStreaming>
        <UsersConectedContainer>
          {streamingUsers.map((s, i) => (
            <UsersConectedImgContainer className={s.color} key={i}>
              <UsersConectedImg src={s.img} />
              <UsersConectedName className="user__name">
                {s.name}
              </UsersConectedName>
            </UsersConectedImgContainer>
          ))}
        </UsersConectedContainer>
      </StreamingScreenContainer>
      <StreamingFooter user={User} />
    </StreamingContainer>
  );
};
