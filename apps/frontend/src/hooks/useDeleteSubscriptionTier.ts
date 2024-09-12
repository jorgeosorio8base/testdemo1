import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useSession } from 'next-auth/react';
import { UseCases } from '../usecases';
import { MutationSubscriptionTierDeleteArgs } from '@testdemo1/core';

/** 
             * Type: MutationSubscriptionTierDeleteArgs
            {
 *   data?: InputMaybe<SubscriptionTierDeleteInput>
 *   filter?: InputMaybe<SubscriptionTierKeyFilter>
 *   force?: InputMaybe<Scalars['Boolean']['input']>
 * }
 * 
 * 
 * 
 * 
 * 
 *  SubscriptionTierDeleteInput = {
 *   force?: InputMaybe<Scalars['Boolean']['input']>
 *   id?: InputMaybe<Scalars['ID']['input']>
 * }
 * 
 * export type 
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
 * Hook to delete a SubscriptionTier from the server.
 * @returns {UseMutationResult<boolean, Error, MutationSubscriptionTierDeleteArgs>}
 * @example
 * const {mutate, isPending, isError, mutateAsync} = useDeleteSubscriptionTier();
 * @param {MutationSubscriptionTierDeleteArgs} params
 */

export function useDeleteSubscriptionTier() {
  const { data: session } = useSession();
  const queryClient = useQueryClient();

  return useMutation<boolean, Error, MutationSubscriptionTierDeleteArgs>({
    mutationKey: ['SUBSCRIPTIONTIER_DELETE_MUTATION'],
    mutationFn: async (params) =>
      UseCases.SubscriptionTier.deleteSubscriptionTier({
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
