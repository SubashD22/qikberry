import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const postApi = createApi({
  reducerPath: 'postApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://jsonplaceholder.typicode.com/posts' }),
  endpoints: (builder) => ({
    getPosts: builder.query({ query: (id) => `?userId=${id}` }),
  }),
})

export const { useGetPostsQuery } = postApi