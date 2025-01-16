import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import Cookies from "js-cookie";

export const apiSlice = createApi({
  reducerPath: "api", // A unique key for the API slice
  baseQuery: fetchBaseQuery({
    baseUrl: "https://ip.attackinsights.ai/",
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
    deleteScan: builder.mutation({
      query: (data) => ({
        url: "delete-scans",
        method: "DELETE",
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
        url: `run-nuclei`,
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export const darkWebSlice = createApi({
  reducerPath: "darkWebApi", // A unique key for the API slice
  baseQuery: fetchBaseQuery({
    baseUrl: "https://dw.attackinsights.dev/",
    prepareHeaders: (headers) => {
      // Get JWT token from cookies
      const token = Cookies.get("JWT");

      // If token exists, add it to the Authorization header
      if (token) {
        headers.set("Authorization", `Bearer ${token}`);
      }

      return headers; // Return the modified headers
    },
  }),
  endpoints: (builder) => ({
    // Define the query to fetch dark web
    getDarkWeb: builder.mutation({
      query: (data) => ({
        url: `search/ip`,
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export const jwtSlice = createApi({
  reducerPath: "jwtAPI",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://domain.attackinsights.ai/",
  }),
  endpoints: (builder) => ({
    // Define the query to fetch jwt token
    getJWT: builder.mutation({
      query: (data) => ({
        url: `jwt`,
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
  useDeleteScanMutation,
} = apiSlice;
export const { useGetNuclieResultMutation } = nuclieSlice;
export const { useGetDarkWebMutation } = darkWebSlice;
export const { useGetJWTMutation } = jwtSlice;
