import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useSession } from 'next-auth/react';
import { UseCases } from '../usecases';
import { MutationMaintenanceRecordUpdateArgs } from '@testdemo1/core';

/** 
             * Type: MutationMaintenanceRecordUpdateArgs
            {
 *   data: MaintenanceRecordUpdateInput
 *   destroyDetached?: InputMaybe<Scalars['Boolean']['input']>
 *   filter?: InputMaybe<MaintenanceRecordKeyFilter>
 *   force?: InputMaybe<Scalars['Boolean']['input']>
 * }
 * 
 *  MaintenanceRecordUpdateInput = {
 *   BuildingProfile?: InputMaybe<MaintenanceRecordBuildingProfileUpdateRelationInput>
 *   building_profile_id?: InputMaybe<MaintenanceRecordBuilding_Profile_IdUpdateRelationInput>
 *   date_performed?: InputMaybe<Scalars['DateTime']['input']>
 *   description?: InputMaybe<Scalars['String']['input']>
 *   id?: InputMaybe<Scalars['ID']['input']>
 *   vendor_id?: InputMaybe<MaintenanceRecordVendor_IdUpdateRelationInput>
 * }
 * 
 * 
 * 
 * export type MaintenanceRecordBuildingProfileUpdateRelationInput = {
 *   connect?: InputMaybe<Array<BuildingProfileKeyFilter>>
 *   create?: InputMaybe<Array<InputMaybe<Maintenance_Records_BuildingProfileCreateInput>>>
 *   disconnect?: InputMaybe<Array<BuildingProfileKeyFilter>>
 *   reconnect?: InputMaybe<Array<BuildingProfileKeyFilter>>
 *   update?: InputMaybe<Array<InputMaybe<Maintenance_Records_BuildingProfileUpdateInput>>>
 * }
 * 
 * export type MaintenanceRecordBuilding_Profile_IdUpdateRelationInput = {
 *   connect?: InputMaybe<BuildingProfileKeyFilter>
 *   create?: InputMaybe<MaintenanceRecord_BuildingProfileCreateInput>
 *   disconnect?: InputMaybe<BuildingProfileKeyFilter>
 *   reconnect?: InputMaybe<BuildingProfileKeyFilter>
 *   update?: InputMaybe<MaintenanceRecord_BuildingProfileUpdateInput>
 * }
 * 
 * export type MaintenanceRecordVendor_IdUpdateRelationInput = {
 *   connect?: InputMaybe<UserKeyFilter>
 *   create?: InputMaybe<MaintenanceRecord_UserCreateInput>
 *   disconnect?: InputMaybe<UserKeyFilter>
 *   reconnect?: InputMaybe<UserKeyFilter>
 *   update?: InputMaybe<MaintenanceRecord_UserUpdateInput>
 * }
 * 
 * export type 
 * 
 * 
 * 
 * export type MaintenanceRecordKeyFilter = {
 *   id?: InputMaybe<Scalars['ID']['input']>
 * }
 * 
 * 
 * 
             */

/**
 * Hook to update a MaintenanceRecord from the server.
 * @returns {UseMutationResult<boolean, Error, MutationMaintenanceRecordUpdateArgs>}
 * @example
 * const {mutate, isPending, isError, mutateAsync} = useUpdateMaintenanceRecord();
 * @param {MutationMaintenanceRecordUpdateArgs} params
 */

export function useUpdateMaintenanceRecord() {
  const { data: session } = useSession();
  const queryClient = useQueryClient();

  return useMutation<boolean, Error, MutationMaintenanceRecordUpdateArgs>({
    mutationKey: ['MAINTENANCERECORD_UPDATE_MUTATION'],
    mutationFn: async (params) =>
      UseCases.MaintenanceRecord.updateMaintenanceRecord({
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
