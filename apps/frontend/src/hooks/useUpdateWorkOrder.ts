import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useSession } from 'next-auth/react';
import { UseCases } from '../usecases';
import { MutationWorkOrderUpdateArgs } from '@testdemo1/core';

/** 
             * Type: MutationWorkOrderUpdateArgs
            {
 *   data: WorkOrderUpdateInput
 *   destroyDetached?: InputMaybe<Scalars['Boolean']['input']>
 *   filter?: InputMaybe<WorkOrderKeyFilter>
 *   force?: InputMaybe<Scalars['Boolean']['input']>
 * }
 * 
 *  WorkOrderUpdateInput = {
 *   building_profile_id?: InputMaybe<WorkOrderBuilding_Profile_IdUpdateRelationInput>
 *   completion_date?: InputMaybe<Scalars['DateTime']['input']>
 *   created_date?: InputMaybe<Scalars['DateTime']['input']>
 *   description?: InputMaybe<Scalars['String']['input']>
 *   id?: InputMaybe<Scalars['ID']['input']>
 *   priority?: InputMaybe<Scalars['String']['input']>
 *   status?: InputMaybe<Scalars['String']['input']>
 *   vendor_id?: InputMaybe<WorkOrderVendor_IdUpdateRelationInput>
 * }
 * 
 * 
 * 
 * export type WorkOrderBuilding_Profile_IdUpdateRelationInput = {
 *   connect?: InputMaybe<BuildingProfileKeyFilter>
 *   create?: InputMaybe<WorkOrder_BuildingProfileCreateInput>
 *   disconnect?: InputMaybe<BuildingProfileKeyFilter>
 *   reconnect?: InputMaybe<BuildingProfileKeyFilter>
 *   update?: InputMaybe<WorkOrder_BuildingProfileUpdateInput>
 * }
 * 
 * export type WorkOrderVendor_IdUpdateRelationInput = {
 *   connect?: InputMaybe<UserKeyFilter>
 *   create?: InputMaybe<WorkOrder_UserCreateInput>
 *   disconnect?: InputMaybe<UserKeyFilter>
 *   reconnect?: InputMaybe<UserKeyFilter>
 *   update?: InputMaybe<WorkOrder_UserUpdateInput>
 * }
 * 
 * export type 
 * 
 * 
 * 
 * export type WorkOrderKeyFilter = {
 *   id?: InputMaybe<Scalars['ID']['input']>
 * }
 * 
 * 
 * 
             */

/**
 * Hook to update a WorkOrder from the server.
 * @returns {UseMutationResult<boolean, Error, MutationWorkOrderUpdateArgs>}
 * @example
 * const {mutate, isPending, isError, mutateAsync} = useUpdateWorkOrder();
 * @param {MutationWorkOrderUpdateArgs} params
 */

export function useUpdateWorkOrder() {
  const { data: session } = useSession();
  const queryClient = useQueryClient();

  return useMutation<boolean, Error, MutationWorkOrderUpdateArgs>({
    mutationKey: ['WORKORDER_UPDATE_MUTATION'],
    mutationFn: async (params) =>
      UseCases.WorkOrder.updateWorkOrder({
        variables: params,
        token: session?.token?.idToken,
      }),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['WORKORDER_LIST_QUERY'],
      });
    },
  });
}
