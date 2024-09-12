import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useSession } from 'next-auth/react';
import { UseCases } from '../usecases';
import { MutationPermitDeleteArgs } from '@testdemo1/core';

/** 
             * Type: MutationPermitDeleteArgs
            {
 *   data?: InputMaybe<PermitDeleteInput>
 *   filter?: InputMaybe<PermitKeyFilter>
 *   force?: InputMaybe<Scalars['Boolean']['input']>
 * }
 * 
 * 
 * 
 * 
 * 
 *  PermitDeleteInput = {
 *   force?: InputMaybe<Scalars['Boolean']['input']>
 *   id?: InputMaybe<Scalars['ID']['input']>
 * }
 * 
 * export type 
 * 
 * export type PermitKeyFilter = {
 *   id?: InputMaybe<Scalars['ID']['input']>
 * }
 * 
 * 
 * 
             */

/**
 * Hook to delete a Permit from the server.
 * @returns {UseMutationResult<boolean, Error, MutationPermitDeleteArgs>}
 * @example
 * const {mutate, isPending, isError, mutateAsync} = useDeletePermit();
 * @param {MutationPermitDeleteArgs} params
 */

export function useDeletePermit() {
  const { data: session } = useSession();
  const queryClient = useQueryClient();

  return useMutation<boolean, Error, MutationPermitDeleteArgs>({
    mutationKey: ['PERMIT_DELETE_MUTATION'],
    mutationFn: async (params) =>
      UseCases.Permit.deletePermit({
        variables: params,
        token: session?.token?.idToken,
      }),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['PERMIT_LIST_QUERY'],
      });
    },
  });
}
