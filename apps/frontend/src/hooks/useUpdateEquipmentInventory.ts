import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useSession } from 'next-auth/react';
import { UseCases } from '../usecases';
import { MutationEquipmentInventoryUpdateArgs } from '@testdemo1/core';

/** 
             * Type: MutationEquipmentInventoryUpdateArgs
            {
 *   data: EquipmentInventoryUpdateInput
 *   destroyDetached?: InputMaybe<Scalars['Boolean']['input']>
 *   filter?: InputMaybe<EquipmentInventoryKeyFilter>
 *   force?: InputMaybe<Scalars['Boolean']['input']>
 * }
 * 
 *  EquipmentInventoryUpdateInput = {
 *   BuildingProfile?: InputMaybe<EquipmentInventoryBuildingProfileUpdateRelationInput>
 *   building_profile_id?: InputMaybe<EquipmentInventoryBuilding_Profile_IdUpdateRelationInput>
 *   equipment_name?: InputMaybe<Scalars['String']['input']>
 *   equipment_type?: InputMaybe<Scalars['String']['input']>
 *   id?: InputMaybe<Scalars['ID']['input']>
 *   installation_date?: InputMaybe<Scalars['DateTime']['input']>
 *   last_maintenance_date?: InputMaybe<Scalars['DateTime']['input']>
 * }
 * 
 * 
 * 
 * export type EquipmentInventoryBuildingProfileUpdateRelationInput = {
 *   connect?: InputMaybe<Array<BuildingProfileKeyFilter>>
 *   create?: InputMaybe<Array<InputMaybe<Equipment_Inventory_BuildingProfileCreateInput>>>
 *   disconnect?: InputMaybe<Array<BuildingProfileKeyFilter>>
 *   reconnect?: InputMaybe<Array<BuildingProfileKeyFilter>>
 *   update?: InputMaybe<Array<InputMaybe<Equipment_Inventory_BuildingProfileUpdateInput>>>
 * }
 * 
 * export type EquipmentInventoryBuilding_Profile_IdUpdateRelationInput = {
 *   connect?: InputMaybe<BuildingProfileKeyFilter>
 *   create?: InputMaybe<EquipmentInventory_BuildingProfileCreateInput>
 *   disconnect?: InputMaybe<BuildingProfileKeyFilter>
 *   reconnect?: InputMaybe<BuildingProfileKeyFilter>
 *   update?: InputMaybe<EquipmentInventory_BuildingProfileUpdateInput>
 * }
 * 
 * export type 
 * 
 * 
 * 
 * export type EquipmentInventoryKeyFilter = {
 *   id?: InputMaybe<Scalars['ID']['input']>
 * }
 * 
 * 
 * 
             */

/**
 * Hook to update a EquipmentInventory from the server.
 * @returns {UseMutationResult<boolean, Error, MutationEquipmentInventoryUpdateArgs>}
 * @example
 * const {mutate, isPending, isError, mutateAsync} = useUpdateEquipmentInventory();
 * @param {MutationEquipmentInventoryUpdateArgs} params
 */

export function useUpdateEquipmentInventory() {
  const { data: session } = useSession();
  const queryClient = useQueryClient();

  return useMutation<boolean, Error, MutationEquipmentInventoryUpdateArgs>({
    mutationKey: ['EQUIPMENTINVENTORY_UPDATE_MUTATION'],
    mutationFn: async (params) =>
      UseCases.EquipmentInventory.updateEquipmentInventory({
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
