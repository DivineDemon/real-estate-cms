import { createSlice } from "@reduxjs/toolkit";

const initialState: GlobalStateProps = {
  sites: [],
  areas: [],
  blogs: [],
  projects: [],
  developers: [],
};

const globalSlice = createSlice({
  name: "global",
  initialState,
  reducers: {
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

export const { setSites, setAreas, setBlogs, setProjects, setDevelopers } =
  globalSlice.actions;
export default globalSlice.reducer;
