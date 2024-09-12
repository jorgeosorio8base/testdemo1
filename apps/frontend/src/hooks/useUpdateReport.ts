import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useSession } from 'next-auth/react';
import { UseCases } from '../usecases';
import { MutationReportUpdateArgs } from '@testdemo1/core';

/** 
             * Type: MutationReportUpdateArgs
            {
 *   data: ReportUpdateInput
 *   destroyDetached?: InputMaybe<Scalars['Boolean']['input']>
 *   filter?: InputMaybe<ReportKeyFilter>
 *   force?: InputMaybe<Scalars['Boolean']['input']>
 * }
 * 
 *  ReportUpdateInput = {
 *   configuration?: InputMaybe<Scalars['JSON']['input']>
 *   description?: InputMaybe<Scalars['String']['input']>
 *   file?: InputMaybe<ReportFileUpdateRelationInput>
 *   generated_date?: InputMaybe<Scalars['DateTime']['input']>
 *   id?: InputMaybe<Scalars['ID']['input']>
 *   name?: InputMaybe<Scalars['String']['input']>
 *   user_id?: InputMaybe<ReportUser_IdUpdateRelationInput>
 * }
 * 
 * 
 * 
 * export type ReportFileUpdateRelationInput = {
 *   connect?: InputMaybe<FileKeyFilter>
 *   create?: InputMaybe<Report_File_FileCreateInput>
 *   disconnect?: InputMaybe<FileKeyFilter>
 *   reconnect?: InputMaybe<FileKeyFilter>
 *   update?: InputMaybe<Report_File_FileUpdateInput>
 * }
 * 
 * export type ReportUser_IdUpdateRelationInput = {
 *   connect?: InputMaybe<UserKeyFilter>
 *   create?: InputMaybe<Report_UserCreateInput>
 *   disconnect?: InputMaybe<UserKeyFilter>
 *   reconnect?: InputMaybe<UserKeyFilter>
 *   update?: InputMaybe<Report_UserUpdateInput>
 * }
 * 
 * export type 
 * 
 * 
 * 
 * export type ReportKeyFilter = {
 *   id?: InputMaybe<Scalars['ID']['input']>
 * }
 * 
 * 
 * 
             */

/**
 * Hook to update a Report from the server.
 * @returns {UseMutationResult<boolean, Error, MutationReportUpdateArgs>}
 * @example
 * const {mutate, isPending, isError, mutateAsync} = useUpdateReport();
 * @param {MutationReportUpdateArgs} params
 */

export function useUpdateReport() {
  const { data: session } = useSession();
  const queryClient = useQueryClient();

  return useMutation<boolean, Error, MutationReportUpdateArgs>({
    mutationKey: ['REPORT_UPDATE_MUTATION'],
    mutationFn: async (params) =>
      UseCases.Report.updateReport({
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
