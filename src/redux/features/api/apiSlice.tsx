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
        getSingleBook: builder.query({
            query: (id) => `books/${id}`,
        }),
    }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetBooksQuery, useGetSingleBookQuery } = api;