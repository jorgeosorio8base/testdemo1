import { useQuery } from '@tanstack/react-query';
import { useSession } from 'next-auth/react';
import { UseCases } from '../usecases';
import {
  QueryEnvironmentalInformationListArgs,
  EnvironmentalInformationEntity,
} from '@testdemo1/core';

/*
              Type: EnvironmentalInformationEntity

              
      
        

         IEnvironmentalInformationEntity {
            Id?: string;
CreatedAt?: string;
UpdatedAt?: string;


DataType?: string;
DataValue?: string;
MeasurementDate?: string;
        }
    
      
            */

/** 
             * Type: QueryEnvironmentalInformationListArgs
            undefined
             */

/**
 * Hook to fetch list of EnvironmentalInformation from the server.
 *
 * @returns {UseQueryResult<{items: EnvironmentalInformationEntity[], count: number} | null>}
 *
 * @example
 * const {data, isError, isLoading, isFetching, refetch} = useEnvironmentalInformationList({first: 10});
 *
 * @param {QueryEnvironmentalInformationListArgs} variables - The query variables.
 */

export function useEnvironmentalInformationList(
  variables?: QueryEnvironmentalInformationListArgs,
) {
  const { data: session } = useSession();
  return useQuery<{
    items: EnvironmentalInformationEntity[];
    count: number;
  } | null>({
    queryKey: ['ENVIRONMENTALINFORMATION_LIST_QUERY'],
    queryFn: async () =>
      UseCases.EnvironmentalInformation.getEnvironmentalInformationList({
        variables: variables || {},
        token: session?.token?.idToken,
      }),
    enabled: !!session?.token?.idToken,
  });
}
