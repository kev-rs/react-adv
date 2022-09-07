import { configureStore, ThunkAction, AnyAction } from '@reduxjs/toolkit';
import authSlice from '../features/auth/authSlice';
export { Provider } from 'react-redux'

export const store = configureStore({
    reducer: {
        auth: authSlice,
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;
export type AppThunk<ReturnType=void> = ThunkAction<ReturnType,RootState,unknown,AnyAction>;

