import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useSession } from 'next-auth/react';
import { UseCases } from '../usecases';
import { MutationEquipmentInventoryDeleteArgs } from '@testdemo1/core';

/** 
             * Type: MutationEquipmentInventoryDeleteArgs
            {
 *   data?: InputMaybe<EquipmentInventoryDeleteInput>
 *   filter?: InputMaybe<EquipmentInventoryKeyFilter>
 *   force?: InputMaybe<Scalars['Boolean']['input']>
 * }
 * 
 * 
 * 
 * 
 * 
 *  EquipmentInventoryDeleteInput = {
 *   force?: InputMaybe<Scalars['Boolean']['input']>
 *   id?: InputMaybe<Scalars['ID']['input']>
 * }
 * 
 * export type 
 * 
 * export type EquipmentInventoryKeyFilter = {
 *   id?: InputMaybe<Scalars['ID']['input']>
 * }
 * 
 * 
 * 
             */

/**
 * Hook to delete a EquipmentInventory from the server.
 * @returns {UseMutationResult<boolean, Error, MutationEquipmentInventoryDeleteArgs>}
 * @example
 * const {mutate, isPending, isError, mutateAsync} = useDeleteEquipmentInventory();
 * @param {MutationEquipmentInventoryDeleteArgs} params
 */

export function useDeleteEquipmentInventory() {
  const { data: session } = useSession();
  const queryClient = useQueryClient();

  return useMutation<boolean, Error, MutationEquipmentInventoryDeleteArgs>({
    mutationKey: ['EQUIPMENTINVENTORY_DELETE_MUTATION'],
    mutationFn: async (params) =>
      UseCases.EquipmentInventory.deleteEquipmentInventory({
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
