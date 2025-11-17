import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "https://dummyjson.com" }),
  tagTypes: ["Cart", "Products"],
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => "/products",
      providesTags: ["Products"],
    }),
    updateCart: builder.mutation({
      query: (productId) => ({
        url: "/carts/1",
        method: "PUT",
        body: {
          merge: true,
          products: [{ id: productId, quantity: 1 }],
        },
      }),
      invalidatesTags: ['Cart']
    }),
  }),
});

export const {useGetProductsQuery, useUpdateCartMutation } = apiSlice