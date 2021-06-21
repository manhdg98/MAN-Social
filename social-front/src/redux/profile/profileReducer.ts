import { profileTypes } from "./profileAction";
import { HYDRATE } from "next-redux-wrapper";
import { multipleFilesUpload } from "common/fileUpload";

const initialState = {
  imgAvatar: null,
  listAvatar: null,
  imgBackground: null,
  listBackground: null,
  info: {
    email: null,
    username: null,
    gender: null,
    about: null,
    phone: null,
    dob: null,
    education: null,
    job: null,
    company: null,
    location: null,
    state: null,
    country: null,
    createdAt: null
  }
};

function profileReducer(state = initialState, action) {
  switch (action.type) {
    case HYDRATE: {
      return {
        ...state,
        ...action.payload
      };
    }
    case profileTypes.SHOW_IMG:
      return {
        ...state,
        imgAvatar: action.avatar,
        imgBackground: action.background
      };
    case profileTypes.SHOW_INFO:
      return {
        ...state,
        info: action.payload
      };
    case profileTypes.CHANGE_AVATAR:
      return {
        ...state,
        imgAvatar: action.payload
      };
    case profileTypes.CHANGE_BACKGROUND:
      return {
        ...state,
        imgBackground: action.payload
      };
    case profileTypes.SHOW_LISt_AVATAR:
      return {
        ...state,
        listAvatar: action.payload
      };
    case profileTypes.SHOW_LIST_BACKGROUND:
      return {
        ...state,
        listBackground: action.payload
      };
    default:
      return { ...state };
  }
}

export default profileReducer;
