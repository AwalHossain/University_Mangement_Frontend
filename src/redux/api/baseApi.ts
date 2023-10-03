
// Need to use the React-specific entry point to import createApi
import { axiosBaseQuery } from '@/helpers/axios/axiosBaseQuery'
import { baseUrl } from '@/helpers/config/envConfig'
import { createApi } from '@reduxjs/toolkit/query/react'
import { tagTypes } from '../tag-types'

// Define a service using a base URL and expected endpoints
export const baseApi = createApi({
    reducerPath: 'api',
    baseQuery: axiosBaseQuery({ baseUrl: baseUrl() }),
    endpoints: () => ({

    }),
    tagTypes: [tagTypes.user, tagTypes.department, tagTypes.faculty, tagTypes.admin],
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints