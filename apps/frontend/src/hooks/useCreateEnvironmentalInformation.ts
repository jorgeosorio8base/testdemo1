import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useSession } from 'next-auth/react';
import { UseCases } from '../usecases';
import { MutationEnvironmentalInformationCreateArgs } from '@testdemo1/core';

/** 
             * Type: MutationEnvironmentalInformationCreateArgs
            {
 *   data: EnvironmentalInformationCreateInput
 * }
 * 
 *  EnvironmentalInformationCreateInput = {
 *   BuildingProfile?: InputMaybe<EnvironmentalInformationBuildingProfileRelationInput>
 *   building_profile_id?: InputMaybe<EnvironmentalInformationBuilding_Profile_IdRelationInput>
 *   data_type?: InputMaybe<Scalars['String']['input']>
 *   data_value?: InputMaybe<Scalars['String']['input']>
 *   measurement_date?: InputMaybe<Scalars['DateTime']['input']>
 * }
 * 
 * 
 * 
 * export type EnvironmentalInformationBuildingProfileRelationInput = {
 *   connect?: InputMaybe<BuildingProfileKeyFilter>
 *   create?: InputMaybe<Environmental_Information_BuildingProfileCreateInput>
 * }
 * 
 * export type EnvironmentalInformationBuilding_Profile_IdRelationInput = {
 *   connect?: InputMaybe<BuildingProfileKeyFilter>
 *   create?: InputMaybe<EnvironmentalInformation_BuildingProfileCreateInput>
 * }
 * 
             */

/**
 * Hook to create a EnvironmentalInformation from the server.
 * @returns {UseMutationResult<boolean, Error, MutationEnvironmentalInformationCreateArgs>}
 * @example
 * const {mutate, isPending, isError, mutateAsync} = useCreateEnvironmentalInformation();
 * @param {MutationEnvironmentalInformationCreateArgs} params
 */

export function useCreateEnvironmentalInformation() {
  const { data: session } = useSession();
  const queryClient = useQueryClient();

  return useMutation<
    boolean,
    Error,
    MutationEnvironmentalInformationCreateArgs
  >({
    mutationKey: ['ENVIRONMENTALINFORMATION_CREATE_MUTATION'],
    mutationFn: async (params) =>
      UseCases.EnvironmentalInformation.createEnvironmentalInformation({
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
