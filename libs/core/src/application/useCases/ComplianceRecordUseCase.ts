import { IComplianceRecordUseCase } from './interfaces';
import { ComplianceRecordEntity } from '../../domain';
import {
  QueryComplianceRecordArgs,
  QueryComplianceRecordListArgs,
  MutationComplianceRecordCreateArgs,
  MutationComplianceRecordDeleteArgs,
  MutationComplianceRecordUpdateArgs,
} from '../../definitions/schema';
import {
  IComplianceRecordRepository,
  ComplianceRecordRepository,
  IRepositoryParams,
} from '../../infrastructure';

export class ComplianceRecordUseCase implements IComplianceRecordUseCase {
  private readonly repository: IComplianceRecordRepository;
  private readonly errorCatcher: (error: unknown, methodName: string) => never;

  constructor() {
    this.repository = new ComplianceRecordRepository();
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

  async getComplianceRecord(
    params: IRepositoryParams<QueryComplianceRecordArgs>,
  ): Promise<ComplianceRecordEntity | null> {
    try {
      return this.repository
        .getComplianceRecord(params)
        .then((result) => new ComplianceRecordEntity(result))
        .catch((err) => this.errorCatcher(err, 'getComplianceRecord'));
    } catch (error) {
      this.errorCatcher(error, 'getComplianceRecord');
    }
  }

  async getComplianceRecordList(
    params: IRepositoryParams<QueryComplianceRecordListArgs>,
  ): Promise<{
    count: number;
    items: Array<ComplianceRecordEntity>;
  }> {
    try {
      return this.repository
        .getComplianceRecordList(params)
        .then((result) => {
          return {
            count: result?.count || 0,
            items:
              result?.items?.map((item) => new ComplianceRecordEntity(item)) ||
              [],
          };
        })
        .catch((err) => this.errorCatcher(err, 'getComplianceRecordList'));
    } catch (error) {
      this.errorCatcher(error, 'getComplianceRecordList');
    }
  }

  async createComplianceRecord(
    params: IRepositoryParams<MutationComplianceRecordCreateArgs>,
  ): Promise<boolean> {
    try {
      return this.repository
        .createComplianceRecord(params)
        .then((result) => !!result?.id)
        .catch((err) => this.errorCatcher(err, 'createComplianceRecord'));
    } catch (error) {
      this.errorCatcher(error, 'createComplianceRecord');
    }
  }

  async deleteComplianceRecord(
    params: IRepositoryParams<MutationComplianceRecordDeleteArgs>,
  ): Promise<boolean> {
    try {
      return this.repository
        .deleteComplianceRecord(params)
        .then((result) => !!result?.success)
        .catch((err) => this.errorCatcher(err, 'deleteComplianceRecord'));
    } catch (error) {
      this.errorCatcher(error, 'deleteComplianceRecord');
    }
  }

  async updateComplianceRecord(
    params: IRepositoryParams<MutationComplianceRecordUpdateArgs>,
  ): Promise<boolean> {
    try {
      return this.repository
        .updateComplianceRecord(params)
        .then((result) => !!result?.id)
        .catch((err) => this.errorCatcher(err, 'updateComplianceRecord'));
    } catch (error) {
      this.errorCatcher(error, 'updateComplianceRecord');
    }
  }
}
