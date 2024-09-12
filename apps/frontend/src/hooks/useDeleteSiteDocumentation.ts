import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useSession } from 'next-auth/react';
import { UseCases } from '../usecases';
import { MutationSiteDocumentationDeleteArgs } from '@testdemo1/core';

/** 
             * Type: MutationSiteDocumentationDeleteArgs
            {
 *   data?: InputMaybe<SiteDocumentationDeleteInput>
 *   filter?: InputMaybe<SiteDocumentationKeyFilter>
 *   force?: InputMaybe<Scalars['Boolean']['input']>
 * }
 * 
 * 
 * 
 * 
 * 
 *  SiteDocumentationDeleteInput = {
 *   force?: InputMaybe<Scalars['Boolean']['input']>
 *   id?: InputMaybe<Scalars['ID']['input']>
 * }
 * 
 * export type 
 * 
 * export type SiteDocumentationKeyFilter = {
 *   id?: InputMaybe<Scalars['ID']['input']>
 * }
 * 
 * 
 * 
             */

/**
 * Hook to delete a SiteDocumentation from the server.
 * @returns {UseMutationResult<boolean, Error, MutationSiteDocumentationDeleteArgs>}
 * @example
 * const {mutate, isPending, isError, mutateAsync} = useDeleteSiteDocumentation();
 * @param {MutationSiteDocumentationDeleteArgs} params
 */

export function useDeleteSiteDocumentation() {
  const { data: session } = useSession();
  const queryClient = useQueryClient();

  return useMutation<boolean, Error, MutationSiteDocumentationDeleteArgs>({
    mutationKey: ['SITEDOCUMENTATION_DELETE_MUTATION'],
    mutationFn: async (params) =>
      UseCases.SiteDocumentation.deleteSiteDocumentation({
        variables: params,
        token: session?.token?.idToken,
      }),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['SITEDOCUMENTATION_LIST_QUERY'],
      });
    },
  });
}
