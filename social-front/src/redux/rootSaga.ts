import { all, fork } from '@redux-saga/core/effects';
import authSaga from './auth/saga';

export default function* rootSaga() {
    yield all([
        fork(authSaga)
    ]);
}
