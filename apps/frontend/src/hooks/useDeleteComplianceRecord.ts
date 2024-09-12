import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useSession } from 'next-auth/react';
import { UseCases } from '../usecases';
import { MutationComplianceRecordDeleteArgs } from '@testdemo1/core';

/** 
             * Type: MutationComplianceRecordDeleteArgs
            {
 *   data?: InputMaybe<ComplianceRecordDeleteInput>
 *   filter?: InputMaybe<ComplianceRecordKeyFilter>
 *   force?: InputMaybe<Scalars['Boolean']['input']>
 * }
 * 
 * 
 * 
 * 
 * 
 *  ComplianceRecordDeleteInput = {
 *   force?: InputMaybe<Scalars['Boolean']['input']>
 *   id?: InputMaybe<Scalars['ID']['input']>
 * }
 * 
 * export type 
 * 
 * export type ComplianceRecordKeyFilter = {
 *   id?: InputMaybe<Scalars['ID']['input']>
 * }
 * 
 * 
 * 
             */

/**
 * Hook to delete a ComplianceRecord from the server.
 * @returns {UseMutationResult<boolean, Error, MutationComplianceRecordDeleteArgs>}
 * @example
 * const {mutate, isPending, isError, mutateAsync} = useDeleteComplianceRecord();
 * @param {MutationComplianceRecordDeleteArgs} params
 */

export function useDeleteComplianceRecord() {
  const { data: session } = useSession();
  const queryClient = useQueryClient();

  return useMutation<boolean, Error, MutationComplianceRecordDeleteArgs>({
    mutationKey: ['COMPLIANCERECORD_DELETE_MUTATION'],
    mutationFn: async (params) =>
      UseCases.ComplianceRecord.deleteComplianceRecord({
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
