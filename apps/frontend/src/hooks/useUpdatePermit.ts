import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useSession } from 'next-auth/react';
import { UseCases } from '../usecases';
import { MutationPermitUpdateArgs } from '@testdemo1/core';

/** 
             * Type: MutationPermitUpdateArgs
            {
 *   data: PermitUpdateInput
 *   destroyDetached?: InputMaybe<Scalars['Boolean']['input']>
 *   filter?: InputMaybe<PermitKeyFilter>
 *   force?: InputMaybe<Scalars['Boolean']['input']>
 * }
 * 
 *  PermitUpdateInput = {
 *   building_profile_id?: InputMaybe<PermitBuilding_Profile_IdUpdateRelationInput>
 *   description?: InputMaybe<Scalars['String']['input']>
 *   expiration_date?: InputMaybe<Scalars['DateTime']['input']>
 *   id?: InputMaybe<Scalars['ID']['input']>
 *   issue_date?: InputMaybe<Scalars['DateTime']['input']>
 *   permit_number?: InputMaybe<Scalars['String']['input']>
 * }
 * 
 * 
 * 
 * export type PermitBuilding_Profile_IdUpdateRelationInput = {
 *   connect?: InputMaybe<BuildingProfileKeyFilter>
 *   create?: InputMaybe<Permit_BuildingProfileCreateInput>
 *   disconnect?: InputMaybe<BuildingProfileKeyFilter>
 *   reconnect?: InputMaybe<BuildingProfileKeyFilter>
 *   update?: InputMaybe<Permit_BuildingProfileUpdateInput>
 * }
 * 
 * export type 
 * 
 * 
 * 
 * export type PermitKeyFilter = {
 *   id?: InputMaybe<Scalars['ID']['input']>
 * }
 * 
 * 
 * 
             */

/**
 * Hook to update a Permit from the server.
 * @returns {UseMutationResult<boolean, Error, MutationPermitUpdateArgs>}
 * @example
 * const {mutate, isPending, isError, mutateAsync} = useUpdatePermit();
 * @param {MutationPermitUpdateArgs} params
 */

export function useUpdatePermit() {
  const { data: session } = useSession();
  const queryClient = useQueryClient();

  return useMutation<boolean, Error, MutationPermitUpdateArgs>({
    mutationKey: ['PERMIT_UPDATE_MUTATION'],
    mutationFn: async (params) =>
      UseCases.Permit.updatePermit({
        variables: params,
        token: session?.token?.idToken,
      }),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['PERMIT_LIST_QUERY'],
      });
    },
  });
}
