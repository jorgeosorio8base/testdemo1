import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useSession } from 'next-auth/react';
import { UseCases } from '../usecases';
import { MutationSubscriptionTierCreateArgs } from '@testdemo1/core';

/** 
             * Type: MutationSubscriptionTierCreateArgs
            {
 *   data: SubscriptionTierCreateInput
 * }
 * 
 *  SubscriptionTierCreateInput = {
 *   description?: InputMaybe<Scalars['String']['input']>
 *   features?: InputMaybe<Scalars['JSON']['input']>
 *   name?: InputMaybe<Scalars['String']['input']>
 *   price?: InputMaybe<Scalars['Int']['input']>
 * }
 * 
 * 
 * 
             */

/**
 * Hook to create a SubscriptionTier from the server.
 * @returns {UseMutationResult<boolean, Error, MutationSubscriptionTierCreateArgs>}
 * @example
 * const {mutate, isPending, isError, mutateAsync} = useCreateSubscriptionTier();
 * @param {MutationSubscriptionTierCreateArgs} params
 */

export function useCreateSubscriptionTier() {
  const { data: session } = useSession();
  const queryClient = useQueryClient();

  return useMutation<boolean, Error, MutationSubscriptionTierCreateArgs>({
    mutationKey: ['SUBSCRIPTIONTIER_CREATE_MUTATION'],
    mutationFn: async (params) =>
      UseCases.SubscriptionTier.createSubscriptionTier({
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
