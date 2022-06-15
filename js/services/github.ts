import {SearchRepoByKeywordsRes} from './github.types';
import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

export const githubApi = createApi({
  reducerPath: 'githubApi',
  baseQuery: fetchBaseQuery({baseUrl: 'https://api.github.com/'}),
  tagTypes: ['GithubSearch'],
  endpoints: builder => ({
    searchRepoByKeywords: builder.query<
      SearchRepoByKeywordsRes,
      {
        keywords: string;
        page?: number;
      }
    >({
      query: ({keywords, page = 1}) =>
        `search/repositories?q=${keywords}&page=${page}`,
      transformResponse: (response: any) => response.items,
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {useSearchRepoByKeywordsQuery} = githubApi;
