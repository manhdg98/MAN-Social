import { combineReducers } from "redux";
import reducer from "./auth/reducer";
import profileReducer from "./profile/profileReducer";

export default combineReducers({
  reducer,
  profileReducer
});
