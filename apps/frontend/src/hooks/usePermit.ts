import { useQuery, useQueryClient } from '@tanstack/react-query';
import { useSession } from 'next-auth/react';
import { UseCases } from '../usecases';
import { QueryPermitArgs, PermitEntity } from '@testdemo1/core';

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

/*
            Type: QueryPermitArgs
            {
  id?: InputMaybe<Scalars['ID']['input']>
  withDeleted?: InputMaybe<Scalars['Boolean']['input']>
}




          */

/**
 * Hook to fetch Permit from the server.
 *
 * @returns {UseQueryResult<PermitEntity | null>}
 *
 * @example
 * const {data, isError, isLoading, isFetching, refetch} = usePermit({id: '1'});
 *
 * @param {QueryPermitArgs} variables - The query variables.
 */

export function usePermit(variables: QueryPermitArgs) {
  const { data: session } = useSession();
  return useQuery<PermitEntity | null>({
    queryKey: ['PERMIT_QUERY'],
    queryFn: async () =>
      UseCases.Permit.getPermit({
        variables,
        token: session?.token?.idToken,
      }),
    enabled: !!session?.token?.idToken,
  });
}
