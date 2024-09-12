import { IPermitUseCase } from './interfaces';
import { PermitEntity } from '../../domain';
import {
  QueryPermitArgs,
  QueryPermitListArgs,
  MutationPermitCreateArgs,
  MutationPermitDeleteArgs,
  MutationPermitUpdateArgs,
} from '../../definitions/schema';
import {
  IPermitRepository,
  PermitRepository,
  IRepositoryParams,
} from '../../infrastructure';

export class PermitUseCase implements IPermitUseCase {
  private readonly repository: IPermitRepository;
  private readonly errorCatcher: (error: unknown, methodName: string) => never;

  constructor() {
    this.repository = new PermitRepository();
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

  async getPermit(
    params: IRepositoryParams<QueryPermitArgs>,
  ): Promise<PermitEntity | null> {
    try {
      return this.repository
        .getPermit(params)
        .then((result) => new PermitEntity(result))
        .catch((err) => this.errorCatcher(err, 'getPermit'));
    } catch (error) {
      this.errorCatcher(error, 'getPermit');
    }
  }

  async getPermitList(params: IRepositoryParams<QueryPermitListArgs>): Promise<{
    count: number;
    items: Array<PermitEntity>;
  }> {
    try {
      return this.repository
        .getPermitList(params)
        .then((result) => {
          return {
            count: result?.count || 0,
            items: result?.items?.map((item) => new PermitEntity(item)) || [],
          };
        })
        .catch((err) => this.errorCatcher(err, 'getPermitList'));
    } catch (error) {
      this.errorCatcher(error, 'getPermitList');
    }
  }

  async createPermit(
    params: IRepositoryParams<MutationPermitCreateArgs>,
  ): Promise<boolean> {
    try {
      return this.repository
        .createPermit(params)
        .then((result) => !!result?.id)
        .catch((err) => this.errorCatcher(err, 'createPermit'));
    } catch (error) {
      this.errorCatcher(error, 'createPermit');
    }
  }

  async deletePermit(
    params: IRepositoryParams<MutationPermitDeleteArgs>,
  ): Promise<boolean> {
    try {
      return this.repository
        .deletePermit(params)
        .then((result) => !!result?.success)
        .catch((err) => this.errorCatcher(err, 'deletePermit'));
    } catch (error) {
      this.errorCatcher(error, 'deletePermit');
    }
  }

  async updatePermit(
    params: IRepositoryParams<MutationPermitUpdateArgs>,
  ): Promise<boolean> {
    try {
      return this.repository
        .updatePermit(params)
        .then((result) => !!result?.id)
        .catch((err) => this.errorCatcher(err, 'updatePermit'));
    } catch (error) {
      this.errorCatcher(error, 'updatePermit');
    }
  }
}
