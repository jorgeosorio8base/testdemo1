import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useSession } from 'next-auth/react';
import { UseCases } from '../usecases';
import { MutationMaintenanceRecordCreateArgs } from '@testdemo1/core';

/** 
             * Type: MutationMaintenanceRecordCreateArgs
            {
 *   data: MaintenanceRecordCreateInput
 * }
 * 
 *  MaintenanceRecordCreateInput = {
 *   BuildingProfile?: InputMaybe<MaintenanceRecordBuildingProfileRelationInput>
 *   building_profile_id?: InputMaybe<MaintenanceRecordBuilding_Profile_IdRelationInput>
 *   date_performed?: InputMaybe<Scalars['DateTime']['input']>
 *   description?: InputMaybe<Scalars['String']['input']>
 *   vendor_id?: InputMaybe<MaintenanceRecordVendor_IdRelationInput>
 * }
 * 
 * 
 * 
 * export type MaintenanceRecordBuildingProfileRelationInput = {
 *   connect?: InputMaybe<Array<BuildingProfileKeyFilter>>
 *   create?: InputMaybe<Array<InputMaybe<Maintenance_Records_BuildingProfileCreateInput>>>
 * }
 * 
 * export type MaintenanceRecordBuilding_Profile_IdRelationInput = {
 *   connect?: InputMaybe<BuildingProfileKeyFilter>
 *   create?: InputMaybe<MaintenanceRecord_BuildingProfileCreateInput>
 * }
 * 
 * export type MaintenanceRecordVendor_IdRelationInput = {
 *   connect?: InputMaybe<UserKeyFilter>
 *   create?: InputMaybe<MaintenanceRecord_UserCreateInput>
 * }
 * 
             */

/**
 * Hook to create a MaintenanceRecord from the server.
 * @returns {UseMutationResult<boolean, Error, MutationMaintenanceRecordCreateArgs>}
 * @example
 * const {mutate, isPending, isError, mutateAsync} = useCreateMaintenanceRecord();
 * @param {MutationMaintenanceRecordCreateArgs} params
 */

export function useCreateMaintenanceRecord() {
  const { data: session } = useSession();
  const queryClient = useQueryClient();

  return useMutation<boolean, Error, MutationMaintenanceRecordCreateArgs>({
    mutationKey: ['MAINTENANCERECORD_CREATE_MUTATION'],
    mutationFn: async (params) =>
      UseCases.MaintenanceRecord.createMaintenanceRecord({
        variables: params,
        token: session?.token?.idToken,
      }),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['MAINTENANCERECORD_LIST_QUERY'],
      });
    },
  });
}
