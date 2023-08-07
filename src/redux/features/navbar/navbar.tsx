// actions.js
import { createSlice } from '@reduxjs/toolkit';

const navbarSlice = createSlice({
    name: 'navbar',
    initialState: {
        isLoggedIn: false,
    },
    reducers: {
        setIsLoggedIn: (state, action) => {
            state.isLoggedIn = action.payload;
        },
    },
});

export const { setIsLoggedIn } = navbarSlice.actions;
export default navbarSlice.reducer;
