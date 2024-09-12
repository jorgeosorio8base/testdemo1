import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useSession } from 'next-auth/react';
import { UseCases } from '../usecases';
import { MutationSearchCriterionCreateArgs } from '@testdemo1/core';

/** 
             * Type: MutationSearchCriterionCreateArgs
            {
 *   data: SearchCriterionCreateInput
 * }
 * 
 *  SearchCriterionCreateInput = {
 *   created_date?: InputMaybe<Scalars['DateTime']['input']>
 *   criteria?: InputMaybe<Scalars['JSON']['input']>
 *   last_modified_date?: InputMaybe<Scalars['DateTime']['input']>
 *   name?: InputMaybe<Scalars['String']['input']>
 *   user_id?: InputMaybe<SearchCriteriaUser_IdRelationInput>
 * }
 * 
 * 
 * 
 * export type SearchCriteriaUser_IdRelationInput = {
 *   connect?: InputMaybe<UserKeyFilter>
 *   create?: InputMaybe<SearchCriteria_UserCreateInput>
 * }
 * 
             */

/**
 * Hook to create a SearchCriteria from the server.
 * @returns {UseMutationResult<boolean, Error, MutationSearchCriterionCreateArgs>}
 * @example
 * const {mutate, isPending, isError, mutateAsync} = useCreateSearchCriteria();
 * @param {MutationSearchCriterionCreateArgs} params
 */

export function useCreateSearchCriteria() {
  const { data: session } = useSession();
  const queryClient = useQueryClient();

  return useMutation<boolean, Error, MutationSearchCriterionCreateArgs>({
    mutationKey: ['SEARCHCRITERIA_CREATE_MUTATION'],
    mutationFn: async (params) =>
      UseCases.SearchCriteria.createSearchCriteria({
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
