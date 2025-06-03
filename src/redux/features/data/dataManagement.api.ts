import { TResponseRedux } from "../../../types";
import { TBlog, TCertificate, TExperience, TProject } from "../../../types/data.type";
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
      transformResponse: (response: TResponseRedux<TBlog[]>) => {
        return {
          data: response?.data,
          meta: response?.meta,
        };
      },
    }),
    getResume: builder.query({
      query: () => ({
        url: "/resume",
        method: "GET",
      }),
    }),
    getCertificates: builder.query({
      query: () => ({
        url: "/courses",
        method: "GET",
      }),
      transformResponse: (response: TResponseRedux<TCertificate[]>) => {
        return {
          data: response?.data,
          meta: response?.meta,
        };
      },
    }),
    getProjects: builder.query({
      query: () => ({
        url: "/projects",
        method: "GET",
      }),
      transformResponse: (response: TResponseRedux<TProject[]>) => {
        return {
          data: response?.data,
          meta: response?.meta,
        };
      },
    }),
    getSkills: builder.query({
      query: () => ({
        url: "/skills",
        method: "GET",
      }),
    }),
    getExperiences: builder.query({
      query: () => ({
        url: "/experiences",
        method: "GET",
      }),
      transformResponse: (response: TResponseRedux<TExperience[]>) => {
        return {
          data: response?.data,
          meta: response?.meta,
        };
      },
    }),
  }),
});

export const {
  useGetBlogQuery,
  useGetResumeQuery,
  useGetProfileDataQuery,
  useGetSkillsQuery,
  useGetProjectsQuery,
  useGetCertificatesQuery,
  useGetExperiencesQuery,
} = dataManagementApi;
