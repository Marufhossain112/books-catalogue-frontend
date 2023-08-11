import { api } from "../api/apiSlice";

const reviewApi = api.injectEndpoints({
    endpoints: (builder) => ({
        postCreateReview: builder.mutation({
            query: (data) => ({
                url: `review-api/add-review`,
                method: 'POST',
                body: data
            }),
            invalidatesTags: ['reviews']
        }),
    })
});

export const { usePostCreateReviewMutation } = reviewApi;