import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useSession } from 'next-auth/react';
import { UseCases } from '../usecases';
import { MutationSearchCriterionDeleteArgs } from '@testdemo1/core';

/** 
             * Type: MutationSearchCriterionDeleteArgs
            {
 *   data?: InputMaybe<SearchCriterionDeleteInput>
 *   filter?: InputMaybe<SearchCriterionKeyFilter>
 *   force?: InputMaybe<Scalars['Boolean']['input']>
 * }
 * 
 * 
 * 
 * 
 * 
 *  SearchCriterionDeleteInput = {
 *   force?: InputMaybe<Scalars['Boolean']['input']>
 *   id?: InputMaybe<Scalars['ID']['input']>
 * }
 * 
 * export type 
 * 
 * export type SearchCriterionKeyFilter = {
 *   id?: InputMaybe<Scalars['ID']['input']>
 * }
 * 
 * 
 * 
             */

/**
 * Hook to delete a SearchCriteria from the server.
 * @returns {UseMutationResult<boolean, Error, MutationSearchCriterionDeleteArgs>}
 * @example
 * const {mutate, isPending, isError, mutateAsync} = useDeleteSearchCriteria();
 * @param {MutationSearchCriterionDeleteArgs} params
 */

export function useDeleteSearchCriteria() {
  const { data: session } = useSession();
  const queryClient = useQueryClient();

  return useMutation<boolean, Error, MutationSearchCriterionDeleteArgs>({
    mutationKey: ['SEARCHCRITERIA_DELETE_MUTATION'],
    mutationFn: async (params) =>
      UseCases.SearchCriteria.deleteSearchCriteria({
        variables: params,
        token: session?.token?.idToken,
      }),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['SEARCHCRITERIA_LIST_QUERY'],
      });
    },
  });
}
