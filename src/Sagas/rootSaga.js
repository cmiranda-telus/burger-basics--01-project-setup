import { fork } from "redux-saga/effects";
import burgerBuilderSaga from "./burgerBuilderSaga";

export default function* rootSaga() {
  yield fork(burgerBuilderSaga);
}
