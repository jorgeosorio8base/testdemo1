import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useSession } from 'next-auth/react';
import { UseCases } from '../usecases';
import { MutationEnergyEfficiencyCreateArgs } from '@testdemo1/core';

/** 
             * Type: MutationEnergyEfficiencyCreateArgs
            {
 *   data: EnergyEfficiencyCreateInput
 * }
 * 
 *  EnergyEfficiencyCreateInput = {
 *   BuildingProfile?: InputMaybe<EnergyEfficiencyBuildingProfileRelationInput>
 *   building_profile_id?: InputMaybe<EnergyEfficiencyBuilding_Profile_IdRelationInput>
 *   efficiency_rating?: InputMaybe<Scalars['String']['input']>
 *   energy_consumption?: InputMaybe<Scalars['Int']['input']>
 *   energy_cost?: InputMaybe<Scalars['Int']['input']>
 *   measurement_date?: InputMaybe<Scalars['DateTime']['input']>
 * }
 * 
 * 
 * 
 * export type EnergyEfficiencyBuildingProfileRelationInput = {
 *   connect?: InputMaybe<BuildingProfileKeyFilter>
 *   create?: InputMaybe<Energy_Efficiency_BuildingProfileCreateInput>
 * }
 * 
 * export type EnergyEfficiencyBuilding_Profile_IdRelationInput = {
 *   connect?: InputMaybe<BuildingProfileKeyFilter>
 *   create?: InputMaybe<EnergyEfficiency_BuildingProfileCreateInput>
 * }
 * 
             */

/**
 * Hook to create a EnergyEfficiency from the server.
 * @returns {UseMutationResult<boolean, Error, MutationEnergyEfficiencyCreateArgs>}
 * @example
 * const {mutate, isPending, isError, mutateAsync} = useCreateEnergyEfficiency();
 * @param {MutationEnergyEfficiencyCreateArgs} params
 */

export function useCreateEnergyEfficiency() {
  const { data: session } = useSession();
  const queryClient = useQueryClient();

  return useMutation<boolean, Error, MutationEnergyEfficiencyCreateArgs>({
    mutationKey: ['ENERGYEFFICIENCY_CREATE_MUTATION'],
    mutationFn: async (params) =>
      UseCases.EnergyEfficiency.createEnergyEfficiency({
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
