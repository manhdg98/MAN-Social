import { all, call, delay, put, take, takeLatest } from "redux-saga/effects";
import { register } from "./actions";
import axios  from '../common/axiosConfig'

// function* runClockSaga() {
//   yield take(actionTypes.START_CLOCK);
//   while (true) {
//     yield put(tickClock(false));
//     yield delay(1000);
//   }
// }

// function* loadDataSaga() {
//   try {
//     const res = yield fetch("https://jsonplaceholder.typicode.com/users");
//     const data = yield res.json();
//     yield put(loadDataSuccess(data));
//   } catch (err) {
//     yield put(failure(err));
//   }
// }

// function* login() {
//   try {
//     axios.post('/users', {
//       firstName: 'First name',
//       lastName: 'Last name'
//     })
//   } catch (error) {
    
//   }
// }

function* sagaRegister(info) {
  console.log(info);
  try {
    const res = yield axios.post('/auth/register', info);
    yield put(loadDataSuccess(data));
    console.log(res)
  } catch (error) {
    console.log(error);
  }
}

function* rootSaga() {
  yield all([
    register()
  ]);
}

export default rootSaga;