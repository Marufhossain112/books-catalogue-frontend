// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// Define a service using a base URL and expected endpoints
export const api = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://books-zone-marufhossain112.vercel.app/api/v1/' }),
    endpoints: (builder) => ({
        getBooks: builder.query({
            query: () => `books/all-books`,
        }),
        getLatestBooks: builder.query({
            query: () => `books/latest-books`,
        }),
        getSingleBook: builder.query({
            query: (id) => `books/${id}`,
        }),
        postCreateUser: builder.mutation({
            query: (data) => ({
                url: `users/signup`,
                method: 'POST',
                body: data
            }),
        }),
        postLoginUser: builder.mutation({
            query: (data) => ({
                url: `auth/login`,
                method: 'POST',
                body: data
            }),
        }),
    }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetBooksQuery, useGetSingleBookQuery, usePostCreateUserMutation, usePostLoginUserMutation, useGetLatestBooksQuery } = api;


