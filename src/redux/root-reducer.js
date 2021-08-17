import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import userSlice from './userSlice';
import notificationSlice from './notificationSlice';

const persistConfig = {
  key: 'root',
  version: 1,
  storage,
  blacklist: ['notification', 'home']
};
const rootReducer = combineReducers({
  userState: userSlice,
  notificationState: notificationSlice
});

export default persistReducer(persistConfig, rootReducer);
