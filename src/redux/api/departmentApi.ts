import { IDepartment, IMeta } from "@/types";
import { tagTypes } from "../tag-types";
import { baseApi } from "./baseApi";

const DEPARTMENT_URL = "/management-departments";

export const departmentApi = baseApi.injectEndpoints({
    endpoints: (build) => ({
        departments: build.query({
            query: (arg) => ({
                url: DEPARTMENT_URL,
                method: "GET",
                params: arg,
            }),
            transformResponse: (response: IDepartment, meta: IMeta) => {
                return {
                    deparments: response,
                    meta
                }
            },
            providesTags: [tagTypes.department],
        }),
        // get single department by id
        department: build.query({
            query: (id) => (
                console.log("ieeed", id),
                {
                    url: `${DEPARTMENT_URL}/${id}`,
                    method: "GET",
                }),
            providesTags: [tagTypes.department],
        }),
        addDepartment: build.mutation({
            query: (data) => ({
                url: DEPARTMENT_URL,
                method: "POST",
                data,
            }),
            invalidatesTags: [tagTypes.department],
        }),
        updateDepartment: build.mutation({
            query: (data) => ({
                url: `${DEPARTMENT_URL}/${data.id}`,
                method: "PATCH",
                data: data.body,
            }),
            invalidatesTags: [tagTypes.department],
        }),
        deleteDepartment: build.mutation({
            query: (id) => ({
                url: `${DEPARTMENT_URL}/${id}`,
                method: "DELETE",
            }),
            invalidatesTags: [tagTypes.department],
        })
    }),
})

export const { useAddDepartmentMutation, useDepartmentQuery, useDepartmentsQuery, useUpdateDepartmentMutation, useDeleteDepartmentMutation } = departmentApi;  