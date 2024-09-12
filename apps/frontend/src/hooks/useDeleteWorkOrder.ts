import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useSession } from 'next-auth/react';
import { UseCases } from '../usecases';
import { MutationWorkOrderDeleteArgs } from '@testdemo1/core';

/** 
             * Type: MutationWorkOrderDeleteArgs
            {
 *   data?: InputMaybe<WorkOrderDeleteInput>
 *   filter?: InputMaybe<WorkOrderKeyFilter>
 *   force?: InputMaybe<Scalars['Boolean']['input']>
 * }
 * 
 * 
 * 
 * 
 * 
 *  WorkOrderDeleteInput = {
 *   force?: InputMaybe<Scalars['Boolean']['input']>
 *   id?: InputMaybe<Scalars['ID']['input']>
 * }
 * 
 * export type 
 * 
 * export type WorkOrderKeyFilter = {
 *   id?: InputMaybe<Scalars['ID']['input']>
 * }
 * 
 * 
 * 
             */

/**
 * Hook to delete a WorkOrder from the server.
 * @returns {UseMutationResult<boolean, Error, MutationWorkOrderDeleteArgs>}
 * @example
 * const {mutate, isPending, isError, mutateAsync} = useDeleteWorkOrder();
 * @param {MutationWorkOrderDeleteArgs} params
 */

export function useDeleteWorkOrder() {
  const { data: session } = useSession();
  const queryClient = useQueryClient();

  return useMutation<boolean, Error, MutationWorkOrderDeleteArgs>({
    mutationKey: ['WORKORDER_DELETE_MUTATION'],
    mutationFn: async (params) =>
      UseCases.WorkOrder.deleteWorkOrder({
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
