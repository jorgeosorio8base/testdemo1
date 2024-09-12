import { useQuery } from '@tanstack/react-query';
import { useSession } from 'next-auth/react';
import { UseCases } from '../usecases';
import {
  QuerySubscriptionTierListArgs,
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

/** 
             * Type: QuerySubscriptionTierListArgs
            undefined
             */

/**
 * Hook to fetch list of SubscriptionTier from the server.
 *
 * @returns {UseQueryResult<{items: SubscriptionTierEntity[], count: number} | null>}
 *
 * @example
 * const {data, isError, isLoading, isFetching, refetch} = useSubscriptionTierList({first: 10});
 *
 * @param {QuerySubscriptionTierListArgs} variables - The query variables.
 */

export function useSubscriptionTierList(
  variables?: QuerySubscriptionTierListArgs,
) {
  const { data: session } = useSession();
  return useQuery<{
    items: SubscriptionTierEntity[];
    count: number;
  } | null>({
    queryKey: ['SUBSCRIPTIONTIER_LIST_QUERY'],
    queryFn: async () =>
      UseCases.SubscriptionTier.getSubscriptionTierList({
        variables: variables || {},
        token: session?.token?.idToken,
      }),
    enabled: !!session?.token?.idToken,
  });
}
