import {
  EquipmentInventory,
  QueryEquipmentInventoryArgs,
  QueryEquipmentInventoriesListArgs,
  EquipmentInventoryListResponse,
  MutationEquipmentInventoryCreateArgs,
  MutationEquipmentInventoryDeleteArgs,
  MutationEquipmentInventoryUpdateArgs,
  SuccessResponse,
} from '../../../definitions/schema';
import { IRepositoryParams } from './iRepositoryParams';

export interface IEquipmentInventoryRepository {
  getEquipmentInventory(
    params: IRepositoryParams<QueryEquipmentInventoryArgs>,
  ): Promise<EquipmentInventory | null>;
  getEquipmentInventoryList(
    params: IRepositoryParams<QueryEquipmentInventoriesListArgs>,
  ): Promise<EquipmentInventoryListResponse>;
  createEquipmentInventory(
    params: IRepositoryParams<MutationEquipmentInventoryCreateArgs>,
  ): Promise<EquipmentInventory | null>;
  deleteEquipmentInventory(
    params: IRepositoryParams<MutationEquipmentInventoryDeleteArgs>,
  ): Promise<SuccessResponse | null>;
  updateEquipmentInventory(
    params: IRepositoryParams<MutationEquipmentInventoryUpdateArgs>,
  ): Promise<EquipmentInventory | null>;
}
