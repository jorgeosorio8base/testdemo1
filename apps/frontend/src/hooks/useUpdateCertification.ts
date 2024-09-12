import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useSession } from 'next-auth/react';
import { UseCases } from '../usecases';
import { MutationCertificationUpdateArgs } from '@testdemo1/core';

/** 
             * Type: MutationCertificationUpdateArgs
            {
 *   data: CertificationUpdateInput
 *   destroyDetached?: InputMaybe<Scalars['Boolean']['input']>
 *   filter?: InputMaybe<CertificationKeyFilter>
 *   force?: InputMaybe<Scalars['Boolean']['input']>
 * }
 * 
 *  CertificationUpdateInput = {
 *   BuildingProfile?: InputMaybe<CertificationBuildingProfileUpdateRelationInput>
 *   building_profile_id?: InputMaybe<CertificationBuilding_Profile_IdUpdateRelationInput>
 *   certification_type?: InputMaybe<Scalars['String']['input']>
 *   description?: InputMaybe<Scalars['String']['input']>
 *   expiration_date?: InputMaybe<Scalars['DateTime']['input']>
 *   id?: InputMaybe<Scalars['ID']['input']>
 *   issue_date?: InputMaybe<Scalars['DateTime']['input']>
 * }
 * 
 * 
 * 
 * export type CertificationBuildingProfileUpdateRelationInput = {
 *   connect?: InputMaybe<Array<BuildingProfileKeyFilter>>
 *   create?: InputMaybe<Array<InputMaybe<Certification_BuildingProfileCreateInput>>>
 *   disconnect?: InputMaybe<Array<BuildingProfileKeyFilter>>
 *   reconnect?: InputMaybe<Array<BuildingProfileKeyFilter>>
 *   update?: InputMaybe<Array<InputMaybe<Certification_BuildingProfileUpdateInput>>>
 * }
 * 
 * export type CertificationBuilding_Profile_IdUpdateRelationInput = {
 *   connect?: InputMaybe<BuildingProfileKeyFilter>
 *   create?: InputMaybe<Certification_BuildingProfileCreateInput>
 *   disconnect?: InputMaybe<BuildingProfileKeyFilter>
 *   reconnect?: InputMaybe<BuildingProfileKeyFilter>
 *   update?: InputMaybe<Certification_BuildingProfileUpdateInput>
 * }
 * 
 * export type 
 * 
 * 
 * 
 * export type CertificationKeyFilter = {
 *   id?: InputMaybe<Scalars['ID']['input']>
 * }
 * 
 * 
 * 
             */

/**
 * Hook to update a Certification from the server.
 * @returns {UseMutationResult<boolean, Error, MutationCertificationUpdateArgs>}
 * @example
 * const {mutate, isPending, isError, mutateAsync} = useUpdateCertification();
 * @param {MutationCertificationUpdateArgs} params
 */

export function useUpdateCertification() {
  const { data: session } = useSession();
  const queryClient = useQueryClient();

  return useMutation<boolean, Error, MutationCertificationUpdateArgs>({
    mutationKey: ['CERTIFICATION_UPDATE_MUTATION'],
    mutationFn: async (params) =>
      UseCases.Certification.updateCertification({
        variables: params,
        token: session?.token?.idToken,
      }),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['CERTIFICATION_LIST_QUERY'],
      });
    },
  });
}
