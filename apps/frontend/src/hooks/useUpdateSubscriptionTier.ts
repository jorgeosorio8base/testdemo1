import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useSession } from 'next-auth/react';
import { UseCases } from '../usecases';
import { MutationSubscriptionTierUpdateArgs } from '@testdemo1/core';

/** 
             * Type: MutationSubscriptionTierUpdateArgs
            {
 *   data: SubscriptionTierUpdateInput
 *   destroyDetached?: InputMaybe<Scalars['Boolean']['input']>
 *   filter?: InputMaybe<SubscriptionTierKeyFilter>
 *   force?: InputMaybe<Scalars['Boolean']['input']>
 * }
 * 
 *  SubscriptionTierUpdateInput = {
 *   description?: InputMaybe<Scalars['String']['input']>
 *   features?: InputMaybe<Scalars['JSON']['input']>
 *   id?: InputMaybe<Scalars['ID']['input']>
 *   name?: InputMaybe<Scalars['String']['input']>
 *   price?: InputMaybe<Scalars['Int']['input']>
 * }
 * 
 * 
 * 
 * export type 
 * 
 * 
 * 
 * export type SubscriptionTierKeyFilter = {
 *   id?: InputMaybe<Scalars['ID']['input']>
 *   name?: InputMaybe<Scalars['String']['input']>
 * }
 * 
 * 
 * 
             */

/**
 * Hook to update a SubscriptionTier from the server.
 * @returns {UseMutationResult<boolean, Error, MutationSubscriptionTierUpdateArgs>}
 * @example
 * const {mutate, isPending, isError, mutateAsync} = useUpdateSubscriptionTier();
 * @param {MutationSubscriptionTierUpdateArgs} params
 */

export function useUpdateSubscriptionTier() {
  const { data: session } = useSession();
  const queryClient = useQueryClient();

  return useMutation<boolean, Error, MutationSubscriptionTierUpdateArgs>({
    mutationKey: ['SUBSCRIPTIONTIER_UPDATE_MUTATION'],
    mutationFn: async (params) =>
      UseCases.SubscriptionTier.updateSubscriptionTier({
        variables: params,
        token: session?.token?.idToken,
      }),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['SUBSCRIPTIONTIER_LIST_QUERY'],
      });
    },
  });
}
