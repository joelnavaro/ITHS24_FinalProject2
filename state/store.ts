import { combineReducers, configureStore } from '@reduxjs/toolkit'
import userReducer from './user/userSlice'

import AsyncStorage from '@react-native-async-storage/async-storage'
import {
  persistReducer,
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'

const combinedRootReducer = combineReducers({
  user: userReducer,
})
const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['user'],
}
const persistedUserReducer = persistReducer(persistConfig, combinedRootReducer)

export const store = configureStore({
  reducer: persistedUserReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
})

export const persistor = persistStore(store)

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>

// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
