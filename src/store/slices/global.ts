import { createSlice } from "@reduxjs/toolkit";

const initialState: GlobalStateProps = {
  sites: [],
  areas: [],
  blogs: [],
  user: null,
  projects: [],
  developers: [],
};

const globalSlice = createSlice({
  name: "global",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
    setSites: (state, action) => {
      state.sites = action.payload;
    },
    setAreas: (state, action) => {
      state.areas = action.payload;
    },
    setBlogs: (state, action) => {
      state.blogs = action.payload;
    },
    setProjects: (state, action) => {
      state.projects = action.payload;
    },
    setDevelopers: (state, action) => {
      state.developers = action.payload;
    },
  },
});

export const {
  setUser,
  setSites,
  setAreas,
  setBlogs,
  setProjects,
  setDevelopers,
} = globalSlice.actions;
export default globalSlice.reducer;
