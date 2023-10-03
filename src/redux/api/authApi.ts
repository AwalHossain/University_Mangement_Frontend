import { tagTypes } from "../tag-types";
import { baseApi } from "./baseApi";

const AUTH_URL = '/auth';
const userLogin = baseApi.injectEndpoints({
    endpoints: (build) => ({
        userLogin: build.mutation({
            query: (loginData) => {
                return {
                    url: `${AUTH_URL}/login`,
                    method: 'POST',
                    data: loginData,
                }
            },
            invalidatesTags: [tagTypes.user],
        }),
    }),
})

export const { useUserLoginMutation } = userLogin  