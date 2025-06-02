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
    getProjects: builder.query({
      query: () => ({
        url: "/projects",
        method: "GET",
      }),
    }),
    addResume: builder.mutation({
      query: (data) => ({
        url: "/resume/add-resume",
        method: "POST",
        body: data,
      }),
    }),
    getSkills: builder.query({
      query: () => ({
        url: "/skills",
        method: "GET",
      }),
    }),
  }),
});

export const {
  useGetBlogQuery,
  useGetResumeQuery,
  useGetProfileDataQuery,
  useGetSkillsQuery,
  useGetProjectsQuery,
} = dataManagementApi;
