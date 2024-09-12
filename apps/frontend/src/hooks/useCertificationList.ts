import { useQuery } from '@tanstack/react-query';
import { useSession } from 'next-auth/react';
import { UseCases } from '../usecases';
import {
  QueryCertificationListArgs,
  CertificationEntity,
} from '@testdemo1/core';

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

/** 
             * Type: QueryCertificationListArgs
            undefined
             */

/**
 * Hook to fetch list of Certification from the server.
 *
 * @returns {UseQueryResult<{items: CertificationEntity[], count: number} | null>}
 *
 * @example
 * const {data, isError, isLoading, isFetching, refetch} = useCertificationList({first: 10});
 *
 * @param {QueryCertificationListArgs} variables - The query variables.
 */

export function useCertificationList(variables?: QueryCertificationListArgs) {
  const { data: session } = useSession();
  return useQuery<{
    items: CertificationEntity[];
    count: number;
  } | null>({
    queryKey: ['CERTIFICATION_LIST_QUERY'],
    queryFn: async () =>
      UseCases.Certification.getCertificationList({
        variables: variables || {},
        token: session?.token?.idToken,
      }),
    enabled: !!session?.token?.idToken,
  });
}
