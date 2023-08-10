// userSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    reviews: {},
};

const reviewSlice = createSlice({
    name: 'reviewSlice',
    initialState,
    reducers: {
        addReview(state, action) {
            state.reviews = action.payload;
            // state.allreviews = action.payload;
        },
    },
});

export const { addReview } = reviewSlice.actions;
export default reviewSlice.reducer;
