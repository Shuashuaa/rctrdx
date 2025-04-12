// store/index.ts (or store/store.ts)
import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './features/counter/counterSlice';

const store = configureStore({
  reducer: {
    counter: counterReducer,
    // Add other reducers as needed
  },
});

// Infer the RootState and AppDispatch types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;