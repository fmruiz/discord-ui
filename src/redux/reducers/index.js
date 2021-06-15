import { combineReducers } from "redux";
import usersReducer from "./usersReducer";
import groupsReducer from "./groupsReducer";
import channelsReducer from "./channelsReducer";

export default combineReducers({
  users: usersReducer,
  groups: groupsReducer,
  channels: channelsReducer,
});
