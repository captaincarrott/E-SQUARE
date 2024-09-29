'use client'
import { combineReducers, configureStore } from '@reduxjs/toolkit'
import authReducer from './user/userSlice'
import productReducer from './products/productSlice'
import persistReducer from 'redux-persist/es/persistReducer'
import persistStore from 'redux-persist/es/persistStore'
import storage from 'redux-persist/lib/storage'
import sidebarSlice from './dashboard/sidebarSlice'
import cartSideReducer from './cart/sidebarSlice'

// Configuration for persisting the Redux store
const persistConfig = {
  key: 'root',
  storage: storage,
}

// Combine reducers and wrap it with persistReducer
const rootReducer = combineReducers({
  auth: authReducer,
  products: productReducer,
  sidebar: sidebarSlice,
  cartAside: cartSideReducer,
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

// Function to create the store
export const store = configureStore({
    reducer: persistedReducer, 
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: false,  // Disable serializable check due to persistence
      })
  })


// Export the persistor based on the store created by makeStore
export const persistor = persistStore(store)
