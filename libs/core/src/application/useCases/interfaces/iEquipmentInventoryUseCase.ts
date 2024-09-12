import {
  QueryEquipmentInventoryArgs,
  QueryEquipmentInventoriesListArgs,
  MutationEquipmentInventoryCreateArgs,
  MutationEquipmentInventoryDeleteArgs,
  MutationEquipmentInventoryUpdateArgs,
} from '../../../definitions/schema';
import { EquipmentInventoryEntity } from '../../../domain';
import { IRepositoryParams } from '../../../infrastructure';

export interface IEquipmentInventoryUseCase {
  getEquipmentInventory(
    params: IRepositoryParams<QueryEquipmentInventoryArgs>,
  ): Promise<EquipmentInventoryEntity | null>;
  getEquipmentInventoryList(
    params: IRepositoryParams<QueryEquipmentInventoriesListArgs>,
  ): Promise<{
    count: number;
    items: Array<EquipmentInventoryEntity>;
  }>;
  createEquipmentInventory(
    params: IRepositoryParams<MutationEquipmentInventoryCreateArgs>,
  ): Promise<boolean>;
  deleteEquipmentInventory(
    params: IRepositoryParams<MutationEquipmentInventoryDeleteArgs>,
  ): Promise<boolean>;
  updateEquipmentInventory(
    params: IRepositoryParams<MutationEquipmentInventoryUpdateArgs>,
  ): Promise<boolean>;
}
