import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define the structure of API response
interface IPData {
  ip: string;
  status: string | "Pending" | "Completed";
  owner: string;
  country: string;
  fraud_score?: string | number;
  number_of_ports?: number;
}

export const apiSlice = createApi({
  reducerPath: "api", // A unique key for the API slice
  baseQuery: fetchBaseQuery({
    baseUrl: "https://stagging.domain.attackinsights.dev/",
  }),
  endpoints: (builder) => ({
    // Define the query to fetch all IPs
    getAllIPs: builder.query<IPData[], void>({
      query: () => "all-ips", // query endpoint
    }),
    getScanResults: builder.query<any[], void>({
      query: (token) => `scan-result/${token}`, // query endpoint
    }),
  }),
});

export const { useGetAllIPsQuery, useGetScanResultsQuery } = apiSlice;
