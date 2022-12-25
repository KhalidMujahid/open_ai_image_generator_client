import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3000",
  }),
  tagTypes: ["Image"],
  endpoints: (builder) => ({
    createImage: builder.mutation({
      query: (data) => ({
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Image"],
    }),
  }),
});

export const { useCreateImageMutation } = api;
