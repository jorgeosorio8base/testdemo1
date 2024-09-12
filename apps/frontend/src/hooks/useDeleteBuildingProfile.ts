import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useSession } from 'next-auth/react';
import { UseCases } from '../usecases';
import { MutationBuildingProfileDeleteArgs } from '@testdemo1/core';

/** 
             * Type: MutationBuildingProfileDeleteArgs
            {
 *   data?: InputMaybe<BuildingProfileDeleteInput>
 *   filter?: InputMaybe<BuildingProfileKeyFilter>
 *   force?: InputMaybe<Scalars['Boolean']['input']>
 * }
 * 
 * 
 * 
 * 
 * 
 *  BuildingProfileDeleteInput = {
 *   force?: InputMaybe<Scalars['Boolean']['input']>
 *   id?: InputMaybe<Scalars['ID']['input']>
 * }
 * 
 * export type 
 * 
 * export type BuildingProfileKeyFilter = {
 *   id?: InputMaybe<Scalars['ID']['input']>
 * }
 * 
 * 
 * 
             */

/**
 * Hook to delete a BuildingProfile from the server.
 * @returns {UseMutationResult<boolean, Error, MutationBuildingProfileDeleteArgs>}
 * @example
 * const {mutate, isPending, isError, mutateAsync} = useDeleteBuildingProfile();
 * @param {MutationBuildingProfileDeleteArgs} params
 */

export function useDeleteBuildingProfile() {
  const { data: session } = useSession();
  const queryClient = useQueryClient();

  return useMutation<boolean, Error, MutationBuildingProfileDeleteArgs>({
    mutationKey: ['BUILDINGPROFILE_DELETE_MUTATION'],
    mutationFn: async (params) =>
      UseCases.BuildingProfile.deleteBuildingProfile({
        variables: params,
        token: session?.token?.idToken,
      }),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['BUILDINGPROFILE_LIST_QUERY'],
      });
    },
  });
}
