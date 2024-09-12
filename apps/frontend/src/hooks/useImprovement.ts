import { useQuery, useQueryClient } from '@tanstack/react-query';
import { useSession } from 'next-auth/react';
import { UseCases } from '../usecases';
import { QueryImprovementArgs, ImprovementEntity } from '@testdemo1/core';

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

/*
            Type: QueryImprovementArgs
            {
  id?: InputMaybe<Scalars['ID']['input']>
  withDeleted?: InputMaybe<Scalars['Boolean']['input']>
}




          */

/**
 * Hook to fetch Improvement from the server.
 *
 * @returns {UseQueryResult<ImprovementEntity | null>}
 *
 * @example
 * const {data, isError, isLoading, isFetching, refetch} = useImprovement({id: '1'});
 *
 * @param {QueryImprovementArgs} variables - The query variables.
 */

export function useImprovement(variables: QueryImprovementArgs) {
  const { data: session } = useSession();
  return useQuery<ImprovementEntity | null>({
    queryKey: ['IMPROVEMENT_QUERY'],
    queryFn: async () =>
      UseCases.Improvement.getImprovement({
        variables,
        token: session?.token?.idToken,
      }),
    enabled: !!session?.token?.idToken,
  });
}
