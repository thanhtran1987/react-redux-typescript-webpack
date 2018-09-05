import { all, fork } from 'redux-saga/effects';

import showsSaga from './showsSaga';

export default function* rootSaga() {
  yield all([fork(showsSaga)]);
}
