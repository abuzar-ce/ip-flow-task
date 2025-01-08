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
      query: (taskId) => `scan-result/${taskId}`, // query endpoint
    }),
    getHistoryResults: builder.query({
      query: ({ user_id, ip }: any) => `user_ip_history/${user_id}/${ip}`,
    }),
    runNewScan: builder.mutation({
      query: (data) => ({
        url: "ip-scan-all",
        method: "POST",
        body: data,
      }),
    }),
  }),
});

//nuclie api
export const nuclieSlice = createApi({
  reducerPath: "nuclieApi", // A unique key for the API slice
  baseQuery: fetchBaseQuery({
    baseUrl: "https://vulnerability.attackinsights.dev/",
  }),
  endpoints: (builder) => ({
    // Define the query to fetch all IPs
    getNuclieResult: builder.mutation({
      query: (data) => ({
        url: `run-nuclie`,
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export const {
  useGetAllIPsQuery,
  useGetScanResultsQuery,
  useGetHistoryResultsQuery,
  useRunNewScanMutation,
} = apiSlice;
export const { useGetNuclieResultMutation } = nuclieSlice;
