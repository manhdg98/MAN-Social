import { all, call, delay, put, take, takeEvery, takeLatest } from '@redux-saga/core/effects';
import { profileTypes } from "./profileAction";
import axios from "../../common/axiosConfig";
import * as toastify from "../../common/toastify";
import Router from "next/router";
import config from "../../common/config.json";
import { getSingleFiles } from '../../common/fileUpload';

function* sagaImg() {
    let resImgAvatar: any;
    let resImgBackground: any;
    try {
        resImgAvatar = yield getSingleFiles(config.type_img.avatar, localStorage.getItem(config.local_storage._ID));
        resImgBackground = yield getSingleFiles(config.type_img.background, localStorage.getItem(config.local_storage._ID));
    } catch (error) {
        console.log(error);
    }
    yield put({
        type: profileTypes.SHOW_IMG,
        avatar: resImgAvatar[0].filePath,
        background: resImgBackground[0].filePath
    });
}

function* sagaInfo() {
  if(localStorage.getItem(config.local_storage._ID) != undefined) {
    let response;
    try {
      response = yield call(() => axios.get(`/users/${localStorage.getItem(config.local_storage._ID)}`));
      if (response.status >= 200 && response.status < 300) {
        yield put({
          type: profileTypes.SHOW_INFO,
          payload: response.data
        });
      } else {
        console.log(response);
      }
    } catch (error) {
      toastify.toastifyError(error.response.data.message ? error.response.data.message : error.response.data);
    }
  }
}

function* profileSaga() {
  yield all([
    takeEvery(profileTypes.GET_IMG, sagaImg),
    takeEvery(profileTypes.GET_INFO, sagaInfo),
  ]);
}

export default profileSaga;
