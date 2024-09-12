import { IRepositoryParams, ISubscriptionTierRepository } from './interfaces';
import { Http, IHttp } from '../http';
import { gql } from 'graphql-request';
import { Environment } from '../../environment';
import {
  SubscriptionTier,
  QuerySubscriptionTierArgs,
  QuerySubscriptionTierListArgs,
  SubscriptionTierListResponse,
  MutationSubscriptionTierCreateArgs,
  MutationSubscriptionTierDeleteArgs,
  MutationSubscriptionTierUpdateArgs,
  SuccessResponse,
} from '../../definitions/schema';

export class SubscriptionTierRepository implements ISubscriptionTierRepository {
  private readonly http: IHttp;

  constructor() {
    this.http = new Http();
  }

  async getSubscriptionTier(
    params: IRepositoryParams<QuerySubscriptionTierArgs>,
  ): Promise<SubscriptionTier | null> {
    return this.http
      .requestGraphQL<{
        subscriptionTier: SubscriptionTier;
      }>({
        url: Environment.BACKEND_API_URL,
        requestDocument: gql`
          query GET_SUBSCRIPTIONTIER($id: ID, $name: String) {
            subscriptionTier(id: $id, name: $name) {
              id
              createdAt
              updatedAt
              name
              description
              price
              features
            }
          }
        `,
        token: params.token,
        variables: params.variables,
      })
      ?.then((response) => response.subscriptionTier)
      ?.catch(() => null);
  }

  async getSubscriptionTierList(
    params: IRepositoryParams<QuerySubscriptionTierListArgs>,
  ): Promise<SubscriptionTierListResponse> {
    return this.http
      .requestGraphQL<{
        subscriptionTiersList: SubscriptionTierListResponse;
      }>({
        url: Environment.BACKEND_API_URL,
        requestDocument: gql`
          query GET_SUBSCRIPTIONTIER(
            $first: Int
            $skip: Int
            $filter: SubscriptionTierFilter
            $sort: [SubscriptionTierSort!]
          ) {
            subscriptionTiersList(
              first: $first
              skip: $skip
              filter: $filter
              sort: $sort
            ) {
              items {
                id
                createdAt
                updatedAt
                name
                description
                price
                features
              }
              count
            }
          }
        `,
        token: params.token,
        variables: params.variables,
      })
      ?.then((response) => response.subscriptionTiersList);
  }

  async createSubscriptionTier(
    params: IRepositoryParams<MutationSubscriptionTierCreateArgs>,
  ): Promise<SubscriptionTier | null> {
    return this.http
      .requestGraphQL<{
        subscriptionTierCreate: SubscriptionTier;
      }>({
        url: Environment.BACKEND_API_URL,
        requestDocument: gql`
          mutation CREATE_SUBSCRIPTIONTIER(
            $data: SubscriptionTierCreateInput!
          ) {
            subscriptionTierCreate(data: $data) {
              id
            }
          }
        `,
        token: params.token,
        variables: params.variables,
      })
      ?.then((response) => response.subscriptionTierCreate)
      ?.catch(() => null);
  }

  async deleteSubscriptionTier(
    params: IRepositoryParams<MutationSubscriptionTierDeleteArgs>,
  ): Promise<SuccessResponse | null> {
    return this.http
      .requestGraphQL<SuccessResponse>({
        url: Environment.BACKEND_API_URL,
        requestDocument: gql`
          mutation DELETE_SUBSCRIPTIONTIER(
            $data: SubscriptionTierDeleteInput!
            $filter: SubscriptionTierKeyFilter
            $force: Boolean
          ) {
            subscriptionTierDelete(
              data: $data
              filter: $filter
              force: $force
            ) {
              success
            }
          }
        `,
        token: params.token,
        variables: params.variables,
      })
      ?.catch(() => null);
  }

  async updateSubscriptionTier(
    params: IRepositoryParams<MutationSubscriptionTierUpdateArgs>,
  ): Promise<SubscriptionTier | null> {
    return this.http
      .requestGraphQL<{
        subscriptionTierUpdate: SubscriptionTier;
      }>({
        url: Environment.BACKEND_API_URL,
        requestDocument: gql`
          mutation UPDATE_SUBSCRIPTIONTIER(
            $data: SubscriptionTierUpdateInput!
          ) {
            subscriptionTierUpdate(data: $data) {
              id
            }
          }
        `,
        token: params.token,
        variables: params.variables,
      })
      ?.then((response) => response.subscriptionTierUpdate)
      ?.catch(() => null);
  }
}
