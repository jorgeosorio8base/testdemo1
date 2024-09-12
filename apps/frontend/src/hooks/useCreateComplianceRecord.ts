import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useSession } from 'next-auth/react';
import { UseCases } from '../usecases';
import { MutationComplianceRecordCreateArgs } from '@testdemo1/core';

/** 
             * Type: MutationComplianceRecordCreateArgs
            {
 *   data: ComplianceRecordCreateInput
 * }
 * 
 *  ComplianceRecordCreateInput = {
 *   BuildingProfile?: InputMaybe<ComplianceRecordBuildingProfileRelationInput>
 *   building_profile_id?: InputMaybe<ComplianceRecordBuilding_Profile_IdRelationInput>
 *   compliance_type?: InputMaybe<Scalars['String']['input']>
 *   description?: InputMaybe<Scalars['String']['input']>
 *   expiration_date?: InputMaybe<Scalars['DateTime']['input']>
 *   issue_date?: InputMaybe<Scalars['DateTime']['input']>
 *   status?: InputMaybe<Scalars['String']['input']>
 * }
 * 
 * 
 * 
 * export type ComplianceRecordBuildingProfileRelationInput = {
 *   connect?: InputMaybe<Array<BuildingProfileKeyFilter>>
 *   create?: InputMaybe<Array<InputMaybe<Compliance_Record_BuildingProfileCreateInput>>>
 * }
 * 
 * export type ComplianceRecordBuilding_Profile_IdRelationInput = {
 *   connect?: InputMaybe<BuildingProfileKeyFilter>
 *   create?: InputMaybe<ComplianceRecord_BuildingProfileCreateInput>
 * }
 * 
             */

/**
 * Hook to create a ComplianceRecord from the server.
 * @returns {UseMutationResult<boolean, Error, MutationComplianceRecordCreateArgs>}
 * @example
 * const {mutate, isPending, isError, mutateAsync} = useCreateComplianceRecord();
 * @param {MutationComplianceRecordCreateArgs} params
 */

export function useCreateComplianceRecord() {
  const { data: session } = useSession();
  const queryClient = useQueryClient();

  return useMutation<boolean, Error, MutationComplianceRecordCreateArgs>({
    mutationKey: ['COMPLIANCERECORD_CREATE_MUTATION'],
    mutationFn: async (params) =>
      UseCases.ComplianceRecord.createComplianceRecord({
        variables: params,
        token: session?.token?.idToken,
      }),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['COMPLIANCERECORD_LIST_QUERY'],
      });
    },
  });
}
