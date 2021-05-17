import { all, call, delay, put, take, takeLatest } from "redux-saga/effects";
import { actionTypes } from "./actions";
import axios from "../common/axiosConfig";
import * as toastify from "../common/toastify";
import { useDispatch } from 'react-redux';
import Router from "next/router";
import config from "../common/config.json";

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
      localStorage.setItem(config.local_storage.token, response.data.token);
      localStorage.setItem(config.local_storage._ID, response.data.id);
      Router.push("/profile");
    } else {
      console.log(response);
    }
  } catch (error) {
    toastify.toastifyError(error.response.data.message ? error.response.data.message : error.response.data);
  }
}

function* sagaInfo() {
  let response;
  try {
    response = yield call(() => axios.get(`/users/${localStorage.getItem(config.local_storage._ID)}`));
    if (response.status >= 200 && response.status < 300) {
      yield put({
        type: actionTypes.GET_INFO,
        payload: response.data
      });
    } else {
      console.log(response);
    }
  } catch (error) {
    toastify.toastifyError(error.response.data.message ? error.response.data.message : error.response.data);
  }
}

function* sagaLogout() {
  console.log('object');
  localStorage.removeItem(config.local_storage.token, response.data.token);
  localStorage.removeItem(config.local_storage._ID, response.data.id);
  yield put({
    type: actionTypes.TO_LOGIN
  });
}

function* rootSaga() {
  yield all([
    takeLatest(actionTypes.REGISTER, sagaRegister),
    takeLatest(actionTypes.VERIFY, sagaVerify),
    takeLatest(actionTypes.LOGIN, sagaLogin),
    takeLatest(actionTypes.INFO, sagaInfo),
    takeLatest(actionTypes.LOGOUT, sagaLogout),
  ]);
}

export default rootSaga;
