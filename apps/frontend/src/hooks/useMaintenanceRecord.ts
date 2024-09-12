import { useQuery, useQueryClient } from '@tanstack/react-query';
import { useSession } from 'next-auth/react';
import { UseCases } from '../usecases';
import {
  QueryMaintenanceRecordArgs,
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

/*
            Type: QueryMaintenanceRecordArgs
            {
  id?: InputMaybe<Scalars['ID']['input']>
  withDeleted?: InputMaybe<Scalars['Boolean']['input']>
}




          */

/**
 * Hook to fetch MaintenanceRecord from the server.
 *
 * @returns {UseQueryResult<MaintenanceRecordEntity | null>}
 *
 * @example
 * const {data, isError, isLoading, isFetching, refetch} = useMaintenanceRecord({id: '1'});
 *
 * @param {QueryMaintenanceRecordArgs} variables - The query variables.
 */

export function useMaintenanceRecord(variables: QueryMaintenanceRecordArgs) {
  const { data: session } = useSession();
  return useQuery<MaintenanceRecordEntity | null>({
    queryKey: ['MAINTENANCERECORD_QUERY'],
    queryFn: async () =>
      UseCases.MaintenanceRecord.getMaintenanceRecord({
        variables,
        token: session?.token?.idToken,
      }),
    enabled: !!session?.token?.idToken,
  });
}
