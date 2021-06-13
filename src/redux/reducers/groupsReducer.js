import { ADD_GROUP, ADD_GROUP_SUCCESS, ADD_GROUP_FAILED } from "../types/index";

const initialState = {
  groups: [],
  error: false,
  loading: false,
};

export default function groupsReducer(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}
