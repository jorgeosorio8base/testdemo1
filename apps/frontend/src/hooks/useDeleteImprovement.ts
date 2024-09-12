import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useSession } from 'next-auth/react';
import { UseCases } from '../usecases';
import { MutationImprovementDeleteArgs } from '@testdemo1/core';

/** 
             * Type: MutationImprovementDeleteArgs
            {
 *   data?: InputMaybe<ImprovementDeleteInput>
 *   filter?: InputMaybe<ImprovementKeyFilter>
 *   force?: InputMaybe<Scalars['Boolean']['input']>
 * }
 * 
 * 
 * 
 * 
 * 
 *  ImprovementDeleteInput = {
 *   force?: InputMaybe<Scalars['Boolean']['input']>
 *   id?: InputMaybe<Scalars['ID']['input']>
 * }
 * 
 * export type 
 * 
 * export type ImprovementKeyFilter = {
 *   id?: InputMaybe<Scalars['ID']['input']>
 * }
 * 
 * 
 * 
             */

/**
 * Hook to delete a Improvement from the server.
 * @returns {UseMutationResult<boolean, Error, MutationImprovementDeleteArgs>}
 * @example
 * const {mutate, isPending, isError, mutateAsync} = useDeleteImprovement();
 * @param {MutationImprovementDeleteArgs} params
 */

export function useDeleteImprovement() {
  const { data: session } = useSession();
  const queryClient = useQueryClient();

  return useMutation<boolean, Error, MutationImprovementDeleteArgs>({
    mutationKey: ['IMPROVEMENT_DELETE_MUTATION'],
    mutationFn: async (params) =>
      UseCases.Improvement.deleteImprovement({
        variables: params,
        token: session?.token?.idToken,
      }),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['IMPROVEMENT_LIST_QUERY'],
      });
    },
  });
}
