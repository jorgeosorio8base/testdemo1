import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useSession } from 'next-auth/react';
import { UseCases } from '../usecases';
import { MutationSearchCriterionUpdateArgs } from '@testdemo1/core';

/** 
             * Type: MutationSearchCriterionUpdateArgs
            {
 *   data: SearchCriterionUpdateInput
 *   destroyDetached?: InputMaybe<Scalars['Boolean']['input']>
 *   filter?: InputMaybe<SearchCriterionKeyFilter>
 *   force?: InputMaybe<Scalars['Boolean']['input']>
 * }
 * 
 *  SearchCriterionUpdateInput = {
 *   created_date?: InputMaybe<Scalars['DateTime']['input']>
 *   criteria?: InputMaybe<Scalars['JSON']['input']>
 *   id?: InputMaybe<Scalars['ID']['input']>
 *   last_modified_date?: InputMaybe<Scalars['DateTime']['input']>
 *   name?: InputMaybe<Scalars['String']['input']>
 *   user_id?: InputMaybe<SearchCriteriaUser_IdUpdateRelationInput>
 * }
 * 
 * 
 * 
 * export type SearchCriteriaUser_IdUpdateRelationInput = {
 *   connect?: InputMaybe<UserKeyFilter>
 *   create?: InputMaybe<SearchCriteria_UserCreateInput>
 *   disconnect?: InputMaybe<UserKeyFilter>
 *   reconnect?: InputMaybe<UserKeyFilter>
 *   update?: InputMaybe<SearchCriteria_UserUpdateInput>
 * }
 * 
 * export type 
 * 
 * 
 * 
 * export type SearchCriterionKeyFilter = {
 *   id?: InputMaybe<Scalars['ID']['input']>
 * }
 * 
 * 
 * 
             */

/**
 * Hook to update a SearchCriteria from the server.
 * @returns {UseMutationResult<boolean, Error, MutationSearchCriterionUpdateArgs>}
 * @example
 * const {mutate, isPending, isError, mutateAsync} = useUpdateSearchCriteria();
 * @param {MutationSearchCriterionUpdateArgs} params
 */

export function useUpdateSearchCriteria() {
  const { data: session } = useSession();
  const queryClient = useQueryClient();

  return useMutation<boolean, Error, MutationSearchCriterionUpdateArgs>({
    mutationKey: ['SEARCHCRITERIA_UPDATE_MUTATION'],
    mutationFn: async (params) =>
      UseCases.SearchCriteria.updateSearchCriteria({
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
