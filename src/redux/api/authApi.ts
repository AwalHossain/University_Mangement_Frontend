import { baseApi } from "./baseApi";

const AUTH_URL = '/auth';
const authAapi = baseApi.injectEndpoints({
    endpoints: (build) => ({
        userLogin: build.mutation({
            query: (loginData) => {
                return {
                    url: `${AUTH_URL}/login`,
                    method: 'POST',
                    data: loginData,
                }
            },
            invalidatesTags: ['user'],
        }),
    }),
})

export const { useUserLoginMutation } = authAapi  