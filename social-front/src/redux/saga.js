import { all, call, delay, put, take, takeLatest } from "redux-saga/effects";
import { register, actionTypes } from "./actions";
import axios from "../common/axiosConfig";
import * as toastify from "../common/toastify";

function* sagaRegister(action) {
  const { username, email, password } = action.payload;
  const info = {
    username,
    email,
    password
  };
  try {
    const response = yield axios.post("/auth/register", info);
    console.log(response);
    if (response.status === 200) {
      <Redirect to="/" />;
      return response;
    }
  } catch (error) {
    toastify.toastifyError(error);
  }
}

function* rootSaga() {
  yield all([takeLatest(actionTypes.REGISTER, sagaRegister)]);
}

export default rootSaga;
