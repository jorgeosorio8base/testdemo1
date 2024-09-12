import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useSession } from 'next-auth/react';
import { UseCases } from '../usecases';
import { MutationIndoorAirQualityDeleteArgs } from '@testdemo1/core';

/** 
             * Type: MutationIndoorAirQualityDeleteArgs
            {
 *   data?: InputMaybe<IndoorAirQualityDeleteInput>
 *   filter?: InputMaybe<IndoorAirQualityKeyFilter>
 *   force?: InputMaybe<Scalars['Boolean']['input']>
 * }
 * 
 * 
 * 
 * 
 * 
 *  IndoorAirQualityDeleteInput = {
 *   force?: InputMaybe<Scalars['Boolean']['input']>
 *   id?: InputMaybe<Scalars['ID']['input']>
 * }
 * 
 * export type 
 * 
 * export type IndoorAirQualityKeyFilter = {
 *   id?: InputMaybe<Scalars['ID']['input']>
 * }
 * 
 * 
 * 
             */

/**
 * Hook to delete a IndoorAirQuality from the server.
 * @returns {UseMutationResult<boolean, Error, MutationIndoorAirQualityDeleteArgs>}
 * @example
 * const {mutate, isPending, isError, mutateAsync} = useDeleteIndoorAirQuality();
 * @param {MutationIndoorAirQualityDeleteArgs} params
 */

export function useDeleteIndoorAirQuality() {
  const { data: session } = useSession();
  const queryClient = useQueryClient();

  return useMutation<boolean, Error, MutationIndoorAirQualityDeleteArgs>({
    mutationKey: ['INDOORAIRQUALITY_DELETE_MUTATION'],
    mutationFn: async (params) =>
      UseCases.IndoorAirQuality.deleteIndoorAirQuality({
        variables: params,
        token: session?.token?.idToken,
      }),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['INDOORAIRQUALITY_LIST_QUERY'],
      });
    },
  });
}
