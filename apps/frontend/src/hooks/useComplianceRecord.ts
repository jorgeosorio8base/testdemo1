import { useQuery, useQueryClient } from '@tanstack/react-query';
import { useSession } from 'next-auth/react';
import { UseCases } from '../usecases';
import {
  QueryComplianceRecordArgs,
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

/*
            Type: QueryComplianceRecordArgs
            {
  id?: InputMaybe<Scalars['ID']['input']>
  withDeleted?: InputMaybe<Scalars['Boolean']['input']>
}




          */

/**
 * Hook to fetch ComplianceRecord from the server.
 *
 * @returns {UseQueryResult<ComplianceRecordEntity | null>}
 *
 * @example
 * const {data, isError, isLoading, isFetching, refetch} = useComplianceRecord({id: '1'});
 *
 * @param {QueryComplianceRecordArgs} variables - The query variables.
 */

export function useComplianceRecord(variables: QueryComplianceRecordArgs) {
  const { data: session } = useSession();
  return useQuery<ComplianceRecordEntity | null>({
    queryKey: ['COMPLIANCERECORD_QUERY'],
    queryFn: async () =>
      UseCases.ComplianceRecord.getComplianceRecord({
        variables,
        token: session?.token?.idToken,
      }),
    enabled: !!session?.token?.idToken,
  });
}
