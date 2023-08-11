// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// Define a service using a base URL and expected endpoints
export const api = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://books-zone-marufhossain112.vercel.app/api/v1/' }),
    tagTypes: ['reviews', 'books'],
    endpoints: (builder) => ({
        getBooks: builder.query({
            query: () => `books/all-books`,
        }),
        getLatestBooks: builder.query({
            query: () => `books/all-books?limit=10`,
        }),
        getSingleBook: builder.query({
            query: (id) => `books/${id}`,
            providesTags: ['books']

        }),
        getSingleBookReview: builder.query({
            query: (id) => `/review-api/reviews/${id}`,
            providesTags: ['reviews']
        }),
        getSearchedBooksFromLatest: builder.query({
            query: (value) => `books/all-books?limit=10&searchTerm=${value}`,
        }),
        getSearchedBooksFromAll: builder.query({
            query: (value) => `books/all-books?&searchTerm=${value}`,
        }),
        filterBooksByGenre: builder.query({
            query: (genre) => `books/all-books?limit=10&genre=${genre}`,
        }),
        filterBooksByGenreFromAll: builder.query({
            query: (genre) => `books/all-books?&genre=${genre}`,
        }),
        filterBooksByPublicationYear: builder.query({
            query: (year) => `books/all-books?limit=10&publicationYear=${year}`,
        }),
        filterBooksByPublicationYearFromAll: builder.query({
            query: (year) => `books/all-books?&publicationYear=${year}`,
        }),
        filterBooksByGenrePublicationYear: builder.query({
            query: ({ genre, publicationYear }) => `books/all-books?limit=10&genre=${encodeURIComponent(genre)}&publicationYear=${encodeURIComponent(publicationYear)}`,
        }),
        filterBooksByGenrePublicationYearFromAll: builder.query({
            query: ({ genre, publicationYear }) => `books/all-books?&genre=${encodeURIComponent(genre)}&publicationYear=${encodeURIComponent(publicationYear)}`,
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
        postCreateBook: builder.mutation({
            query: (data) => ({
                url: `books/new-book`,
                method: 'POST',
                body: data
            }),
        }),
        postCreateReview: builder.mutation({
            query: (data) => ({
                url: `review-api/add-review`,
                method: 'POST',
                body: data
            }),
            invalidatesTags: ['reviews']
        }),
        postEditBook: builder.mutation({
            query: ({ data, id }) => ({
                url: `books/${id}`,
                method: 'PATCH',
                body: data
            }),
            invalidatesTags: ['books']
        }),
    }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetBooksQuery, useGetSingleBookQuery, usePostCreateUserMutation, usePostLoginUserMutation, useGetLatestBooksQuery, useGetSearchedBooksFromLatestQuery, useFilterBooksByGenreQuery, useFilterBooksByPublicationYearQuery, useFilterBooksByGenrePublicationYearQuery, useGetSearchedBooksFromAllQuery, useFilterBooksByGenreFromAllQuery, useFilterBooksByPublicationYearFromAllQuery, useFilterBooksByGenrePublicationYearFromAllQuery, usePostCreateBookMutation, useGetSingleBookReviewQuery, usePostCreateReviewMutation, usePostEditBookMutation } = api;


