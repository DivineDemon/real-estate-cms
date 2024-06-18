import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const api = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_BASE_API_URL }),
  endpoints: (build) => ({
    fetchData: build.query({
      query: (type) => ({
        url: `/${type}`,
        method: "GET",
        headers: {
          "fc-panel-key": import.meta.env.VITE_FC_PANEL_KEY,
        },
      }),
      transformResponse: (response: {
        success: number;
        error: string;
        data:
          | SiteProps[]
          | ProjectProps[]
          | AreaProps[]
          | DeveloperProps[]
          | BlogProps[];
      }) => response.data,
    }),
  }),
});

export const { useFetchDataQuery } = api;
export default api;
