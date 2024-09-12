import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useSession } from 'next-auth/react';
import { UseCases } from '../usecases';
import { MutationWorkOrderCreateArgs } from '@testdemo1/core';

/** 
             * Type: MutationWorkOrderCreateArgs
            {
 *   data: WorkOrderCreateInput
 * }
 * 
 *  WorkOrderCreateInput = {
 *   building_profile_id?: InputMaybe<WorkOrderBuilding_Profile_IdRelationInput>
 *   completion_date?: InputMaybe<Scalars['DateTime']['input']>
 *   created_date?: InputMaybe<Scalars['DateTime']['input']>
 *   description?: InputMaybe<Scalars['String']['input']>
 *   priority?: InputMaybe<Scalars['String']['input']>
 *   status?: InputMaybe<Scalars['String']['input']>
 *   vendor_id?: InputMaybe<WorkOrderVendor_IdRelationInput>
 * }
 * 
 * 
 * 
 * export type WorkOrderBuilding_Profile_IdRelationInput = {
 *   connect?: InputMaybe<BuildingProfileKeyFilter>
 *   create?: InputMaybe<WorkOrder_BuildingProfileCreateInput>
 * }
 * 
 * export type WorkOrderVendor_IdRelationInput = {
 *   connect?: InputMaybe<UserKeyFilter>
 *   create?: InputMaybe<WorkOrder_UserCreateInput>
 * }
 * 
             */

/**
 * Hook to create a WorkOrder from the server.
 * @returns {UseMutationResult<boolean, Error, MutationWorkOrderCreateArgs>}
 * @example
 * const {mutate, isPending, isError, mutateAsync} = useCreateWorkOrder();
 * @param {MutationWorkOrderCreateArgs} params
 */

export function useCreateWorkOrder() {
  const { data: session } = useSession();
  const queryClient = useQueryClient();

  return useMutation<boolean, Error, MutationWorkOrderCreateArgs>({
    mutationKey: ['WORKORDER_CREATE_MUTATION'],
    mutationFn: async (params) =>
      UseCases.WorkOrder.createWorkOrder({
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
