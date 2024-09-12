import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useSession } from 'next-auth/react';
import { UseCases } from '../usecases';
import { MutationIndoorAirQualityUpdateArgs } from '@testdemo1/core';

/** 
             * Type: MutationIndoorAirQualityUpdateArgs
            {
 *   data: IndoorAirQualityUpdateInput
 *   destroyDetached?: InputMaybe<Scalars['Boolean']['input']>
 *   filter?: InputMaybe<IndoorAirQualityKeyFilter>
 *   force?: InputMaybe<Scalars['Boolean']['input']>
 * }
 * 
 *  IndoorAirQualityUpdateInput = {
 *   BuildingProfile?: InputMaybe<IndoorAirQualityBuildingProfileUpdateRelationInput>
 *   air_quality_level?: InputMaybe<Scalars['String']['input']>
 *   building_profile_id?: InputMaybe<IndoorAirQualityBuilding_Profile_IdUpdateRelationInput>
 *   id?: InputMaybe<Scalars['ID']['input']>
 *   measurement_date?: InputMaybe<Scalars['DateTime']['input']>
 *   pollutant_levels?: InputMaybe<Scalars['JSON']['input']>
 * }
 * 
 * 
 * 
 * export type IndoorAirQualityBuildingProfileUpdateRelationInput = {
 *   connect?: InputMaybe<BuildingProfileKeyFilter>
 *   create?: InputMaybe<Indoor_Air_Quality_BuildingProfileCreateInput>
 *   disconnect?: InputMaybe<BuildingProfileKeyFilter>
 *   reconnect?: InputMaybe<BuildingProfileKeyFilter>
 *   update?: InputMaybe<Indoor_Air_Quality_BuildingProfileUpdateInput>
 * }
 * 
 * export type IndoorAirQualityBuilding_Profile_IdUpdateRelationInput = {
 *   connect?: InputMaybe<BuildingProfileKeyFilter>
 *   create?: InputMaybe<IndoorAirQuality_BuildingProfileCreateInput>
 *   disconnect?: InputMaybe<BuildingProfileKeyFilter>
 *   reconnect?: InputMaybe<BuildingProfileKeyFilter>
 *   update?: InputMaybe<IndoorAirQuality_BuildingProfileUpdateInput>
 * }
 * 
 * export type 
 * 
 * 
 * 
 * export type IndoorAirQualityKeyFilter = {
 *   id?: InputMaybe<Scalars['ID']['input']>
 * }
 * 
 * 
 * 
             */

/**
 * Hook to update a IndoorAirQuality from the server.
 * @returns {UseMutationResult<boolean, Error, MutationIndoorAirQualityUpdateArgs>}
 * @example
 * const {mutate, isPending, isError, mutateAsync} = useUpdateIndoorAirQuality();
 * @param {MutationIndoorAirQualityUpdateArgs} params
 */

export function useUpdateIndoorAirQuality() {
  const { data: session } = useSession();
  const queryClient = useQueryClient();

  return useMutation<boolean, Error, MutationIndoorAirQualityUpdateArgs>({
    mutationKey: ['INDOORAIRQUALITY_UPDATE_MUTATION'],
    mutationFn: async (params) =>
      UseCases.IndoorAirQuality.updateIndoorAirQuality({
        variables: params,
        token: session?.token?.idToken,
      }),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['INDOORAIRQUALITY_LIST_QUERY'],
      });
    },
  });
}
