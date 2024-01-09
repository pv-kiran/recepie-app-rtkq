import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const recepieApi = createApi({
  reducerPath: "recepieApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.spoonacular.com/recipes",
  }),
  endpoints: (builder) => ({
    getRecepies: builder.query({
      query: () => `/random?apiKey=${import.meta.VITE_API_KEY}`,
    }),
    getVegRecepies: builder.query({
      query: () =>
        `/random?apiKey=${import.meta.VITE_API_KEY}&number=6&tags=vegetarian`,
    }),
    getSpanishRecepies: builder.query({
      query: () =>
        `/random?apiKey=${import.meta.VITE_API_KEY}&number=6&tags=Spanish`,
    }),
    getKetoRecepies: builder.query({
      query: () =>
        `/random?apiKey=${import.meta.VITE_API_KEY}&number=6&tags=ketogenic`,
    }),
    getBreakfastRecepies: builder.query({
      query: () =>
        `/random?apiKey=${import.meta.VITE_API_KEY}&number=6&tags=breakfast`,
    }),
    getRecepieById: builder.query({
      query: (id) => {
        return `${id}/information?apiKey=${import.meta.VITE_API_KEY}`;
      },
    }),
  }),
});

export const {
  useGetRecepiesQuery,
  useGetVegRecepiesQuery,
  useGetRecepieByIdQuery,
  useGetBreakfastRecepiesQuery,
  useGetSpanishRecepiesQuery,
  useGetKetoRecepiesQuery,
} = recepieApi;
