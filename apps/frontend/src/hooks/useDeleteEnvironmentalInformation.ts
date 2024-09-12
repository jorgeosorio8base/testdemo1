import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useSession } from 'next-auth/react';
import { UseCases } from '../usecases';
import { MutationEnvironmentalInformationDeleteArgs } from '@testdemo1/core';

/** 
             * Type: MutationEnvironmentalInformationDeleteArgs
            {
 *   data?: InputMaybe<EnvironmentalInformationDeleteInput>
 *   filter?: InputMaybe<EnvironmentalInformationKeyFilter>
 *   force?: InputMaybe<Scalars['Boolean']['input']>
 * }
 * 
 * 
 * 
 * 
 * 
 *  EnvironmentalInformationDeleteInput = {
 *   force?: InputMaybe<Scalars['Boolean']['input']>
 *   id?: InputMaybe<Scalars['ID']['input']>
 * }
 * 
 * export type 
 * 
 * export type EnvironmentalInformationKeyFilter = {
 *   id?: InputMaybe<Scalars['ID']['input']>
 * }
 * 
 * 
 * 
             */

/**
 * Hook to delete a EnvironmentalInformation from the server.
 * @returns {UseMutationResult<boolean, Error, MutationEnvironmentalInformationDeleteArgs>}
 * @example
 * const {mutate, isPending, isError, mutateAsync} = useDeleteEnvironmentalInformation();
 * @param {MutationEnvironmentalInformationDeleteArgs} params
 */

export function useDeleteEnvironmentalInformation() {
  const { data: session } = useSession();
  const queryClient = useQueryClient();

  return useMutation<
    boolean,
    Error,
    MutationEnvironmentalInformationDeleteArgs
  >({
    mutationKey: ['ENVIRONMENTALINFORMATION_DELETE_MUTATION'],
    mutationFn: async (params) =>
      UseCases.EnvironmentalInformation.deleteEnvironmentalInformation({
        variables: params,
        token: session?.token?.idToken,
      }),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['ENVIRONMENTALINFORMATION_LIST_QUERY'],
      });
    },
  });
}
