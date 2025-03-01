import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const baseApi = createApi({
    reducerPath: 'baseApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://boffo-backend.onrender.com/api/v1',
        prepareHeaders: (headers) => {
            // headers.set('Authorization', `Bearer YOUR_TOKEN`); // Optional: Add auth headers
            return headers;
        },
    }),
    endpoints: () => ({}), // Will be extended later
});

export default baseApi;
