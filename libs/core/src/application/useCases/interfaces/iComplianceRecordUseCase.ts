import {
  QueryComplianceRecordArgs,
  QueryComplianceRecordListArgs,
  MutationComplianceRecordCreateArgs,
  MutationComplianceRecordDeleteArgs,
  MutationComplianceRecordUpdateArgs,
} from '../../../definitions/schema';
import { ComplianceRecordEntity } from '../../../domain';
import { IRepositoryParams } from '../../../infrastructure';

export interface IComplianceRecordUseCase {
  getComplianceRecord(
    params: IRepositoryParams<QueryComplianceRecordArgs>,
  ): Promise<ComplianceRecordEntity | null>;
  getComplianceRecordList(
    params: IRepositoryParams<QueryComplianceRecordListArgs>,
  ): Promise<{
    count: number;
    items: Array<ComplianceRecordEntity>;
  }>;
  createComplianceRecord(
    params: IRepositoryParams<MutationComplianceRecordCreateArgs>,
  ): Promise<boolean>;
  deleteComplianceRecord(
    params: IRepositoryParams<MutationComplianceRecordDeleteArgs>,
  ): Promise<boolean>;
  updateComplianceRecord(
    params: IRepositoryParams<MutationComplianceRecordUpdateArgs>,
  ): Promise<boolean>;
}
