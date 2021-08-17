import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import userSlice from './userSlice';
import notificationSlice from './notificationSlice';
import navigationSlice from './navigationSlice';

const persistConfig = {
  key: 'root',
  version: 1,
  storage,
  blacklist: ['notificationState', 'navigationState']
};
const rootReducer = combineReducers({
  userState: userSlice,
  notificationState: notificationSlice,
  navigationState: navigationSlice
});

export default persistReducer(persistConfig, rootReducer);
