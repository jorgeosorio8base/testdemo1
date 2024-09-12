import { useQuery, useQueryClient } from '@tanstack/react-query';
import { useSession } from 'next-auth/react';
import { UseCases } from '../usecases';
import { QueryCertificationArgs, CertificationEntity } from '@testdemo1/core';

/*
              Type: CertificationEntity

              
      
        

         ICertificationEntity {
            Id?: string;
CreatedAt?: string;
UpdatedAt?: string;


CertificationType?: string;
IssueDate?: string;
ExpirationDate?: string;
Description?: string;
        }
    
      
            */

/*
            Type: QueryCertificationArgs
            {
  id?: InputMaybe<Scalars['ID']['input']>
  withDeleted?: InputMaybe<Scalars['Boolean']['input']>
}




          */

/**
 * Hook to fetch Certification from the server.
 *
 * @returns {UseQueryResult<CertificationEntity | null>}
 *
 * @example
 * const {data, isError, isLoading, isFetching, refetch} = useCertification({id: '1'});
 *
 * @param {QueryCertificationArgs} variables - The query variables.
 */

export function useCertification(variables: QueryCertificationArgs) {
  const { data: session } = useSession();
  return useQuery<CertificationEntity | null>({
    queryKey: ['CERTIFICATION_QUERY'],
    queryFn: async () =>
      UseCases.Certification.getCertification({
        variables,
        token: session?.token?.idToken,
      }),
    enabled: !!session?.token?.idToken,
  });
}
