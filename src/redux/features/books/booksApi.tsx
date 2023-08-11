import { api } from "../api/apiSlice";

const booksApi = api.injectEndpoints({
    endpoints: (builder) => ({
        getBooks: builder.query({
            query: () => `books/all-books`,
        }),
        getLatestBooks: builder.query({
            query: () => `books/all-books?limit=10`,
        }),
        getSingleBook: builder.query({
            query: (id) => `books/${id}`,
            providesTags: ['books', 'removeBook']
        }),
        getSingleBookReview: builder.query({
            query: (id) => `/review-api/reviews/${id}`,
            providesTags: ['reviews']
        }), postCreateBook: builder.mutation({
            query: (data) => ({
                url: `books/new-book`,
                method: 'POST',
                body: data
            }),
        }), postEditBook: builder.mutation({
            query: ({ data, id }) => ({
                url: `books/${id}`,
                method: 'PATCH',
                body: data
            }),
            invalidatesTags: ['books']
        }),
        deleteSingleBook: builder.mutation({
            query: (id) => ({
                url: `books/${id}`,
                method: 'DELETE',
            }),
            invalidatesTags: ['removeBook']
        }),
    })
});

export const { usePostEditBookMutation, useDeleteSingleBookMutation, usePostCreateBookMutation, useGetSingleBookReviewQuery, useGetLatestBooksQuery, useGetBooksQuery, useGetSingleBookQuery} = booksApi;