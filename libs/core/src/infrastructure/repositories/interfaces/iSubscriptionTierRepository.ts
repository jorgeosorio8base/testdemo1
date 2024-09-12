import {
  SubscriptionTier,
  QuerySubscriptionTierArgs,
  QuerySubscriptionTierListArgs,
  SubscriptionTierListResponse,
  MutationSubscriptionTierCreateArgs,
  MutationSubscriptionTierDeleteArgs,
  MutationSubscriptionTierUpdateArgs,
  SuccessResponse,
} from '../../../definitions/schema';
import { IRepositoryParams } from './iRepositoryParams';

export interface ISubscriptionTierRepository {
  getSubscriptionTier(
    params: IRepositoryParams<QuerySubscriptionTierArgs>,
  ): Promise<SubscriptionTier | null>;
  getSubscriptionTierList(
    params: IRepositoryParams<QuerySubscriptionTierListArgs>,
  ): Promise<SubscriptionTierListResponse>;
  createSubscriptionTier(
    params: IRepositoryParams<MutationSubscriptionTierCreateArgs>,
  ): Promise<SubscriptionTier | null>;
  deleteSubscriptionTier(
    params: IRepositoryParams<MutationSubscriptionTierDeleteArgs>,
  ): Promise<SuccessResponse | null>;
  updateSubscriptionTier(
    params: IRepositoryParams<MutationSubscriptionTierUpdateArgs>,
  ): Promise<SubscriptionTier | null>;
}
