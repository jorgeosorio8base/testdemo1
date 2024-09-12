import { IReportUseCase } from './interfaces';
import { ReportEntity } from '../../domain';
import {
  QueryReportArgs,
  QueryReportListArgs,
  MutationReportCreateArgs,
  MutationReportDeleteArgs,
  MutationReportUpdateArgs,
} from '../../definitions/schema';
import {
  IReportRepository,
  ReportRepository,
  IRepositoryParams,
} from '../../infrastructure';

export class ReportUseCase implements IReportUseCase {
  private readonly repository: IReportRepository;
  private readonly errorCatcher: (error: unknown, methodName: string) => never;

  constructor() {
    this.repository = new ReportRepository();
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

  async getReport(
    params: IRepositoryParams<QueryReportArgs>,
  ): Promise<ReportEntity | null> {
    try {
      return this.repository
        .getReport(params)
        .then((result) => new ReportEntity(result))
        .catch((err) => this.errorCatcher(err, 'getReport'));
    } catch (error) {
      this.errorCatcher(error, 'getReport');
    }
  }

  async getReportList(params: IRepositoryParams<QueryReportListArgs>): Promise<{
    count: number;
    items: Array<ReportEntity>;
  }> {
    try {
      return this.repository
        .getReportList(params)
        .then((result) => {
          return {
            count: result?.count || 0,
            items: result?.items?.map((item) => new ReportEntity(item)) || [],
          };
        })
        .catch((err) => this.errorCatcher(err, 'getReportList'));
    } catch (error) {
      this.errorCatcher(error, 'getReportList');
    }
  }

  async createReport(
    params: IRepositoryParams<MutationReportCreateArgs>,
  ): Promise<boolean> {
    try {
      return this.repository
        .createReport(params)
        .then((result) => !!result?.id)
        .catch((err) => this.errorCatcher(err, 'createReport'));
    } catch (error) {
      this.errorCatcher(error, 'createReport');
    }
  }

  async deleteReport(
    params: IRepositoryParams<MutationReportDeleteArgs>,
  ): Promise<boolean> {
    try {
      return this.repository
        .deleteReport(params)
        .then((result) => !!result?.success)
        .catch((err) => this.errorCatcher(err, 'deleteReport'));
    } catch (error) {
      this.errorCatcher(error, 'deleteReport');
    }
  }

  async updateReport(
    params: IRepositoryParams<MutationReportUpdateArgs>,
  ): Promise<boolean> {
    try {
      return this.repository
        .updateReport(params)
        .then((result) => !!result?.id)
        .catch((err) => this.errorCatcher(err, 'updateReport'));
    } catch (error) {
      this.errorCatcher(error, 'updateReport');
    }
  }
}
