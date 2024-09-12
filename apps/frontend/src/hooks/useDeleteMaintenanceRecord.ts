import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useSession } from 'next-auth/react';
import { UseCases } from '../usecases';
import { MutationMaintenanceRecordDeleteArgs } from '@testdemo1/core';

/** 
             * Type: MutationMaintenanceRecordDeleteArgs
            {
 *   data?: InputMaybe<MaintenanceRecordDeleteInput>
 *   filter?: InputMaybe<MaintenanceRecordKeyFilter>
 *   force?: InputMaybe<Scalars['Boolean']['input']>
 * }
 * 
 * 
 * 
 * 
 * 
 *  MaintenanceRecordDeleteInput = {
 *   force?: InputMaybe<Scalars['Boolean']['input']>
 *   id?: InputMaybe<Scalars['ID']['input']>
 * }
 * 
 * export type 
 * 
 * export type MaintenanceRecordKeyFilter = {
 *   id?: InputMaybe<Scalars['ID']['input']>
 * }
 * 
 * 
 * 
             */

/**
 * Hook to delete a MaintenanceRecord from the server.
 * @returns {UseMutationResult<boolean, Error, MutationMaintenanceRecordDeleteArgs>}
 * @example
 * const {mutate, isPending, isError, mutateAsync} = useDeleteMaintenanceRecord();
 * @param {MutationMaintenanceRecordDeleteArgs} params
 */

export function useDeleteMaintenanceRecord() {
  const { data: session } = useSession();
  const queryClient = useQueryClient();

  return useMutation<boolean, Error, MutationMaintenanceRecordDeleteArgs>({
    mutationKey: ['MAINTENANCERECORD_DELETE_MUTATION'],
    mutationFn: async (params) =>
      UseCases.MaintenanceRecord.deleteMaintenanceRecord({
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
