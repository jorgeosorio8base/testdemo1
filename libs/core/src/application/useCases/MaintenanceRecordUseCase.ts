import { IMaintenanceRecordUseCase } from './interfaces';
import { MaintenanceRecordEntity } from '../../domain';
import {
  QueryMaintenanceRecordArgs,
  QueryMaintenanceRecordListArgs,
  MutationMaintenanceRecordCreateArgs,
  MutationMaintenanceRecordDeleteArgs,
  MutationMaintenanceRecordUpdateArgs,
} from '../../definitions/schema';
import {
  IMaintenanceRecordRepository,
  MaintenanceRecordRepository,
  IRepositoryParams,
} from '../../infrastructure';

export class MaintenanceRecordUseCase implements IMaintenanceRecordUseCase {
  private readonly repository: IMaintenanceRecordRepository;
  private readonly errorCatcher: (error: unknown, methodName: string) => never;

  constructor() {
    this.repository = new MaintenanceRecordRepository();
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

  async getMaintenanceRecord(
    params: IRepositoryParams<QueryMaintenanceRecordArgs>,
  ): Promise<MaintenanceRecordEntity | null> {
    try {
      return this.repository
        .getMaintenanceRecord(params)
        .then((result) => new MaintenanceRecordEntity(result))
        .catch((err) => this.errorCatcher(err, 'getMaintenanceRecord'));
    } catch (error) {
      this.errorCatcher(error, 'getMaintenanceRecord');
    }
  }

  async getMaintenanceRecordList(
    params: IRepositoryParams<QueryMaintenanceRecordListArgs>,
  ): Promise<{
    count: number;
    items: Array<MaintenanceRecordEntity>;
  }> {
    try {
      return this.repository
        .getMaintenanceRecordList(params)
        .then((result) => {
          return {
            count: result?.count || 0,
            items:
              result?.items?.map((item) => new MaintenanceRecordEntity(item)) ||
              [],
          };
        })
        .catch((err) => this.errorCatcher(err, 'getMaintenanceRecordList'));
    } catch (error) {
      this.errorCatcher(error, 'getMaintenanceRecordList');
    }
  }

  async createMaintenanceRecord(
    params: IRepositoryParams<MutationMaintenanceRecordCreateArgs>,
  ): Promise<boolean> {
    try {
      return this.repository
        .createMaintenanceRecord(params)
        .then((result) => !!result?.id)
        .catch((err) => this.errorCatcher(err, 'createMaintenanceRecord'));
    } catch (error) {
      this.errorCatcher(error, 'createMaintenanceRecord');
    }
  }

  async deleteMaintenanceRecord(
    params: IRepositoryParams<MutationMaintenanceRecordDeleteArgs>,
  ): Promise<boolean> {
    try {
      return this.repository
        .deleteMaintenanceRecord(params)
        .then((result) => !!result?.success)
        .catch((err) => this.errorCatcher(err, 'deleteMaintenanceRecord'));
    } catch (error) {
      this.errorCatcher(error, 'deleteMaintenanceRecord');
    }
  }

  async updateMaintenanceRecord(
    params: IRepositoryParams<MutationMaintenanceRecordUpdateArgs>,
  ): Promise<boolean> {
    try {
      return this.repository
        .updateMaintenanceRecord(params)
        .then((result) => !!result?.id)
        .catch((err) => this.errorCatcher(err, 'updateMaintenanceRecord'));
    } catch (error) {
      this.errorCatcher(error, 'updateMaintenanceRecord');
    }
  }
}
