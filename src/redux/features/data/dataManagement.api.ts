import { baseApi } from "../../api/baseApi";

const dataManagementApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createBlog: builder.mutation({
      query: (data) => ({
        url: "/blogs/create-blog",
        method: "POST",
        body: data,
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
  }),
});

export const {
  useCreateBlogMutation,
  useAddCertificateMutation,
  useAddExperienceMutation,
} = dataManagementApi;
