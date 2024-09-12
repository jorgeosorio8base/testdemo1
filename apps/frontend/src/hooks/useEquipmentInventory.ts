import { useQuery, useQueryClient } from '@tanstack/react-query';
import { useSession } from 'next-auth/react';
import { UseCases } from '../usecases';
import {
  QueryEquipmentInventoryArgs,
  EquipmentInventoryEntity,
} from '@testdemo1/core';

/*
              Type: EquipmentInventoryEntity

              
      
        

         IEquipmentInventoryEntity {
            Id?: string;
CreatedAt?: string;
UpdatedAt?: string;


EquipmentName?: string;
EquipmentType?: string;
InstallationDate?: string;
LastMaintenanceDate?: string;
        }
    
      
            */

/*
            Type: QueryEquipmentInventoryArgs
            {
  id?: InputMaybe<Scalars['ID']['input']>
  withDeleted?: InputMaybe<Scalars['Boolean']['input']>
}




          */

/**
 * Hook to fetch EquipmentInventory from the server.
 *
 * @returns {UseQueryResult<EquipmentInventoryEntity | null>}
 *
 * @example
 * const {data, isError, isLoading, isFetching, refetch} = useEquipmentInventory({id: '1'});
 *
 * @param {QueryEquipmentInventoryArgs} variables - The query variables.
 */

export function useEquipmentInventory(variables: QueryEquipmentInventoryArgs) {
  const { data: session } = useSession();
  return useQuery<EquipmentInventoryEntity | null>({
    queryKey: ['EQUIPMENTINVENTORY_QUERY'],
    queryFn: async () =>
      UseCases.EquipmentInventory.getEquipmentInventory({
        variables,
        token: session?.token?.idToken,
      }),
    enabled: !!session?.token?.idToken,
  });
}
