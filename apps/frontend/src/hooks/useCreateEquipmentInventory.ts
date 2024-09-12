import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useSession } from 'next-auth/react';
import { UseCases } from '../usecases';
import { MutationEquipmentInventoryCreateArgs } from '@testdemo1/core';

/** 
             * Type: MutationEquipmentInventoryCreateArgs
            {
 *   data: EquipmentInventoryCreateInput
 * }
 * 
 *  EquipmentInventoryCreateInput = {
 *   BuildingProfile?: InputMaybe<EquipmentInventoryBuildingProfileRelationInput>
 *   building_profile_id?: InputMaybe<EquipmentInventoryBuilding_Profile_IdRelationInput>
 *   equipment_name?: InputMaybe<Scalars['String']['input']>
 *   equipment_type?: InputMaybe<Scalars['String']['input']>
 *   installation_date?: InputMaybe<Scalars['DateTime']['input']>
 *   last_maintenance_date?: InputMaybe<Scalars['DateTime']['input']>
 * }
 * 
 * 
 * 
 * export type EquipmentInventoryBuildingProfileRelationInput = {
 *   connect?: InputMaybe<Array<BuildingProfileKeyFilter>>
 *   create?: InputMaybe<Array<InputMaybe<Equipment_Inventory_BuildingProfileCreateInput>>>
 * }
 * 
 * export type EquipmentInventoryBuilding_Profile_IdRelationInput = {
 *   connect?: InputMaybe<BuildingProfileKeyFilter>
 *   create?: InputMaybe<EquipmentInventory_BuildingProfileCreateInput>
 * }
 * 
             */

/**
 * Hook to create a EquipmentInventory from the server.
 * @returns {UseMutationResult<boolean, Error, MutationEquipmentInventoryCreateArgs>}
 * @example
 * const {mutate, isPending, isError, mutateAsync} = useCreateEquipmentInventory();
 * @param {MutationEquipmentInventoryCreateArgs} params
 */

export function useCreateEquipmentInventory() {
  const { data: session } = useSession();
  const queryClient = useQueryClient();

  return useMutation<boolean, Error, MutationEquipmentInventoryCreateArgs>({
    mutationKey: ['EQUIPMENTINVENTORY_CREATE_MUTATION'],
    mutationFn: async (params) =>
      UseCases.EquipmentInventory.createEquipmentInventory({
        variables: params,
        token: session?.token?.idToken,
      }),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['EQUIPMENTINVENTORY_LIST_QUERY'],
      });
    },
  });
}
