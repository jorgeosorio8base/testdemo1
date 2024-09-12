import { useQuery } from '@tanstack/react-query';
import { useSession } from 'next-auth/react';
import { UseCases } from '../usecases';
import { QueryPermitListArgs, PermitEntity } from '@testdemo1/core';

/*
              Type: PermitEntity

              
      
        

         IPermitEntity {
            Id?: string;
CreatedAt?: string;
UpdatedAt?: string;

PermitNumber?: string;
IssueDate?: string;
ExpirationDate?: string;
Description?: string;
        }
    
      
            */

/** 
             * Type: QueryPermitListArgs
            undefined
             */

/**
 * Hook to fetch list of Permit from the server.
 *
 * @returns {UseQueryResult<{items: PermitEntity[], count: number} | null>}
 *
 * @example
 * const {data, isError, isLoading, isFetching, refetch} = usePermitList({first: 10});
 *
 * @param {QueryPermitListArgs} variables - The query variables.
 */

export function usePermitList(variables?: QueryPermitListArgs) {
  const { data: session } = useSession();
  return useQuery<{
    items: PermitEntity[];
    count: number;
  } | null>({
    queryKey: ['PERMIT_LIST_QUERY'],
    queryFn: async () =>
      UseCases.Permit.getPermitList({
        variables: variables || {},
        token: session?.token?.idToken,
      }),
    enabled: !!session?.token?.idToken,
  });
}
