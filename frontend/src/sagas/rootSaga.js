import { put , takeLatest , takeEvery , all } from "redux-saga/effects"

function *login(){
  yield put({type: "LOGIN_SUCCESS" , data: true,})
}

function *logout(){
  yield put({type: "LOGIN_INITIATE" , data: false})
}

export default function* rootSaga(){
  yield all([
    login(),
    logout(),
  ])
}