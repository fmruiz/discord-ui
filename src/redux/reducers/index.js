import { combineReducers } from "redux";
import usersReducer from "./usersReducer";
import groupsReducer from "./groupsReducer";
import textChannelsReducer from "./textChannelsReducer";

export default combineReducers({
  users: usersReducer,
  groups: groupsReducer,
  textChannels: textChannelsReducer,
});
