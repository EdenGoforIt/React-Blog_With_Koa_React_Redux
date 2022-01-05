import { combineReducers } from 'redux';
import auth, { authSaga } from './auth';
import user, { userSaga } from './user';
import loading from './loading';
import { all } from 'redux-saga/effects';

const rootReducer = combineReducers({
  auth,
  user,
  loading,
});
export function* rootSaga() {
  yield all(authSaga(), userSaga());
}

export default rootReducer;
