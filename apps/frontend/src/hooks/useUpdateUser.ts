import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useSession } from 'next-auth/react';
import { UseCases } from '../usecases';
import { MutationUserUpdateArgs } from '@testdemo1/core';

/** 
             * Type: MutationUserUpdateArgs
            {
 *   data: UserUpdateInput
 *   destroyDetached?: InputMaybe<Scalars['Boolean']['input']>
 *   filter?: InputMaybe<UserKeyFilter>
 *   force?: InputMaybe<Scalars['Boolean']['input']>
 * }
 * 
 *  UserUpdateInput = {
 *   BuildingProfile?: InputMaybe<UsersBuildingProfileUpdateRelationInput>
 *   MaintenanceRecord?: InputMaybe<UsersMaintenanceRecordUpdateRelationInput>
 *   Notification?: InputMaybe<UsersNotificationUpdateRelationInput>
 *   Report?: InputMaybe<UsersReportUpdateRelationInput>
 *   SearchCriteria?: InputMaybe<UsersSearchCriteriaUpdateRelationInput>
 *   WorkOrder?: InputMaybe<UsersWorkOrderUpdateRelationInput>
 *   avatar?: InputMaybe<UsersAvatarUpdateRelationInput>
 *   email?: InputMaybe<Scalars['String']['input']>
 *   firstName?: InputMaybe<Scalars['String']['input']>
 *   id?: InputMaybe<Scalars['ID']['input']>
 *   lastName?: InputMaybe<Scalars['String']['input']>
 *   roles?: InputMaybe<UsersRolesUpdateRelationInput>
 *   status?: InputMaybe<Scalars['String']['input']>
 *   timezone?: InputMaybe<Scalars['String']['input']>
 * }
 * 
 * 
 * 
 * export type UsersBuildingProfileUpdateRelationInput = {
 *   connect?: InputMaybe<BuildingProfileKeyFilter>
 *   create?: InputMaybe<Owner_Id_BuildingProfileCreateInput>
 *   disconnect?: InputMaybe<BuildingProfileKeyFilter>
 *   reconnect?: InputMaybe<BuildingProfileKeyFilter>
 *   update?: InputMaybe<Owner_Id_BuildingProfileUpdateInput>
 * }
 * 
 * export type UsersMaintenanceRecordUpdateRelationInput = {
 *   connect?: InputMaybe<MaintenanceRecordKeyFilter>
 *   create?: InputMaybe<Vendor_Id_MaintenanceRecordCreateInput>
 *   disconnect?: InputMaybe<MaintenanceRecordKeyFilter>
 *   reconnect?: InputMaybe<MaintenanceRecordKeyFilter>
 *   update?: InputMaybe<Vendor_Id_MaintenanceRecordUpdateInput>
 * }
 * 
 * export type UsersNotificationUpdateRelationInput = {
 *   connect?: InputMaybe<NotificationKeyFilter>
 *   create?: InputMaybe<User_Id_NotificationCreateInput>
 *   disconnect?: InputMaybe<NotificationKeyFilter>
 *   reconnect?: InputMaybe<NotificationKeyFilter>
 *   update?: InputMaybe<User_Id_NotificationUpdateInput>
 * }
 * 
 * export type UsersReportUpdateRelationInput = {
 *   connect?: InputMaybe<ReportKeyFilter>
 *   create?: InputMaybe<User_Id_ReportCreateInput>
 *   disconnect?: InputMaybe<ReportKeyFilter>
 *   reconnect?: InputMaybe<ReportKeyFilter>
 *   update?: InputMaybe<User_Id_ReportUpdateInput>
 * }
 * 
 * export type UsersSearchCriteriaUpdateRelationInput = {
 *   connect?: InputMaybe<SearchCriterionKeyFilter>
 *   create?: InputMaybe<User_Id_SearchCriterionCreateInput>
 *   disconnect?: InputMaybe<SearchCriterionKeyFilter>
 *   reconnect?: InputMaybe<SearchCriterionKeyFilter>
 *   update?: InputMaybe<User_Id_SearchCriterionUpdateInput>
 * }
 * 
 * export type UsersWorkOrderUpdateRelationInput = {
 *   connect?: InputMaybe<WorkOrderKeyFilter>
 *   create?: InputMaybe<Vendor_Id_WorkOrderCreateInput>
 *   disconnect?: InputMaybe<WorkOrderKeyFilter>
 *   reconnect?: InputMaybe<WorkOrderKeyFilter>
 *   update?: InputMaybe<Vendor_Id_WorkOrderUpdateInput>
 * }
 * 
 * export type UsersAvatarUpdateRelationInput = {
 *   connect?: InputMaybe<FileKeyFilter>
 *   create?: InputMaybe<Users_Avatar_FileCreateInput>
 *   disconnect?: InputMaybe<FileKeyFilter>
 *   reconnect?: InputMaybe<FileKeyFilter>
 *   update?: InputMaybe<Users_Avatar_FileUpdateInput>
 * }
 * 
 * export type UsersRolesUpdateRelationInput = {
 *   connect?: InputMaybe<Array<RoleKeyFilter>>
 *   create?: InputMaybe<Array<InputMaybe<Users_RoleCreateInput>>>
 *   disconnect?: InputMaybe<Array<RoleKeyFilter>>
 *   reconnect?: InputMaybe<Array<RoleKeyFilter>>
 *   update?: InputMaybe<Array<InputMaybe<Users_RoleUpdateInput>>>
 * }
 * 
 * export type 
 * 
 * 
 * 
 * export type UserKeyFilter = {
 *   email?: InputMaybe<Scalars['String']['input']>
 *   id?: InputMaybe<Scalars['ID']['input']>
 * }
 * 
 * 
 * 
             */

/**
 * Hook to update a User from the server.
 * @returns {UseMutationResult<boolean, Error, MutationUserUpdateArgs>}
 * @example
 * const {mutate, isPending, isError, mutateAsync} = useUpdateUser();
 * @param {MutationUserUpdateArgs} params
 */

export function useUpdateUser() {
  const { data: session } = useSession();
  const queryClient = useQueryClient();

  return useMutation<boolean, Error, MutationUserUpdateArgs>({
    mutationKey: ['USER_UPDATE_MUTATION'],
    mutationFn: async (params) =>
      UseCases.User.updateUser({
        variables: params,
        token: session?.token?.idToken,
      }),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['USER_LIST_QUERY'],
      });
    },
  });
}
