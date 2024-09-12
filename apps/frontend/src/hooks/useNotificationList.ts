import { useQuery } from '@tanstack/react-query';
import { useSession } from 'next-auth/react';
import { UseCases } from '../usecases';
import { QueryNotificationListArgs, NotificationEntity } from '@testdemo1/core';

/*
              Type: NotificationEntity

              
      
        

         INotificationEntity {
            Id?: string;
CreatedAt?: string;
UpdatedAt?: string;

Message?: string;
Type?: string;
Read?: any;
CreatedDate?: string;
        }
    
      
            */

/** 
             * Type: QueryNotificationListArgs
            undefined
             */

/**
 * Hook to fetch list of Notification from the server.
 *
 * @returns {UseQueryResult<{items: NotificationEntity[], count: number} | null>}
 *
 * @example
 * const {data, isError, isLoading, isFetching, refetch} = useNotificationList({first: 10});
 *
 * @param {QueryNotificationListArgs} variables - The query variables.
 */

export function useNotificationList(variables?: QueryNotificationListArgs) {
  const { data: session } = useSession();
  return useQuery<{
    items: NotificationEntity[];
    count: number;
  } | null>({
    queryKey: ['NOTIFICATION_LIST_QUERY'],
    queryFn: async () =>
      UseCases.Notification.getNotificationList({
        variables: variables || {},
        token: session?.token?.idToken,
      }),
    enabled: !!session?.token?.idToken,
  });
}
