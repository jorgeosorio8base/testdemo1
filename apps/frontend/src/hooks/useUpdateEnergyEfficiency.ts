import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useSession } from 'next-auth/react';
import { UseCases } from '../usecases';
import { MutationEnergyEfficiencyUpdateArgs } from '@testdemo1/core';

/** 
             * Type: MutationEnergyEfficiencyUpdateArgs
            {
 *   data: EnergyEfficiencyUpdateInput
 *   destroyDetached?: InputMaybe<Scalars['Boolean']['input']>
 *   filter?: InputMaybe<EnergyEfficiencyKeyFilter>
 *   force?: InputMaybe<Scalars['Boolean']['input']>
 * }
 * 
 *  EnergyEfficiencyUpdateInput = {
 *   BuildingProfile?: InputMaybe<EnergyEfficiencyBuildingProfileUpdateRelationInput>
 *   building_profile_id?: InputMaybe<EnergyEfficiencyBuilding_Profile_IdUpdateRelationInput>
 *   efficiency_rating?: InputMaybe<Scalars['String']['input']>
 *   energy_consumption?: InputMaybe<Scalars['Int']['input']>
 *   energy_cost?: InputMaybe<Scalars['Int']['input']>
 *   id?: InputMaybe<Scalars['ID']['input']>
 *   measurement_date?: InputMaybe<Scalars['DateTime']['input']>
 * }
 * 
 * 
 * 
 * export type EnergyEfficiencyBuildingProfileUpdateRelationInput = {
 *   connect?: InputMaybe<BuildingProfileKeyFilter>
 *   create?: InputMaybe<Energy_Efficiency_BuildingProfileCreateInput>
 *   disconnect?: InputMaybe<BuildingProfileKeyFilter>
 *   reconnect?: InputMaybe<BuildingProfileKeyFilter>
 *   update?: InputMaybe<Energy_Efficiency_BuildingProfileUpdateInput>
 * }
 * 
 * export type EnergyEfficiencyBuilding_Profile_IdUpdateRelationInput = {
 *   connect?: InputMaybe<BuildingProfileKeyFilter>
 *   create?: InputMaybe<EnergyEfficiency_BuildingProfileCreateInput>
 *   disconnect?: InputMaybe<BuildingProfileKeyFilter>
 *   reconnect?: InputMaybe<BuildingProfileKeyFilter>
 *   update?: InputMaybe<EnergyEfficiency_BuildingProfileUpdateInput>
 * }
 * 
 * export type 
 * 
 * 
 * 
 * export type EnergyEfficiencyKeyFilter = {
 *   id?: InputMaybe<Scalars['ID']['input']>
 * }
 * 
 * 
 * 
             */

/**
 * Hook to update a EnergyEfficiency from the server.
 * @returns {UseMutationResult<boolean, Error, MutationEnergyEfficiencyUpdateArgs>}
 * @example
 * const {mutate, isPending, isError, mutateAsync} = useUpdateEnergyEfficiency();
 * @param {MutationEnergyEfficiencyUpdateArgs} params
 */

export function useUpdateEnergyEfficiency() {
  const { data: session } = useSession();
  const queryClient = useQueryClient();

  return useMutation<boolean, Error, MutationEnergyEfficiencyUpdateArgs>({
    mutationKey: ['ENERGYEFFICIENCY_UPDATE_MUTATION'],
    mutationFn: async (params) =>
      UseCases.EnergyEfficiency.updateEnergyEfficiency({
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
