import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useSession } from 'next-auth/react';
import { UseCases } from '../usecases';
import { MutationCertificationCreateArgs } from '@testdemo1/core';

/** 
             * Type: MutationCertificationCreateArgs
            {
 *   data: CertificationCreateInput
 * }
 * 
 *  CertificationCreateInput = {
 *   BuildingProfile?: InputMaybe<CertificationBuildingProfileRelationInput>
 *   building_profile_id?: InputMaybe<CertificationBuilding_Profile_IdRelationInput>
 *   certification_type?: InputMaybe<Scalars['String']['input']>
 *   description?: InputMaybe<Scalars['String']['input']>
 *   expiration_date?: InputMaybe<Scalars['DateTime']['input']>
 *   issue_date?: InputMaybe<Scalars['DateTime']['input']>
 * }
 * 
 * 
 * 
 * export type CertificationBuildingProfileRelationInput = {
 *   connect?: InputMaybe<Array<BuildingProfileKeyFilter>>
 *   create?: InputMaybe<Array<InputMaybe<Certification_BuildingProfileCreateInput>>>
 * }
 * 
 * export type CertificationBuilding_Profile_IdRelationInput = {
 *   connect?: InputMaybe<BuildingProfileKeyFilter>
 *   create?: InputMaybe<Certification_BuildingProfileCreateInput>
 * }
 * 
             */

/**
 * Hook to create a Certification from the server.
 * @returns {UseMutationResult<boolean, Error, MutationCertificationCreateArgs>}
 * @example
 * const {mutate, isPending, isError, mutateAsync} = useCreateCertification();
 * @param {MutationCertificationCreateArgs} params
 */

export function useCreateCertification() {
  const { data: session } = useSession();
  const queryClient = useQueryClient();

  return useMutation<boolean, Error, MutationCertificationCreateArgs>({
    mutationKey: ['CERTIFICATION_CREATE_MUTATION'],
    mutationFn: async (params) =>
      UseCases.Certification.createCertification({
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
