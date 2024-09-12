import { useQuery } from '@tanstack/react-query';
import { useSession } from 'next-auth/react';
import { UseCases } from '../usecases';
import { QueryReportListArgs, ReportEntity } from '@testdemo1/core';

/*
              Type: ReportEntity

              
      
        import { IFileEntity } from './iFileEntity';

         IReportEntity {
            Id?: string;
CreatedAt?: string;
UpdatedAt?: string;

Name?: string;
Description?: string;
Configuration?: Record<string, any>;
GeneratedDate?: string;
File?: IFileEntity;
        }
    
      
            */

/** 
             * Type: QueryReportListArgs
            undefined
             */

/**
 * Hook to fetch list of Report from the server.
 *
 * @returns {UseQueryResult<{items: ReportEntity[], count: number} | null>}
 *
 * @example
 * const {data, isError, isLoading, isFetching, refetch} = useReportList({first: 10});
 *
 * @param {QueryReportListArgs} variables - The query variables.
 */

export function useReportList(variables?: QueryReportListArgs) {
  const { data: session } = useSession();
  return useQuery<{
    items: ReportEntity[];
    count: number;
  } | null>({
    queryKey: ['REPORT_LIST_QUERY'],
    queryFn: async () =>
      UseCases.Report.getReportList({
        variables: variables || {},
        token: session?.token?.idToken,
      }),
    enabled: !!session?.token?.idToken,
  });
}
