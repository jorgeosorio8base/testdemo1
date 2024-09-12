import { useQuery } from '@tanstack/react-query';
import { useSession } from 'next-auth/react';
import { UseCases } from '../usecases';
import { QueryWorkOrderListArgs, WorkOrderEntity } from '@testdemo1/core';

/*
              Type: WorkOrderEntity

              
      
        

         IWorkOrderEntity {
            Id?: string;
CreatedAt?: string;
UpdatedAt?: string;


Description?: string;
Status?: string;
Priority?: string;
CreatedDate?: string;
CompletionDate?: string;
        }
    
      
            */

/** 
             * Type: QueryWorkOrderListArgs
            undefined
             */

/**
 * Hook to fetch list of WorkOrder from the server.
 *
 * @returns {UseQueryResult<{items: WorkOrderEntity[], count: number} | null>}
 *
 * @example
 * const {data, isError, isLoading, isFetching, refetch} = useWorkOrderList({first: 10});
 *
 * @param {QueryWorkOrderListArgs} variables - The query variables.
 */

export function useWorkOrderList(variables?: QueryWorkOrderListArgs) {
  const { data: session } = useSession();
  return useQuery<{
    items: WorkOrderEntity[];
    count: number;
  } | null>({
    queryKey: ['WORKORDER_LIST_QUERY'],
    queryFn: async () =>
      UseCases.WorkOrder.getWorkOrderList({
        variables: variables || {},
        token: session?.token?.idToken,
      }),
    enabled: !!session?.token?.idToken,
  });
}
