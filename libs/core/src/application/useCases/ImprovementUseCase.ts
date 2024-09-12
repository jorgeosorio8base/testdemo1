import { IImprovementUseCase } from './interfaces';
import { ImprovementEntity } from '../../domain';
import {
  QueryImprovementArgs,
  QueryImprovementListArgs,
  MutationImprovementCreateArgs,
  MutationImprovementDeleteArgs,
  MutationImprovementUpdateArgs,
} from '../../definitions/schema';
import {
  IImprovementRepository,
  ImprovementRepository,
  IRepositoryParams,
} from '../../infrastructure';

export class ImprovementUseCase implements IImprovementUseCase {
  private readonly repository: IImprovementRepository;
  private readonly errorCatcher: (error: unknown, methodName: string) => never;

  constructor() {
    this.repository = new ImprovementRepository();
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

  async getImprovement(
    params: IRepositoryParams<QueryImprovementArgs>,
  ): Promise<ImprovementEntity | null> {
    try {
      return this.repository
        .getImprovement(params)
        .then((result) => new ImprovementEntity(result))
        .catch((err) => this.errorCatcher(err, 'getImprovement'));
    } catch (error) {
      this.errorCatcher(error, 'getImprovement');
    }
  }

  async getImprovementList(
    params: IRepositoryParams<QueryImprovementListArgs>,
  ): Promise<{
    count: number;
    items: Array<ImprovementEntity>;
  }> {
    try {
      return this.repository
        .getImprovementList(params)
        .then((result) => {
          return {
            count: result?.count || 0,
            items:
              result?.items?.map((item) => new ImprovementEntity(item)) || [],
          };
        })
        .catch((err) => this.errorCatcher(err, 'getImprovementList'));
    } catch (error) {
      this.errorCatcher(error, 'getImprovementList');
    }
  }

  async createImprovement(
    params: IRepositoryParams<MutationImprovementCreateArgs>,
  ): Promise<boolean> {
    try {
      return this.repository
        .createImprovement(params)
        .then((result) => !!result?.id)
        .catch((err) => this.errorCatcher(err, 'createImprovement'));
    } catch (error) {
      this.errorCatcher(error, 'createImprovement');
    }
  }

  async deleteImprovement(
    params: IRepositoryParams<MutationImprovementDeleteArgs>,
  ): Promise<boolean> {
    try {
      return this.repository
        .deleteImprovement(params)
        .then((result) => !!result?.success)
        .catch((err) => this.errorCatcher(err, 'deleteImprovement'));
    } catch (error) {
      this.errorCatcher(error, 'deleteImprovement');
    }
  }

  async updateImprovement(
    params: IRepositoryParams<MutationImprovementUpdateArgs>,
  ): Promise<boolean> {
    try {
      return this.repository
        .updateImprovement(params)
        .then((result) => !!result?.id)
        .catch((err) => this.errorCatcher(err, 'updateImprovement'));
    } catch (error) {
      this.errorCatcher(error, 'updateImprovement');
    }
  }
}
