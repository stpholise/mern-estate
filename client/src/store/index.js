import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "@reduxjs/toolkit";
import userReducer from './UserSlice'
import { persistReducer, persistStore } from "redux-persist";
import sessionStorage from "redux-persist/lib/storage/session";


const rootReducer = combineReducers({ user: userReducer})

const persistConfig = {
    key: "root",
    sessionStorage,
    version: 1,
}

const persistedReducer  = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false
    })
}) 

export const persistor = persistStore(store)