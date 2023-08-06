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
        postCreateUser: builder.mutation({
            query: (data) => ({
                url: `users/signup`,
                method: 'POST',
                body: data
            }),

            // transformResponse: (response) => {
            //     // Define the type of the response
            //     type errorMsg = {
            //         path: string;
            //         message: string;
            //     };
            //     type MyResponse = {
            //         error: {
            //             status: number;
            //             data: {
            //                 success: boolean;
            //                 message: string;
            //                 errorMessages: errorMsg[];
            //             };
            //         };
            //     };

            //     // Cast the response to the defined type
            //     const responseData = response as MyResponse;

            //     // Check if the response has a success property set to false
            //     if (responseData?.error?.data?.success === false) {
            //         // Throw an error to indicate a custom error condition
            //         throw new Error(responseData?.error?.data?.message);
            //     }

            //     return responseData;
            // },
        }),
    }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetBooksQuery, useGetSingleBookQuery, usePostCreateUserMutation } = api;

// api.js
// export const api = createApi({
//     baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:8000/api' }),
//     endpoints: (builder) => ({
//       signUp: builder.mutation({
//         query: (userData) => ({
//           url: '/signup',
//           method: 'POST',
//           body: userData,
//         }),
//         // Add validStatus property to consider 200 as an error
//         validStatus: [200],
//         onError: (error, { data }) => {
//           // Custom error handling logic
//           console.error('Error occurred:', error);
//           console.log('Error response data:', data);
//         },
//       }),
//       // Add other endpoints as needed
//     }),
//   });
