'use client'
import { combineReducers, configureStore } from '@reduxjs/toolkit'
import authReducer from './user/userSlice'
import persistReducer from 'redux-persist/es/persistReducer'
import persistStore from 'redux-persist/es/persistStore'
import storage from 'redux-persist/lib/storage'
import { logger } from 'redux-logger'
const createNoopStorage = () => {
  return {
    getItem: () => Promise.resolve(null),
    setItem: () => Promise.resolve(),
    removeItem: () => Promise.resolve(),
  }
}

const storageEngine = typeof window !== 'undefined' ? storage : createNoopStorage();
export default storageEngine
// Configuration for persisting the Redux store
const persistConfig = {
  key: 'root',
  storage: storageEngine,
}

// Combine reducers and wrap it with persistReducer
const rootReducer = combineReducers({
  auth: authReducer,
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

// Function to create the store
export const makeStore = () => {
  return configureStore({
    reducer: persistedReducer, 
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: false,  // Disable serializable check due to persistence
      }).concat(logger)
  })
}

// Export the persistor based on the store created by makeStore
export const persistor = persistStore(makeStore())
