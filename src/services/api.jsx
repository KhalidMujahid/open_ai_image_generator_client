import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://openai-image-generator-96zh.onrender.com",
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
