import { useQuery } from '@tanstack/react-query';
import { useSession } from 'next-auth/react';
import { UseCases } from '../usecases';
import {
  QueryComplianceRecordListArgs,
  ComplianceRecordEntity,
} from '@testdemo1/core';

/*
              Type: ComplianceRecordEntity

              
      
        

         IComplianceRecordEntity {
            Id?: string;
CreatedAt?: string;
UpdatedAt?: string;


ComplianceType?: string;
Status?: string;
IssueDate?: string;
ExpirationDate?: string;
Description?: string;
        }
    
      
            */

/** 
             * Type: QueryComplianceRecordListArgs
            undefined
             */

/**
 * Hook to fetch list of ComplianceRecord from the server.
 *
 * @returns {UseQueryResult<{items: ComplianceRecordEntity[], count: number} | null>}
 *
 * @example
 * const {data, isError, isLoading, isFetching, refetch} = useComplianceRecordList({first: 10});
 *
 * @param {QueryComplianceRecordListArgs} variables - The query variables.
 */

export function useComplianceRecordList(
  variables?: QueryComplianceRecordListArgs,
) {
  const { data: session } = useSession();
  return useQuery<{
    items: ComplianceRecordEntity[];
    count: number;
  } | null>({
    queryKey: ['COMPLIANCERECORD_LIST_QUERY'],
    queryFn: async () =>
      UseCases.ComplianceRecord.getComplianceRecordList({
        variables: variables || {},
        token: session?.token?.idToken,
      }),
    enabled: !!session?.token?.idToken,
  });
}
