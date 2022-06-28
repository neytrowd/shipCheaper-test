import { combineReducers, configureStore } from '@reduxjs/toolkit';
import companySlice from './reducers/companySlice';

const rootReducer = combineReducers({
   company: companySlice,
});

export const store = configureStore({
   reducer: rootReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
