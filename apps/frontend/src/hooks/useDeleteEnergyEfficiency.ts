import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useSession } from 'next-auth/react';
import { UseCases } from '../usecases';
import { MutationEnergyEfficiencyDeleteArgs } from '@testdemo1/core';

/** 
             * Type: MutationEnergyEfficiencyDeleteArgs
            {
 *   data?: InputMaybe<EnergyEfficiencyDeleteInput>
 *   filter?: InputMaybe<EnergyEfficiencyKeyFilter>
 *   force?: InputMaybe<Scalars['Boolean']['input']>
 * }
 * 
 * 
 * 
 * 
 * 
 *  EnergyEfficiencyDeleteInput = {
 *   force?: InputMaybe<Scalars['Boolean']['input']>
 *   id?: InputMaybe<Scalars['ID']['input']>
 * }
 * 
 * export type 
 * 
 * export type EnergyEfficiencyKeyFilter = {
 *   id?: InputMaybe<Scalars['ID']['input']>
 * }
 * 
 * 
 * 
             */

/**
 * Hook to delete a EnergyEfficiency from the server.
 * @returns {UseMutationResult<boolean, Error, MutationEnergyEfficiencyDeleteArgs>}
 * @example
 * const {mutate, isPending, isError, mutateAsync} = useDeleteEnergyEfficiency();
 * @param {MutationEnergyEfficiencyDeleteArgs} params
 */

export function useDeleteEnergyEfficiency() {
  const { data: session } = useSession();
  const queryClient = useQueryClient();

  return useMutation<boolean, Error, MutationEnergyEfficiencyDeleteArgs>({
    mutationKey: ['ENERGYEFFICIENCY_DELETE_MUTATION'],
    mutationFn: async (params) =>
      UseCases.EnergyEfficiency.deleteEnergyEfficiency({
        variables: params,
        token: session?.token?.idToken,
      }),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['ENERGYEFFICIENCY_LIST_QUERY'],
      });
    },
  });
}
