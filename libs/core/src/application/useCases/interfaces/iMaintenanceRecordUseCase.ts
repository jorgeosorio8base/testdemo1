import {
  QueryMaintenanceRecordArgs,
  QueryMaintenanceRecordListArgs,
  MutationMaintenanceRecordCreateArgs,
  MutationMaintenanceRecordDeleteArgs,
  MutationMaintenanceRecordUpdateArgs,
} from '../../../definitions/schema';
import { MaintenanceRecordEntity } from '../../../domain';
import { IRepositoryParams } from '../../../infrastructure';

export interface IMaintenanceRecordUseCase {
  getMaintenanceRecord(
    params: IRepositoryParams<QueryMaintenanceRecordArgs>,
  ): Promise<MaintenanceRecordEntity | null>;
  getMaintenanceRecordList(
    params: IRepositoryParams<QueryMaintenanceRecordListArgs>,
  ): Promise<{
    count: number;
    items: Array<MaintenanceRecordEntity>;
  }>;
  createMaintenanceRecord(
    params: IRepositoryParams<MutationMaintenanceRecordCreateArgs>,
  ): Promise<boolean>;
  deleteMaintenanceRecord(
    params: IRepositoryParams<MutationMaintenanceRecordDeleteArgs>,
  ): Promise<boolean>;
  updateMaintenanceRecord(
    params: IRepositoryParams<MutationMaintenanceRecordUpdateArgs>,
  ): Promise<boolean>;
}
