import { useQuery, useQueryClient } from '@tanstack/react-query';
import { useSession } from 'next-auth/react';
import { UseCases } from '../usecases';
import {
  QueryIndoorAirQualityArgs,
  IndoorAirQualityEntity,
} from '@testdemo1/core';

/*
              Type: IndoorAirQualityEntity

              
      
        

         IIndoorAirQualityEntity {
            Id?: string;
CreatedAt?: string;
UpdatedAt?: string;


MeasurementDate?: string;
AirQualityLevel?: string;
PollutantLevels?: Record<string, any>;
        }
    
      
            */

/*
            Type: QueryIndoorAirQualityArgs
            {
  id?: InputMaybe<Scalars['ID']['input']>
  withDeleted?: InputMaybe<Scalars['Boolean']['input']>
}




          */

/**
 * Hook to fetch IndoorAirQuality from the server.
 *
 * @returns {UseQueryResult<IndoorAirQualityEntity | null>}
 *
 * @example
 * const {data, isError, isLoading, isFetching, refetch} = useIndoorAirQuality({id: '1'});
 *
 * @param {QueryIndoorAirQualityArgs} variables - The query variables.
 */

export function useIndoorAirQuality(variables: QueryIndoorAirQualityArgs) {
  const { data: session } = useSession();
  return useQuery<IndoorAirQualityEntity | null>({
    queryKey: ['INDOORAIRQUALITY_QUERY'],
    queryFn: async () =>
      UseCases.IndoorAirQuality.getIndoorAirQuality({
        variables,
        token: session?.token?.idToken,
      }),
    enabled: !!session?.token?.idToken,
  });
}
