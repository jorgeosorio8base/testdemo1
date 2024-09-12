import {
  ComplianceRecord,
  QueryComplianceRecordArgs,
  QueryComplianceRecordListArgs,
  ComplianceRecordListResponse,
  MutationComplianceRecordCreateArgs,
  MutationComplianceRecordDeleteArgs,
  MutationComplianceRecordUpdateArgs,
  SuccessResponse,
} from '../../../definitions/schema';
import { IRepositoryParams } from './iRepositoryParams';

export interface IComplianceRecordRepository {
  getComplianceRecord(
    params: IRepositoryParams<QueryComplianceRecordArgs>,
  ): Promise<ComplianceRecord | null>;
  getComplianceRecordList(
    params: IRepositoryParams<QueryComplianceRecordListArgs>,
  ): Promise<ComplianceRecordListResponse>;
  createComplianceRecord(
    params: IRepositoryParams<MutationComplianceRecordCreateArgs>,
  ): Promise<ComplianceRecord | null>;
  deleteComplianceRecord(
    params: IRepositoryParams<MutationComplianceRecordDeleteArgs>,
  ): Promise<SuccessResponse | null>;
  updateComplianceRecord(
    params: IRepositoryParams<MutationComplianceRecordUpdateArgs>,
  ): Promise<ComplianceRecord | null>;
}
