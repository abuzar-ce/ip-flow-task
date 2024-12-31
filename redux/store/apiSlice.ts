import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define the structure of API response
interface IP {
  id: string;
  ip: string;
  status: string;
  number_of_ports: string;
  owner: string;
  country: string;
  fraud_score: string;
}

export const apiSlice = createApi({
  reducerPath: "api", // A unique key for the API slice
  baseQuery: fetchBaseQuery({
    baseUrl: "https://stagging.domain.attackinsights.dev/",
  }),
  endpoints: (builder) => ({
    // Define the query to fetch all IPs
    getAllIPs: builder.query<IP[], void>({
      query: () => "all-ips", // query endpoint
    }),
  }),
});

export const { useGetAllIPsQuery } = apiSlice;
