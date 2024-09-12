import { IEquipmentInventoryUseCase } from './interfaces';
import { EquipmentInventoryEntity } from '../../domain';
import {
  QueryEquipmentInventoryArgs,
  QueryEquipmentInventoriesListArgs,
  MutationEquipmentInventoryCreateArgs,
  MutationEquipmentInventoryDeleteArgs,
  MutationEquipmentInventoryUpdateArgs,
} from '../../definitions/schema';
import {
  IEquipmentInventoryRepository,
  EquipmentInventoryRepository,
  IRepositoryParams,
} from '../../infrastructure';

export class EquipmentInventoryUseCase implements IEquipmentInventoryUseCase {
  private readonly repository: IEquipmentInventoryRepository;
  private readonly errorCatcher: (error: unknown, methodName: string) => never;

  constructor() {
    this.repository = new EquipmentInventoryRepository();
    this.errorCatcher = (error: unknown, methodName: string) => {
      if (error instanceof Error) {
        throw new Error(error.message);
      }

      if (typeof error === 'string') {
        throw new Error(error);
      }

      throw new Error(`An error occurred trying to ${methodName}`);
    };
  }

  async getEquipmentInventory(
    params: IRepositoryParams<QueryEquipmentInventoryArgs>,
  ): Promise<EquipmentInventoryEntity | null> {
    try {
      return this.repository
        .getEquipmentInventory(params)
        .then((result) => new EquipmentInventoryEntity(result))
        .catch((err) => this.errorCatcher(err, 'getEquipmentInventory'));
    } catch (error) {
      this.errorCatcher(error, 'getEquipmentInventory');
    }
  }

  async getEquipmentInventoryList(
    params: IRepositoryParams<QueryEquipmentInventoriesListArgs>,
  ): Promise<{
    count: number;
    items: Array<EquipmentInventoryEntity>;
  }> {
    try {
      return this.repository
        .getEquipmentInventoryList(params)
        .then((result) => {
          return {
            count: result?.count || 0,
            items:
              result?.items?.map(
                (item) => new EquipmentInventoryEntity(item),
              ) || [],
          };
        })
        .catch((err) => this.errorCatcher(err, 'getEquipmentInventoryList'));
    } catch (error) {
      this.errorCatcher(error, 'getEquipmentInventoryList');
    }
  }

  async createEquipmentInventory(
    params: IRepositoryParams<MutationEquipmentInventoryCreateArgs>,
  ): Promise<boolean> {
    try {
      return this.repository
        .createEquipmentInventory(params)
        .then((result) => !!result?.id)
        .catch((err) => this.errorCatcher(err, 'createEquipmentInventory'));
    } catch (error) {
      this.errorCatcher(error, 'createEquipmentInventory');
    }
  }

  async deleteEquipmentInventory(
    params: IRepositoryParams<MutationEquipmentInventoryDeleteArgs>,
  ): Promise<boolean> {
    try {
      return this.repository
        .deleteEquipmentInventory(params)
        .then((result) => !!result?.success)
        .catch((err) => this.errorCatcher(err, 'deleteEquipmentInventory'));
    } catch (error) {
      this.errorCatcher(error, 'deleteEquipmentInventory');
    }
  }

  async updateEquipmentInventory(
    params: IRepositoryParams<MutationEquipmentInventoryUpdateArgs>,
  ): Promise<boolean> {
    try {
      return this.repository
        .updateEquipmentInventory(params)
        .then((result) => !!result?.id)
        .catch((err) => this.errorCatcher(err, 'updateEquipmentInventory'));
    } catch (error) {
      this.errorCatcher(error, 'updateEquipmentInventory');
    }
  }
}
