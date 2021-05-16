import { all, call, delay, put, take, takeLatest } from "redux-saga/effects";
import { actionTypes } from "./actions";
import axios from "../common/axiosConfig";
import * as toastify from "../common/toastify";
import { useDispatch } from 'react-redux';

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
      axios.defaults.headers.common["Authorization"] = `Bearer ${response.data.token}`;
      localStorage.setItem("MAN-Social-Token", response.data.token);
      // yield put({
      //   type: actionTypes.TO_LOGIN
      // });
      return response;
    } else {
      console.log(response);
    }
  } catch (error) {
    toastify.toastifyError(error.response.data.message ? error.response.data.message : error.response.data);
  }
}

function* rootSaga() {
  yield all([
    takeLatest(actionTypes.REGISTER, sagaRegister),
    takeLatest(actionTypes.VERIFY, sagaVerify),
    takeLatest(actionTypes.LOGIN, sagaLogin)
  ]);
}

export default rootSaga;
