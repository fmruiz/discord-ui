import React, { useEffect } from "react";
import {
  StreamingContainer,
  StreamingScreenContainer,
  UsersConectedContainer,
  UsersConectedImg,
  UsersConectedImgContainer,
  UsersConectedName,
  VideoStreaming,
} from "./styles";
import User from "../../../assets/letraf.jpg";
import ElonVideo from "../../../assets/video/elon.mp4";
import { StreamingHeader } from "./StreamingHeader";
import { StreamingFooter } from "./StreamingFooter";
import { useDispatch, useSelector } from "react-redux";
import { getStreamingUsersAction } from "../../../redux/actions/streamingUsersActions";

export const StreamingScreen = () => {
  // effect
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getStreamingUsersAction());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  // global state streaming users
  const { streamingUsers } = useSelector((state) => state.streamingUsers);

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
              <UsersConectedImg src={s.img.url} />
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
