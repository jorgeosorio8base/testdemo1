import {
  QuerySubscriptionTierArgs,
  QuerySubscriptionTierListArgs,
  MutationSubscriptionTierCreateArgs,
  MutationSubscriptionTierDeleteArgs,
  MutationSubscriptionTierUpdateArgs,
} from '../../../definitions/schema';
import { SubscriptionTierEntity } from '../../../domain';
import { IRepositoryParams } from '../../../infrastructure';

export interface ISubscriptionTierUseCase {
  getSubscriptionTier(
    params: IRepositoryParams<QuerySubscriptionTierArgs>,
  ): Promise<SubscriptionTierEntity | null>;
  getSubscriptionTierList(
    params: IRepositoryParams<QuerySubscriptionTierListArgs>,
  ): Promise<{
    count: number;
    items: Array<SubscriptionTierEntity>;
  }>;
  createSubscriptionTier(
    params: IRepositoryParams<MutationSubscriptionTierCreateArgs>,
  ): Promise<boolean>;
  deleteSubscriptionTier(
    params: IRepositoryParams<MutationSubscriptionTierDeleteArgs>,
  ): Promise<boolean>;
  updateSubscriptionTier(
    params: IRepositoryParams<MutationSubscriptionTierUpdateArgs>,
  ): Promise<boolean>;
}
