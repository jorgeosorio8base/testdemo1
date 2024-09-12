import { useQuery } from '@tanstack/react-query';
import { useSession } from 'next-auth/react';
import { UseCases } from '../usecases';
import {
  QueryMaintenanceRecordListArgs,
  MaintenanceRecordEntity,
} from '@testdemo1/core';

/*
              Type: MaintenanceRecordEntity

              
      
        

         IMaintenanceRecordEntity {
            Id?: string;
CreatedAt?: string;
UpdatedAt?: string;


Description?: string;
DatePerformed?: string;

        }
    
      
            */

/** 
             * Type: QueryMaintenanceRecordListArgs
            undefined
             */

/**
 * Hook to fetch list of MaintenanceRecord from the server.
 *
 * @returns {UseQueryResult<{items: MaintenanceRecordEntity[], count: number} | null>}
 *
 * @example
 * const {data, isError, isLoading, isFetching, refetch} = useMaintenanceRecordList({first: 10});
 *
 * @param {QueryMaintenanceRecordListArgs} variables - The query variables.
 */

export function useMaintenanceRecordList(
  variables?: QueryMaintenanceRecordListArgs,
) {
  const { data: session } = useSession();
  return useQuery<{
    items: MaintenanceRecordEntity[];
    count: number;
  } | null>({
    queryKey: ['MAINTENANCERECORD_LIST_QUERY'],
    queryFn: async () =>
      UseCases.MaintenanceRecord.getMaintenanceRecordList({
        variables: variables || {},
        token: session?.token?.idToken,
      }),
    enabled: !!session?.token?.idToken,
  });
}
