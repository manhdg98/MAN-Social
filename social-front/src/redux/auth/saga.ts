import { all, call, delay, put, takeEvery, takeLatest } from '@redux-saga/core/effects';
import { actionTypes } from "./actions";
import axios from "../../common/axiosConfig";
import * as toastify from "../../common/toastify";
import { useDispatch } from 'react-redux';
import Router from "next/router";
import config from "../../common/config.json";

function* sagaRegister(action) {
  const { username, email, password } = action.payload;
  const info = {
    username,
    email,
    password
  };
  let response;
  try {
    response = yield call(() => axios.post("/auth/register", info));
    if (response.status >= 200 && response.status < 300) {
      toastify.toastifySuccess('Create new account successful, please check your email.');
      yield put({
        type: actionTypes.TO_VERIFY,
        payload: info.email
      });
      return response;
    } else {
      console.log(response);
    }
  } catch (error) {
    toastify.toastifyError(error.response.data.message ? error.response.data.message : error.response.data);
  }
}

function* sagaVerify(action) {
  const { code, email } = action.payload;
  const info = {
    code,
    email
  };
  let response;
  try {
    response = yield call(() => axios.post("/auth/verify", info));
    if (response.status >= 200 && response.status < 300) {
      toastify.toastifySuccess('Verify successfull!');
      yield put({
        type: actionTypes.TO_LOGIN
      });
      return response;
    } else {
      console.log(response);
    }
  } catch (error) {
    toastify.toastifyError(error.response.data.message ? error.response.data.message : error.response.data);
  }
}

function* sagaLogin(action) {
  const { email, password } = action.payload;
  const info = {
    email,
    password
  };
  let response;
  try {
    response = yield call(() => axios.post("/auth/login", info));
    if (response.status >= 200 && response.status < 300) {
      toastify.toastifySuccess('Login successfull!');
      yield localStorage.setItem(config.local_storage.token, response.data.token);
      yield localStorage.setItem(config.local_storage._ID, response.data.id);
      yield axios.defaults.headers.common["Authorization"] = `Bearer ${localStorage.getItem(config.local_storage.token)}`;
      yield Router.push("/profile");
    } else {
      console.log(response);
    }
  } catch (error) {
    toastify.toastifyError(error.response.data.message ? error.response.data.message : error.response.data);
  }
}

function* sagaLogout() {
  yield localStorage.removeItem(config.local_storage.token);
  yield localStorage.removeItem(config.local_storage._ID);
  yield axios.defaults.headers.common["Authorization"] = '';
  yield Router.push("/");
}

function* sagaChangePassword(action){
  const { oldPassword, newPassword } = action.payload;
  const info = {
    oldPassword,
    newPassword
  };
  let response;
  try {
    response = yield call(() => axios.post(`/users/${localStorage.getItem(config.local_storage._ID)}/update-password`, info));
    if (response.status >= 200 && response.status < 300) {
      toastify.toastifySuccess('Change password successfull.');
    } else {
      console.log(response);
    }
  } catch (error) {
    toastify.toastifyError(error.response.data.message ? error.response.data.message : error.response.data);
  }
}

function* authSaga() {
  yield all([
    takeLatest(actionTypes.REGISTER, sagaRegister),
    takeLatest(actionTypes.VERIFY, sagaVerify),
    takeLatest(actionTypes.LOGIN, sagaLogin),
    takeLatest(actionTypes.LOGOUT, sagaLogout),
    takeLatest(actionTypes.CHANGEPASSWORD, sagaChangePassword),
  ]);
}

export default authSaga;
