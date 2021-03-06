import {
  all,
  call,
  put,
  takeEvery
} from "@redux-saga/core/effects";
import { profileTypes } from "./profileAction";
import axios from "../../common/axiosConfig";
import * as toastify from "../../common/toastify";
import config from "../../common/config.json";
import { getSingleFiles, getMultipleFiles } from "../../common/fileUpload";
import { singleFileUpload } from "../../common/fileUpload";
import Router from "next/router";

function* sagaImg(action) {
  let resImgAvatar: any;
  let resImgBackground: any;
  let idUser: any;

  if (action && action.query) {
    idUser = action.query.idUser;
  }

  const flag_check_idUser_exist = idUser
    ? idUser
    : localStorage.getItem(config.local_storage._ID);
  try {
    resImgAvatar = yield getSingleFiles(config.type_img.avatar, flag_check_idUser_exist);
    resImgBackground = yield getSingleFiles(
      config.type_img.background,
      flag_check_idUser_exist
    );

    if (resImgAvatar.length === 0) {
      resImgAvatar.push({
        filePath:
          "https://www.winhelponline.com/blog/wp-content/uploads/2017/12/user.png?ezimgfmt=rs:254x254/rscb2"
      });
    }

    if (resImgBackground.length === 0) {
      resImgBackground.push({
        filePath:
          "https://oswallpapers.com/wp-content/uploads/2020/04/warty-final-ubuntu.resized.png"
      });
    }
  } catch (error) {
    console.log(error);
  }
  yield put({
    type: profileTypes.SHOW_IMG,
    avatar: resImgAvatar[0].filePath,
    background: resImgBackground[0].filePath
  });
}

function* sagaInfo(action) {
  let idUser: any;

  if (action && action.query) {
    idUser = action.query.idUser;
  }

  const flag_check_idUser_exist = idUser
    ? idUser
    : localStorage.getItem(config.local_storage._ID);
  if (localStorage.getItem(config.local_storage._ID) != undefined) {
    let response: any;
    try {
      response = yield call(() => axios.get(`/users/${flag_check_idUser_exist}`));
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

function* sagaInfoRoot() {
  if (localStorage.getItem(config.local_storage._ID) != undefined) {
    let response;
    let resImgAvatar;
    try {
      response = yield call(() =>
        axios.get(`/users/${localStorage.getItem(config.local_storage._ID)}`)
      );
      resImgAvatar = yield getSingleFiles(
        config.type_img.avatar,
        localStorage.getItem(config.local_storage._ID)
      );
      if (resImgAvatar.length === 0) {
        resImgAvatar.push({
          filePath:
            "https://www.winhelponline.com/blog/wp-content/uploads/2017/12/user.png?ezimgfmt=rs:254x254/rscb2"
        });
      }
      if (response.status >= 200 && response.status < 300) {
        yield put({
          type: profileTypes.SHOW_INFO_ROOT,
          payload: {
            userName: response.data ? response.data.username : "manhnt",
            resImgAvatar: resImgAvatar[0].filePath
          }
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

function* sagaGetListAvatar(action) {
  let listImgAvatar;
  let idUser: any;

  if (action && action.query) {
    idUser = action.query.idUser;
  }

  const flag_check_idUser_exist = idUser
    ? idUser
    : localStorage.getItem(config.local_storage._ID);
  try {
    listImgAvatar = yield getMultipleFiles(
      config.type_img.avatar,
      flag_check_idUser_exist
    );
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

function* sagaGetListBackground(action) {
  let listImgBackground;
  let idUser: any;

  if (action && action.query) {
    idUser = action.query.idUser;
  }

  const flag_check_idUser_exist = idUser
    ? idUser
    : localStorage.getItem(config.local_storage._ID);
  try {
    listImgBackground = yield getMultipleFiles(
      config.type_img.background,
      flag_check_idUser_exist
    );
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
      axios.patch(
        `/users/${localStorage.getItem(config.local_storage._ID)}/update-info`,
        info
      )
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

function* sagaSearchFriends(action) {
  yield Router.push("/search/friends");
  const userName = action.query;
  if (!userName) {
    return;
  }

  let resultSearchFriends;
  try {
    resultSearchFriends = yield call(() =>
      axios.get("/search/friends", {
        params: userName
      })
    );
    if (resultSearchFriends.status >= 200 && resultSearchFriends.status < 300) {
      yield put({
        type: profileTypes.FIND_FRIENDS,
        data: resultSearchFriends.data,
        textSearch: userName
      });
    } else {
      console.log(resultSearchFriends);
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
    takeEvery(profileTypes.FIND_FRIENDS, sagaSearchFriends),
    takeEvery(profileTypes.GET_INFO_ROOT, sagaInfoRoot)
  ]);
}

export default profileSaga;
