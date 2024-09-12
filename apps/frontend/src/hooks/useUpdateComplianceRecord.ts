import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useSession } from 'next-auth/react';
import { UseCases } from '../usecases';
import { MutationComplianceRecordUpdateArgs } from '@testdemo1/core';

/** 
             * Type: MutationComplianceRecordUpdateArgs
            {
 *   data: ComplianceRecordUpdateInput
 *   destroyDetached?: InputMaybe<Scalars['Boolean']['input']>
 *   filter?: InputMaybe<ComplianceRecordKeyFilter>
 *   force?: InputMaybe<Scalars['Boolean']['input']>
 * }
 * 
 *  ComplianceRecordUpdateInput = {
 *   BuildingProfile?: InputMaybe<ComplianceRecordBuildingProfileUpdateRelationInput>
 *   building_profile_id?: InputMaybe<ComplianceRecordBuilding_Profile_IdUpdateRelationInput>
 *   compliance_type?: InputMaybe<Scalars['String']['input']>
 *   description?: InputMaybe<Scalars['String']['input']>
 *   expiration_date?: InputMaybe<Scalars['DateTime']['input']>
 *   id?: InputMaybe<Scalars['ID']['input']>
 *   issue_date?: InputMaybe<Scalars['DateTime']['input']>
 *   status?: InputMaybe<Scalars['String']['input']>
 * }
 * 
 * 
 * 
 * export type ComplianceRecordBuildingProfileUpdateRelationInput = {
 *   connect?: InputMaybe<Array<BuildingProfileKeyFilter>>
 *   create?: InputMaybe<Array<InputMaybe<Compliance_Record_BuildingProfileCreateInput>>>
 *   disconnect?: InputMaybe<Array<BuildingProfileKeyFilter>>
 *   reconnect?: InputMaybe<Array<BuildingProfileKeyFilter>>
 *   update?: InputMaybe<Array<InputMaybe<Compliance_Record_BuildingProfileUpdateInput>>>
 * }
 * 
 * export type ComplianceRecordBuilding_Profile_IdUpdateRelationInput = {
 *   connect?: InputMaybe<BuildingProfileKeyFilter>
 *   create?: InputMaybe<ComplianceRecord_BuildingProfileCreateInput>
 *   disconnect?: InputMaybe<BuildingProfileKeyFilter>
 *   reconnect?: InputMaybe<BuildingProfileKeyFilter>
 *   update?: InputMaybe<ComplianceRecord_BuildingProfileUpdateInput>
 * }
 * 
 * export type 
 * 
 * 
 * 
 * export type ComplianceRecordKeyFilter = {
 *   id?: InputMaybe<Scalars['ID']['input']>
 * }
 * 
 * 
 * 
             */

/**
 * Hook to update a ComplianceRecord from the server.
 * @returns {UseMutationResult<boolean, Error, MutationComplianceRecordUpdateArgs>}
 * @example
 * const {mutate, isPending, isError, mutateAsync} = useUpdateComplianceRecord();
 * @param {MutationComplianceRecordUpdateArgs} params
 */

export function useUpdateComplianceRecord() {
  const { data: session } = useSession();
  const queryClient = useQueryClient();

  return useMutation<boolean, Error, MutationComplianceRecordUpdateArgs>({
    mutationKey: ['COMPLIANCERECORD_UPDATE_MUTATION'],
    mutationFn: async (params) =>
      UseCases.ComplianceRecord.updateComplianceRecord({
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
