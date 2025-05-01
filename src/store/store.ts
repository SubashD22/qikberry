import { configureStore } from '@reduxjs/toolkit'
import userReducer from './slices/user.slice'
import postReducer from './slices/post.slice'
import { postApi } from './services/post.service'
import { photosApi } from './services/photos.service'
export const store = configureStore({
  reducer: {
    user: userReducer,
    post: postReducer,
    [postApi.reducerPath]: postApi.reducer,
    [photosApi.reducerPath]: photosApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(postApi.middleware, photosApi.middleware),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch