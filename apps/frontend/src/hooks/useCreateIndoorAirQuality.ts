import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useSession } from 'next-auth/react';
import { UseCases } from '../usecases';
import { MutationIndoorAirQualityCreateArgs } from '@testdemo1/core';

/** 
             * Type: MutationIndoorAirQualityCreateArgs
            {
 *   data: IndoorAirQualityCreateInput
 * }
 * 
 *  IndoorAirQualityCreateInput = {
 *   BuildingProfile?: InputMaybe<IndoorAirQualityBuildingProfileRelationInput>
 *   air_quality_level?: InputMaybe<Scalars['String']['input']>
 *   building_profile_id?: InputMaybe<IndoorAirQualityBuilding_Profile_IdRelationInput>
 *   measurement_date?: InputMaybe<Scalars['DateTime']['input']>
 *   pollutant_levels?: InputMaybe<Scalars['JSON']['input']>
 * }
 * 
 * 
 * 
 * export type IndoorAirQualityBuildingProfileRelationInput = {
 *   connect?: InputMaybe<BuildingProfileKeyFilter>
 *   create?: InputMaybe<Indoor_Air_Quality_BuildingProfileCreateInput>
 * }
 * 
 * export type IndoorAirQualityBuilding_Profile_IdRelationInput = {
 *   connect?: InputMaybe<BuildingProfileKeyFilter>
 *   create?: InputMaybe<IndoorAirQuality_BuildingProfileCreateInput>
 * }
 * 
             */

/**
 * Hook to create a IndoorAirQuality from the server.
 * @returns {UseMutationResult<boolean, Error, MutationIndoorAirQualityCreateArgs>}
 * @example
 * const {mutate, isPending, isError, mutateAsync} = useCreateIndoorAirQuality();
 * @param {MutationIndoorAirQualityCreateArgs} params
 */

export function useCreateIndoorAirQuality() {
  const { data: session } = useSession();
  const queryClient = useQueryClient();

  return useMutation<boolean, Error, MutationIndoorAirQualityCreateArgs>({
    mutationKey: ['INDOORAIRQUALITY_CREATE_MUTATION'],
    mutationFn: async (params) =>
      UseCases.IndoorAirQuality.createIndoorAirQuality({
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
