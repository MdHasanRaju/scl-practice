const { apiSlice } = require("features/Api/apiSlice");

const profileApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getProfile: builder.query({
      query: () => ({
        url: "/profile",
      }),
    }),
  }),
});

export const { useGetProfileQuery } = profileApi;
