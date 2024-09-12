import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useSession } from 'next-auth/react';
import { UseCases } from '../usecases';
import { MutationReportCreateArgs } from '@testdemo1/core';

/** 
             * Type: MutationReportCreateArgs
            {
 *   data: ReportCreateInput
 * }
 * 
 *  ReportCreateInput = {
 *   configuration?: InputMaybe<Scalars['JSON']['input']>
 *   description?: InputMaybe<Scalars['String']['input']>
 *   file?: InputMaybe<ReportFileRelationInput>
 *   generated_date?: InputMaybe<Scalars['DateTime']['input']>
 *   name?: InputMaybe<Scalars['String']['input']>
 *   user_id?: InputMaybe<ReportUser_IdRelationInput>
 * }
 * 
 * 
 * 
 * export type ReportFileRelationInput = {
 *   connect?: InputMaybe<FileKeyFilter>
 *   create?: InputMaybe<Report_File_FileCreateInput>
 * }
 * 
 * export type ReportUser_IdRelationInput = {
 *   connect?: InputMaybe<UserKeyFilter>
 *   create?: InputMaybe<Report_UserCreateInput>
 * }
 * 
             */

/**
 * Hook to create a Report from the server.
 * @returns {UseMutationResult<boolean, Error, MutationReportCreateArgs>}
 * @example
 * const {mutate, isPending, isError, mutateAsync} = useCreateReport();
 * @param {MutationReportCreateArgs} params
 */

export function useCreateReport() {
  const { data: session } = useSession();
  const queryClient = useQueryClient();

  return useMutation<boolean, Error, MutationReportCreateArgs>({
    mutationKey: ['REPORT_CREATE_MUTATION'],
    mutationFn: async (params) =>
      UseCases.Report.createReport({
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
