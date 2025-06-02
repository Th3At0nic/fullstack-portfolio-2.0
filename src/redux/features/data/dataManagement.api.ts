import { baseApi } from "../../api/baseApi";

const dataManagementApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getProfileData: builder.query({
      query: () => ({
        url: "/user/profile-data",
        method: "GET",
      }),
    }),
    getBlog: builder.query({
      query: () => ({
        url: "/blogs",
        method: "GET",
      }),
    }),
    getResume: builder.query({
      query: () => ({
        url: "/resume",
        method: "GET",
      }),
    }),
    addCertificate: builder.mutation({
      query: (data) => ({
        url: "/courses/add-certificate",
        method: "POST",
        body: data,
      }),
    }),
    addExperience: builder.mutation({
      query: (data) => ({
        url: "/experiences/add-experience",
        method: "POST",
        body: data,
      }),
    }),
    addProject: builder.mutation({
      query: (data) => ({
        url: "/projects/add-project",
        method: "POST",
        body: data,
      }),
    }),
    addResume: builder.mutation({
      query: (data) => ({
        url: "/resume/add-resume",
        method: "POST",
        body: data,
      }),
    }),
    addSkill: builder.mutation({
      query: (data) => ({
        url: "/skills/add-skill",
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export const { useGetBlogQuery, useGetResumeQuery, useGetProfileDataQuery } =
  dataManagementApi;
