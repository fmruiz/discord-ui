import { combineReducers } from "redux";
import usersReducer from "./usersReducer";
import groupsReducer from "./groupsReducer";
import textChannelsReducer from "./textChannelsReducer";
import voiceChannelsReducer from "./voiceChannelsReducer";
import logoReducer from "./logoReducer";
import adminInfoReducer from "./adminInfoReducer";
import channelImagesReducer from "./channelImagesReducer";
import musicPublicationsReducer from "./musicPublicationsReducer";
import voiceUsersReducer from "./voiceUsersReducer";
import streamingUsersReducer from "./streamingUsersReducer";
import MemesReducer from "./memesReducer";

export default combineReducers({
  users: usersReducer,
  groups: groupsReducer,
  textChannel: textChannelsReducer,
  voiceChannel: voiceChannelsReducer,
  logo: logoReducer,
  adminInfo: adminInfoReducer,
  channelImage: channelImagesReducer,
  musicPublication: musicPublicationsReducer,
  voiceUsers: voiceUsersReducer,
  streamingUsers: streamingUsersReducer,
  memes: MemesReducer
});
