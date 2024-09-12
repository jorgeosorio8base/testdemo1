import { useQuery, useQueryClient } from '@tanstack/react-query';
import { useSession } from 'next-auth/react';
import { UseCases } from '../usecases';
import {
  QuerySubscriptionTierArgs,
  SubscriptionTierEntity,
} from '@testdemo1/core';

/*
              Type: SubscriptionTierEntity

              
      
        

         ISubscriptionTierEntity {
            Id?: string;
CreatedAt?: string;
UpdatedAt?: string;
Name?: string;
Description?: string;
Price?: number;
Features?: Record<string, any>;
        }
    
      
            */

/*
            Type: QuerySubscriptionTierArgs
            {
  id?: InputMaybe<Scalars['ID']['input']>
  name?: InputMaybe<Scalars['String']['input']>
  withDeleted?: InputMaybe<Scalars['Boolean']['input']>
}




          */

/**
 * Hook to fetch SubscriptionTier from the server.
 *
 * @returns {UseQueryResult<SubscriptionTierEntity | null>}
 *
 * @example
 * const {data, isError, isLoading, isFetching, refetch} = useSubscriptionTier({id: '1'});
 *
 * @param {QuerySubscriptionTierArgs} variables - The query variables.
 */

export function useSubscriptionTier(variables: QuerySubscriptionTierArgs) {
  const { data: session } = useSession();
  return useQuery<SubscriptionTierEntity | null>({
    queryKey: ['SUBSCRIPTIONTIER_QUERY'],
    queryFn: async () =>
      UseCases.SubscriptionTier.getSubscriptionTier({
        variables,
        token: session?.token?.idToken,
      }),
    enabled: !!session?.token?.idToken,
  });
}
