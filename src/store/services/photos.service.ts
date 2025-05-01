import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const photosApi = createApi({
  reducerPath: 'photosApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://jsonplaceholder.typicode.com/photos' }),
  endpoints: (builder) => ({
    getPhotos: builder.query({ query: (id) => `?albumId=${id}` }),
    getAllPhotos: builder.query({ query: () => '/' }),
  }),
})

export const { useGetPhotosQuery, useGetAllPhotosQuery } = photosApi