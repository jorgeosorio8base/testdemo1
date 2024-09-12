import { useQuery, useQueryClient } from '@tanstack/react-query';
import { useSession } from 'next-auth/react';
import { UseCases } from '../usecases';
import {
  QueryEnvironmentalInformationArgs,
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

/*
            Type: QueryEnvironmentalInformationArgs
            {
  id?: InputMaybe<Scalars['ID']['input']>
  withDeleted?: InputMaybe<Scalars['Boolean']['input']>
}




          */

/**
 * Hook to fetch EnvironmentalInformation from the server.
 *
 * @returns {UseQueryResult<EnvironmentalInformationEntity | null>}
 *
 * @example
 * const {data, isError, isLoading, isFetching, refetch} = useEnvironmentalInformation({id: '1'});
 *
 * @param {QueryEnvironmentalInformationArgs} variables - The query variables.
 */

export function useEnvironmentalInformation(
  variables: QueryEnvironmentalInformationArgs,
) {
  const { data: session } = useSession();
  return useQuery<EnvironmentalInformationEntity | null>({
    queryKey: ['ENVIRONMENTALINFORMATION_QUERY'],
    queryFn: async () =>
      UseCases.EnvironmentalInformation.getEnvironmentalInformation({
        variables,
        token: session?.token?.idToken,
      }),
    enabled: !!session?.token?.idToken,
  });
}
