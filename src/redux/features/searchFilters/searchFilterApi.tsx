import { api } from "../api/apiSlice";

const searchFilterApi = api.injectEndpoints({
    endpoints: (builder) => ({
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
    })
});

export const { useGetSearchedBooksFromLatestQuery, useFilterBooksByGenreQuery, useFilterBooksByPublicationYearQuery, useFilterBooksByGenrePublicationYearQuery, useGetSearchedBooksFromAllQuery, useFilterBooksByGenreFromAllQuery, useFilterBooksByPublicationYearFromAllQuery, useFilterBooksByGenrePublicationYearFromAllQuery } = searchFilterApi;