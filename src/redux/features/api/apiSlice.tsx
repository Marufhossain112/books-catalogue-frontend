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
            query: () => `books/all-books?limit=10`,
        }),
        getSingleBook: builder.query({
            query: (id) => `books/${id}`,
        }),
        getSearchedBooksFromLatest: builder.query({
            query: (value) => `books/all-books?limit=10&searchTerm=${value}`,
        }),
        filterBooksByTitle: builder.query({
            query: (title) => `books/all-books?limit=10&title=${title}`,
        }),
        filterBooksByGenre: builder.query({
            query: (genre) => `books/all-books?limit=10&genre=${genre}`,
        }),
        filterBooksByPublicationYear: builder.query({
            query: (year) => `books/all-books?limit=10&publicationYear=${year}`,
        }),
        filterBooksByGenrePublicationYear: builder.query({
            query: ({ genre, publicationYear }) => `books/all-books?limit=10&genre=${encodeURIComponent(genre)}&publicationYear=${encodeURIComponent(publicationYear)}`,
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
export const { useGetBooksQuery, useGetSingleBookQuery, usePostCreateUserMutation, usePostLoginUserMutation, useGetLatestBooksQuery, useGetSearchedBooksFromLatestQuery, useFilterBooksByTitleQuery, useFilterBooksByGenreQuery, useFilterBooksByPublicationYearQuery, useFilterBooksByGenrePublicationYearQuery } = api;


