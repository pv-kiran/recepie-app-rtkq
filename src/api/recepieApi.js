import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const recepieApi = createApi({
  reducerPath: "recepieApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.spoonacular.com/recipes",
  }),
  endpoints: (builder) => ({
    getRecepies: builder.query({
      query: () =>
        `/random?apiKey=2704a568e40946f88e2ecade0d3a6b26&number=10&tags=vegetarian`,
    }),
  }),
});

export const { useGetRecepiesQuery } = recepieApi;
