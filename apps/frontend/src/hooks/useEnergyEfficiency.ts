import { useQuery, useQueryClient } from '@tanstack/react-query';
import { useSession } from 'next-auth/react';
import { UseCases } from '../usecases';
import {
  QueryEnergyEfficiencyArgs,
  EnergyEfficiencyEntity,
} from '@testdemo1/core';

/*
              Type: EnergyEfficiencyEntity

              
      
        

         IEnergyEfficiencyEntity {
            Id?: string;
CreatedAt?: string;
UpdatedAt?: string;


MeasurementDate?: string;
EnergyConsumption?: number;
EnergyCost?: number;
EfficiencyRating?: string;
        }
    
      
            */

/*
            Type: QueryEnergyEfficiencyArgs
            {
  id?: InputMaybe<Scalars['ID']['input']>
  withDeleted?: InputMaybe<Scalars['Boolean']['input']>
}




          */

/**
 * Hook to fetch EnergyEfficiency from the server.
 *
 * @returns {UseQueryResult<EnergyEfficiencyEntity | null>}
 *
 * @example
 * const {data, isError, isLoading, isFetching, refetch} = useEnergyEfficiency({id: '1'});
 *
 * @param {QueryEnergyEfficiencyArgs} variables - The query variables.
 */

export function useEnergyEfficiency(variables: QueryEnergyEfficiencyArgs) {
  const { data: session } = useSession();
  return useQuery<EnergyEfficiencyEntity | null>({
    queryKey: ['ENERGYEFFICIENCY_QUERY'],
    queryFn: async () =>
      UseCases.EnergyEfficiency.getEnergyEfficiency({
        variables,
        token: session?.token?.idToken,
      }),
    enabled: !!session?.token?.idToken,
  });
}
