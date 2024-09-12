import { useQuery } from '@tanstack/react-query';
import { useSession } from 'next-auth/react';
import { UseCases } from '../usecases';
import { QueryImprovementListArgs, ImprovementEntity } from '@testdemo1/core';

/*
              Type: ImprovementEntity

              
      
        

         IImprovementEntity {
            Id?: string;
CreatedAt?: string;
UpdatedAt?: string;


Description?: string;
DateCompleted?: string;
Cost?: number;
        }
    
      
            */

/** 
             * Type: QueryImprovementListArgs
            undefined
             */

/**
 * Hook to fetch list of Improvement from the server.
 *
 * @returns {UseQueryResult<{items: ImprovementEntity[], count: number} | null>}
 *
 * @example
 * const {data, isError, isLoading, isFetching, refetch} = useImprovementList({first: 10});
 *
 * @param {QueryImprovementListArgs} variables - The query variables.
 */

export function useImprovementList(variables?: QueryImprovementListArgs) {
  const { data: session } = useSession();
  return useQuery<{
    items: ImprovementEntity[];
    count: number;
  } | null>({
    queryKey: ['IMPROVEMENT_LIST_QUERY'],
    queryFn: async () =>
      UseCases.Improvement.getImprovementList({
        variables: variables || {},
        token: session?.token?.idToken,
      }),
    enabled: !!session?.token?.idToken,
  });
}
