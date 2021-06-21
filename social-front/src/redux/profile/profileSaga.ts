import {
  all,
  call,
  delay,
  put,
  take,
  takeEvery,
  takeLatest
} from "@redux-saga/core/effects";
import { profileTypes } from "./profileAction";
import axios from "../../common/axiosConfig";
import * as toastify from "../../common/toastify";
import config from "../../common/config.json";
import { getSingleFiles, getMultipleFiles } from "../../common/fileUpload";
import { singleFileUpload } from "../../common/fileUpload";

function* sagaImg() {
  let resImgAvatar: any;
  let resImgBackground: any;
  try {
    resImgAvatar = yield getSingleFiles(
      config.type_img.avatar,
      localStorage.getItem(config.local_storage._ID)
    );
    resImgBackground = yield getSingleFiles(
      config.type_img.background,
      localStorage.getItem(config.local_storage._ID)
    );
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
  if (localStorage.getItem(config.local_storage._ID) != undefined) {
    let response;
    try {
      response = yield call(() =>
        axios.get(`/users/${localStorage.getItem(config.local_storage._ID)}`)
      );
      if (response.status >= 200 && response.status < 300) {
        yield put({
          type: profileTypes.SHOW_INFO,
          payload: response.data
        });
      } else {
        console.log(response);
      }
    } catch (error) {
      toastify.toastifyError(
        error.response.data.message ? error.response.data.message : error.response.data
      );
    }
  }
}

function* sagaUploadAvatar(action) {
  let response;
  let formData = new FormData();
  try {
    formData.append("type", config.type_img.avatar);
    formData.append("file_id", localStorage.getItem(config.local_storage._ID));
    formData.append("file", action.payload);
    response = yield singleFileUpload(formData);
    if (200 <= response.status && response.status < 300) {
      toastify.toastifySuccess(response.data.message);
      yield put({
        type: profileTypes.CHANGE_AVATAR,
        payload: response.data.path
      });
    } else {
      toastify.toastifyError(
        response.response.data.message
          ? response.response.data.message
          : response.response.data
      );
    }
  } catch (error) {
    toastify.toastifyError(
      error.response.data.message ? error.response.data.message : error.response.data
    );
  }
}

function* sagaUploadBackground(action) {
  let response;
  let formData = new FormData();
  try {
    formData.append("type", config.type_img.background);
    formData.append("file_id", localStorage.getItem(config.local_storage._ID));
    formData.append("file", action.payload);
    response = yield singleFileUpload(formData);
    if (200 <= response.status && response.status < 300) {
      toastify.toastifySuccess(response.data.message);
      yield put({
        type: profileTypes.CHANGE_BACKGROUND,
        payload: response.data.path
      });
    } else {
      toastify.toastifyError(
        response.response.data.message
          ? response.response.data.message
          : response.response.data
      );
    }
  } catch (error) {
    toastify.toastifyError(
      error.response.data.message ? error.response.data.message : error.response.data
    );
  }
}

function* sagaGetListAvatar() {
  let listImgAvatar;
  try {
    listImgAvatar = yield getMultipleFiles(config.type_img.avatar, localStorage.getItem(config.local_storage._ID));
    yield put({
      type: profileTypes.SHOW_LISt_AVATAR,
      payload: listImgAvatar
    });
  } catch (error) {
    toastify.toastifyError(
      error.response.data.message ? error.response.data.message : error.response.data
    );
  }
}

function* sagaGetListBackground() {
  let listImgBackground;
  try {
    listImgBackground = yield getMultipleFiles(config.type_img.background, localStorage.getItem(config.local_storage._ID));
    yield put({
      type: profileTypes.SHOW_LIST_BACKGROUND,
      payload: listImgBackground
    });
  } catch (error) {
    toastify.toastifyError(
      error.response.data.message ? error.response.data.message : error.response.data
    );
  }
}

function* sagaUpdateProfile(action) {
  const info = action.payload;
  let response;
  try {
	  response = yield call(() =>
      axios.patch(`/users/${localStorage.getItem(config.local_storage._ID)}/update-info`, info)
	  );
	  if (response.status >= 200 && response.status < 300) {
      toastify.toastifySuccess("Update profile successfull.");
      yield put({
        type: profileTypes.GET_INFO
		  });
	  } else {
      console.log(response);
	  }
  } catch (error) {
	  toastify.toastifyError(
      error.response.data.message ? error.response.data.message : error.response.data
	  );
  }
}

function* profileSaga() {
  yield all([
    takeEvery(profileTypes.GET_IMG, sagaImg),
    takeEvery(profileTypes.GET_INFO, sagaInfo),
    takeEvery(profileTypes.UPLOAD_AVATAR, sagaUploadAvatar),
    takeEvery(profileTypes.UPLOAD_BACKGROUND, sagaUploadBackground),
    takeEvery(profileTypes.GET_LISt_AVATAR, sagaGetListAvatar),
    takeEvery(profileTypes.GET_LIST_BACKGROUND, sagaGetListBackground),
    takeEvery(profileTypes.UPDATE_PROFILE, sagaUpdateProfile),
  ]);
}

export default profileSaga;
