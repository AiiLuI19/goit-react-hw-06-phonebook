import { configureStore } from '@reduxjs/toolkit';
// import { reducer, filter } from './contacts/reduser';
import {
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import rootReducer from '../redux/rootReducer';

export const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleWar =>
    getDefaultMiddleWar({
      serializableCheck: {
        ignoreActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});
export const persistor = persistStore(store);
