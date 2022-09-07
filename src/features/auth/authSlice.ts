import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { AuthState } from '../../interfaces/auth/auth.interfaces';

const initialState:AuthState = {
    online: false,
    user: null,
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        status: (state, action:PayloadAction<AuthState>) => {
            return {...state, online: action.payload.online}
        }
    }
})

export default authSlice.reducer;
export const { status } = authSlice.actions;