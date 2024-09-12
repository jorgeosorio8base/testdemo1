import { useQuery, useQueryClient } from '@tanstack/react-query';
import { useSession } from 'next-auth/react';
import { UseCases } from '../usecases';
import {
  QuerySearchCriterionArgs,
  SearchCriteriaEntity,
} from '@testdemo1/core';

/*
              Type: SearchCriteriaEntity

              
      
        

         ISearchCriteriaEntity {
            Id?: string;
CreatedAt?: string;
UpdatedAt?: string;

Name?: string;
Criteria?: Record<string, any>;
CreatedDate?: string;
LastModifiedDate?: string;
        }
    
      
            */

/*
            Type: QuerySearchCriteriaArgs
            undefined
          */

/**
 * Hook to fetch SearchCriteria from the server.
 *
 * @returns {UseQueryResult<SearchCriteriaEntity | null>}
 *
 * @example
 * const {data, isError, isLoading, isFetching, refetch} = useSearchCriteria({id: '1'});
 *
 * @param {QuerySearchCriterionArgs} variables - The query variables.
 */

export function useSearchCriteria(variables: QuerySearchCriterionArgs) {
  const { data: session } = useSession();
  return useQuery<SearchCriteriaEntity | null>({
    queryKey: ['SEARCHCRITERIA_QUERY'],
    queryFn: async () =>
      UseCases.SearchCriteria.getSearchCriteria({
        variables,
        token: session?.token?.idToken,
      }),
    enabled: !!session?.token?.idToken,
  });
}
