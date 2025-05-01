import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  posts: [],
  loading: false,
  error: null,
  currentPosts: [],
  currentPage: 1,
  totalPages: 1,
  totalPosts: 0,
}

const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {
    setPosts: (state, action) => {
      state.posts = action.payload
    },
    setCurrentPosts: (state, action) => {
      state.currentPosts = action.payload
    },
    setCurrentPage: (state, action) => {
      state.currentPage = action.payload
    },
    setTotalPages: (state, action) => {
      state.totalPages = action.payload
    },
    setTotalPosts: (state, action) => {
      state.totalPosts = action.payload
    },

  },
})

export const { setPosts, setCurrentPosts, setCurrentPage, setTotalPages, setTotalPosts } = postSlice.actions
export default postSlice.reducer
