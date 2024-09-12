import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useSession } from 'next-auth/react';
import { UseCases } from '../usecases';
import {
  UserEntity,
  MutationUserSignUpWithPasswordArgs,
} from '@testdemo1/core';

/** 
             * Type: MutationUserSignUpWithPasswordArgs
            {
 *   authProfileId?: InputMaybe<Scalars['ID']['input']>
 *   password: Scalars['String']['input']
 *   user: UserCreateInput
 * }
 * 
 * 
 * 
 * 
 * 
 *  UserCreateInput = {
 *   BuildingProfile?: InputMaybe<UsersBuildingProfileRelationInput>
 *   MaintenanceRecord?: InputMaybe<UsersMaintenanceRecordRelationInput>
 *   Notification?: InputMaybe<UsersNotificationRelationInput>
 *   Report?: InputMaybe<UsersReportRelationInput>
 *   SearchCriteria?: InputMaybe<UsersSearchCriteriaRelationInput>
 *   WorkOrder?: InputMaybe<UsersWorkOrderRelationInput>
 *   avatar?: InputMaybe<UsersAvatarRelationInput>
 *   email: Scalars['String']['input']
 *   firstName?: InputMaybe<Scalars['String']['input']>
 *   lastName?: InputMaybe<Scalars['String']['input']>
 *   roles?: InputMaybe<UsersRolesRelationInput>
 *   status?: InputMaybe<Scalars['String']['input']>
 *   timezone?: InputMaybe<Scalars['String']['input']>
 * }
 * 
 * export type 
 * 
 * export type UsersBuildingProfileRelationInput = {
 *   connect?: InputMaybe<BuildingProfileKeyFilter>
 *   create?: InputMaybe<Owner_Id_BuildingProfileCreateInput>
 * }
 * 
 * export type UsersMaintenanceRecordRelationInput = {
 *   connect?: InputMaybe<MaintenanceRecordKeyFilter>
 *   create?: InputMaybe<Vendor_Id_MaintenanceRecordCreateInput>
 * }
 * 
 * export type UsersNotificationRelationInput = {
 *   connect?: InputMaybe<NotificationKeyFilter>
 *   create?: InputMaybe<User_Id_NotificationCreateInput>
 * }
 * 
 * export type UsersReportRelationInput = {
 *   connect?: InputMaybe<ReportKeyFilter>
 *   create?: InputMaybe<User_Id_ReportCreateInput>
 * }
 * 
 * export type UsersSearchCriteriaRelationInput = {
 *   connect?: InputMaybe<SearchCriterionKeyFilter>
 *   create?: InputMaybe<User_Id_SearchCriterionCreateInput>
 * }
 * 
 * export type UsersWorkOrderRelationInput = {
 *   connect?: InputMaybe<WorkOrderKeyFilter>
 *   create?: InputMaybe<Vendor_Id_WorkOrderCreateInput>
 * }
 * 
 * export type UsersAvatarRelationInput = {
 *   connect?: InputMaybe<FileKeyFilter>
 *   create?: InputMaybe<Users_Avatar_FileCreateInput>
 * }
 * 
 * export type UsersRolesRelationInput = {
 *   connect?: InputMaybe<Array<RoleKeyFilter>>
 *   create?: InputMaybe<Array<InputMaybe<Users_RoleCreateInput>>>
 * }
 * 
             */

/**
 * Hook to register a new user into the system.
 *
 * @returns {UseMutationResult<UserEntity, Error, MutationUserSignUpWithPasswordArgs>}
 *
 * @example
 * const {mutate, isPending, isError, mutateAsync} = useRegisterUser();
 *
 * @param {MutationUserSignUpWithPasswordArgs} params - The user registration parameters.
 */

export function useRegisterUser() {
  return useMutation<
    UserEntity | null,
    Error,
    MutationUserSignUpWithPasswordArgs
  >({
    mutationKey: ['USER_REGISTER_MUTATION'],
    mutationFn: async (params) =>
      UseCases.User.registerUser({
        variables: params,
        token: undefined,
      }),
  });
}
