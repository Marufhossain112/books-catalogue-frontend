// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// Define a service using a base URL and expected endpoints
export const api = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://books-zone-marufhossain112.vercel.app/api/v1/' }),
    tagTypes: ['reviews', 'books', 'removeBook'],
    endpoints: () => ({}),
});
export default api;


