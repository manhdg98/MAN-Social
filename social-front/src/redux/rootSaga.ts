import { all, fork } from "@redux-saga/core/effects";
import authSaga from "./auth/saga";
import profileSaga from "./profile/profileSaga";

export default function* rootSaga() {
  yield all([fork(authSaga), fork(profileSaga)]);
}
