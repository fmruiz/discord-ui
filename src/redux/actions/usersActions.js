import { GET_USERS, GET_USERS_SUCCESS, GET_USERS_FAILED } from "../types/index";
import backend from "../../apis/backend";

export function getUsersAction() {
  return async (dispatch) => {
    dispatch(getUsers());
    try {
      const res = await backend.get("/api/users");
      dispatch(getUsersSuccess(res.data));
    } catch (error) {
      console.log(error);
      dispatch(getUsersFailed());
    }
  };
}

const getUsers = () => ({
  type: GET_USERS,
  payload: true,
});

const getUsersSuccess = (users) => ({
  type: GET_USERS_SUCCESS,
  payload: users,
});

const getUsersFailed = () => ({
  type: GET_USERS_FAILED,
  payload: true,
});
