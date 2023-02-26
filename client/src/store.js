import { combineReducers, configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";
import authReducer from "./redux/UserAuthentication";
import patientReducer from "./redux/Patient";

const persistConfig = {
  key: "root",
  whitelist: ["auth"],
  storage,
};

const rootReducer = combineReducers({
  auth: authReducer,
  patient: patientReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      immutableCheck: false,
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);
