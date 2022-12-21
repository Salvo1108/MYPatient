import { configureStore } from '@reduxjs/toolkit';
import authReducer from './components/redux/UserAuthentication';
import patientReducer from './components/redux/Patient';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    patient: patientReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({serializableCheck: false}),
});
