import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useSession } from 'next-auth/react';
import { UseCases } from '../usecases';
import { MutationCertificationDeleteArgs } from '@testdemo1/core';

/** 
             * Type: MutationCertificationDeleteArgs
            {
 *   data?: InputMaybe<CertificationDeleteInput>
 *   filter?: InputMaybe<CertificationKeyFilter>
 *   force?: InputMaybe<Scalars['Boolean']['input']>
 * }
 * 
 * 
 * 
 * 
 * 
 *  CertificationDeleteInput = {
 *   force?: InputMaybe<Scalars['Boolean']['input']>
 *   id?: InputMaybe<Scalars['ID']['input']>
 * }
 * 
 * export type 
 * 
 * export type CertificationKeyFilter = {
 *   id?: InputMaybe<Scalars['ID']['input']>
 * }
 * 
 * 
 * 
             */

/**
 * Hook to delete a Certification from the server.
 * @returns {UseMutationResult<boolean, Error, MutationCertificationDeleteArgs>}
 * @example
 * const {mutate, isPending, isError, mutateAsync} = useDeleteCertification();
 * @param {MutationCertificationDeleteArgs} params
 */

export function useDeleteCertification() {
  const { data: session } = useSession();
  const queryClient = useQueryClient();

  return useMutation<boolean, Error, MutationCertificationDeleteArgs>({
    mutationKey: ['CERTIFICATION_DELETE_MUTATION'],
    mutationFn: async (params) =>
      UseCases.Certification.deleteCertification({
        variables: params,
        token: session?.token?.idToken,
      }),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['CERTIFICATION_LIST_QUERY'],
      });
    },
  });
}
