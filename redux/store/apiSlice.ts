import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "api", // A unique key for the API slice
  baseQuery: fetchBaseQuery({
    baseUrl: "https://stagging.domain.attackinsights.dev/",
  }),
  endpoints: (builder) => ({
    // Define the query to fetch all IPs
    getAllIPs: builder.query({
      query: (userId) => `all-ips?user_id=${userId}`, // query endpoint
    }),
    getScanResults: builder.query({
      query: (token) => `scan-result/${token}`, // query endpoint
    }),
  }),
});

export const { useGetAllIPsQuery, useGetScanResultsQuery } = apiSlice;
