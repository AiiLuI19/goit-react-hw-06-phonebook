import { combineReducers } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { reducer, filter } from './contacts/reduser';

const rootReducerConfig = {
  key: 'root',
  storage,
};

const root = combineReducers({
  contacts: reducer,
  filter: filter,
});
const persistedReducer = persistReducer(rootReducerConfig, root);

export default persistedReducer;
