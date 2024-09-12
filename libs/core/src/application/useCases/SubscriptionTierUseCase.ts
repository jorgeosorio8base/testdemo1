import { ISubscriptionTierUseCase } from './interfaces';
import { SubscriptionTierEntity } from '../../domain';
import {
  QuerySubscriptionTierArgs,
  QuerySubscriptionTierListArgs,
  MutationSubscriptionTierCreateArgs,
  MutationSubscriptionTierDeleteArgs,
  MutationSubscriptionTierUpdateArgs,
} from '../../definitions/schema';
import {
  ISubscriptionTierRepository,
  SubscriptionTierRepository,
  IRepositoryParams,
} from '../../infrastructure';

export class SubscriptionTierUseCase implements ISubscriptionTierUseCase {
  private readonly repository: ISubscriptionTierRepository;
  private readonly errorCatcher: (error: unknown, methodName: string) => never;

  constructor() {
    this.repository = new SubscriptionTierRepository();
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

  async getSubscriptionTier(
    params: IRepositoryParams<QuerySubscriptionTierArgs>,
  ): Promise<SubscriptionTierEntity | null> {
    try {
      return this.repository
        .getSubscriptionTier(params)
        .then((result) => new SubscriptionTierEntity(result))
        .catch((err) => this.errorCatcher(err, 'getSubscriptionTier'));
    } catch (error) {
      this.errorCatcher(error, 'getSubscriptionTier');
    }
  }

  async getSubscriptionTierList(
    params: IRepositoryParams<QuerySubscriptionTierListArgs>,
  ): Promise<{
    count: number;
    items: Array<SubscriptionTierEntity>;
  }> {
    try {
      return this.repository
        .getSubscriptionTierList(params)
        .then((result) => {
          return {
            count: result?.count || 0,
            items:
              result?.items?.map((item) => new SubscriptionTierEntity(item)) ||
              [],
          };
        })
        .catch((err) => this.errorCatcher(err, 'getSubscriptionTierList'));
    } catch (error) {
      this.errorCatcher(error, 'getSubscriptionTierList');
    }
  }

  async createSubscriptionTier(
    params: IRepositoryParams<MutationSubscriptionTierCreateArgs>,
  ): Promise<boolean> {
    try {
      return this.repository
        .createSubscriptionTier(params)
        .then((result) => !!result?.id)
        .catch((err) => this.errorCatcher(err, 'createSubscriptionTier'));
    } catch (error) {
      this.errorCatcher(error, 'createSubscriptionTier');
    }
  }

  async deleteSubscriptionTier(
    params: IRepositoryParams<MutationSubscriptionTierDeleteArgs>,
  ): Promise<boolean> {
    try {
      return this.repository
        .deleteSubscriptionTier(params)
        .then((result) => !!result?.success)
        .catch((err) => this.errorCatcher(err, 'deleteSubscriptionTier'));
    } catch (error) {
      this.errorCatcher(error, 'deleteSubscriptionTier');
    }
  }

  async updateSubscriptionTier(
    params: IRepositoryParams<MutationSubscriptionTierUpdateArgs>,
  ): Promise<boolean> {
    try {
      return this.repository
        .updateSubscriptionTier(params)
        .then((result) => !!result?.id)
        .catch((err) => this.errorCatcher(err, 'updateSubscriptionTier'));
    } catch (error) {
      this.errorCatcher(error, 'updateSubscriptionTier');
    }
  }
}
