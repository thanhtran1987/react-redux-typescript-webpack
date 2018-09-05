import { call, put } from 'redux-saga/effects';

import { loadShows, loadShowsSuccess, loadShowsError } from '../actions/showsAction';
import { ShowsActionTypes } from '../reducers/showsReducer';

function* showsSaga() {
  try {
    const resp = yield call(loadShows);
    if (resp.error) {
      yield put(loadShowsError(resp.error));
    } else {
      yield put(loadShowsSuccess(resp));
    }
  } catch (e) {
    yield put({ type: ShowsActionTypes.FETCH_ERROR, error: e.message });
  }
}
export default showsSaga;
