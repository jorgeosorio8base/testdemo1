import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useSession } from 'next-auth/react';
import { UseCases } from '../usecases';
import { MutationReportDeleteArgs } from '@testdemo1/core';

/** 
             * Type: MutationReportDeleteArgs
            {
 *   data?: InputMaybe<ReportDeleteInput>
 *   filter?: InputMaybe<ReportKeyFilter>
 *   force?: InputMaybe<Scalars['Boolean']['input']>
 * }
 * 
 * 
 * 
 * 
 * 
 *  ReportDeleteInput = {
 *   force?: InputMaybe<Scalars['Boolean']['input']>
 *   id?: InputMaybe<Scalars['ID']['input']>
 * }
 * 
 * export type 
 * 
 * export type ReportKeyFilter = {
 *   id?: InputMaybe<Scalars['ID']['input']>
 * }
 * 
 * 
 * 
             */

/**
 * Hook to delete a Report from the server.
 * @returns {UseMutationResult<boolean, Error, MutationReportDeleteArgs>}
 * @example
 * const {mutate, isPending, isError, mutateAsync} = useDeleteReport();
 * @param {MutationReportDeleteArgs} params
 */

export function useDeleteReport() {
  const { data: session } = useSession();
  const queryClient = useQueryClient();

  return useMutation<boolean, Error, MutationReportDeleteArgs>({
    mutationKey: ['REPORT_DELETE_MUTATION'],
    mutationFn: async (params) =>
      UseCases.Report.deleteReport({
        variables: params,
        token: session?.token?.idToken,
      }),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['REPORT_LIST_QUERY'],
      });
    },
  });
}
