import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useSession } from 'next-auth/react';
import { UseCases } from '../usecases';
import { MutationEnvironmentalInformationUpdateArgs } from '@testdemo1/core';

/** 
             * Type: MutationEnvironmentalInformationUpdateArgs
            {
 *   data: EnvironmentalInformationUpdateInput
 *   destroyDetached?: InputMaybe<Scalars['Boolean']['input']>
 *   filter?: InputMaybe<EnvironmentalInformationKeyFilter>
 *   force?: InputMaybe<Scalars['Boolean']['input']>
 * }
 * 
 *  EnvironmentalInformationUpdateInput = {
 *   BuildingProfile?: InputMaybe<EnvironmentalInformationBuildingProfileUpdateRelationInput>
 *   building_profile_id?: InputMaybe<EnvironmentalInformationBuilding_Profile_IdUpdateRelationInput>
 *   data_type?: InputMaybe<Scalars['String']['input']>
 *   data_value?: InputMaybe<Scalars['String']['input']>
 *   id?: InputMaybe<Scalars['ID']['input']>
 *   measurement_date?: InputMaybe<Scalars['DateTime']['input']>
 * }
 * 
 * 
 * 
 * export type EnvironmentalInformationBuildingProfileUpdateRelationInput = {
 *   connect?: InputMaybe<BuildingProfileKeyFilter>
 *   create?: InputMaybe<Environmental_Information_BuildingProfileCreateInput>
 *   disconnect?: InputMaybe<BuildingProfileKeyFilter>
 *   reconnect?: InputMaybe<BuildingProfileKeyFilter>
 *   update?: InputMaybe<Environmental_Information_BuildingProfileUpdateInput>
 * }
 * 
 * export type EnvironmentalInformationBuilding_Profile_IdUpdateRelationInput = {
 *   connect?: InputMaybe<BuildingProfileKeyFilter>
 *   create?: InputMaybe<EnvironmentalInformation_BuildingProfileCreateInput>
 *   disconnect?: InputMaybe<BuildingProfileKeyFilter>
 *   reconnect?: InputMaybe<BuildingProfileKeyFilter>
 *   update?: InputMaybe<EnvironmentalInformation_BuildingProfileUpdateInput>
 * }
 * 
 * export type 
 * 
 * 
 * 
 * export type EnvironmentalInformationKeyFilter = {
 *   id?: InputMaybe<Scalars['ID']['input']>
 * }
 * 
 * 
 * 
             */

/**
 * Hook to update a EnvironmentalInformation from the server.
 * @returns {UseMutationResult<boolean, Error, MutationEnvironmentalInformationUpdateArgs>}
 * @example
 * const {mutate, isPending, isError, mutateAsync} = useUpdateEnvironmentalInformation();
 * @param {MutationEnvironmentalInformationUpdateArgs} params
 */

export function useUpdateEnvironmentalInformation() {
  const { data: session } = useSession();
  const queryClient = useQueryClient();

  return useMutation<
    boolean,
    Error,
    MutationEnvironmentalInformationUpdateArgs
  >({
    mutationKey: ['ENVIRONMENTALINFORMATION_UPDATE_MUTATION'],
    mutationFn: async (params) =>
      UseCases.EnvironmentalInformation.updateEnvironmentalInformation({
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
