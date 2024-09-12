import { IRepositoryParams, IImprovementRepository } from './interfaces';
import { Http, IHttp } from '../http';
import { gql } from 'graphql-request';
import { Environment } from '../../environment';
import {
  Improvement,
  QueryImprovementArgs,
  QueryImprovementListArgs,
  ImprovementListResponse,
  MutationImprovementCreateArgs,
  MutationImprovementDeleteArgs,
  MutationImprovementUpdateArgs,
  SuccessResponse,
} from '../../definitions/schema';

export class ImprovementRepository implements IImprovementRepository {
  private readonly http: IHttp;

  constructor() {
    this.http = new Http();
  }

  async getImprovement(
    params: IRepositoryParams<QueryImprovementArgs>,
  ): Promise<Improvement | null> {
    return this.http
      .requestGraphQL<{
        improvement: Improvement;
      }>({
        url: Environment.BACKEND_API_URL,
        requestDocument: gql`
          query GET_IMPROVEMENT($id: ID) {
            improvement(id: $id) {
              id
              createdAt
              updatedAt

              description
              date_completed
              cost
            }
          }
        `,
        token: params.token,
        variables: params.variables,
      })
      ?.then((response) => response.improvement)
      ?.catch(() => null);
  }

  async getImprovementList(
    params: IRepositoryParams<QueryImprovementListArgs>,
  ): Promise<ImprovementListResponse> {
    return this.http
      .requestGraphQL<{
        improvementsList: ImprovementListResponse;
      }>({
        url: Environment.BACKEND_API_URL,
        requestDocument: gql`
          query GET_IMPROVEMENT(
            $first: Int
            $skip: Int
            $filter: ImprovementFilter
            $sort: [ImprovementSort!]
          ) {
            improvementsList(
              first: $first
              skip: $skip
              filter: $filter
              sort: $sort
            ) {
              items {
                id
                createdAt
                updatedAt

                description
                date_completed
                cost
              }
              count
            }
          }
        `,
        token: params.token,
        variables: params.variables,
      })
      ?.then((response) => response.improvementsList);
  }

  async createImprovement(
    params: IRepositoryParams<MutationImprovementCreateArgs>,
  ): Promise<Improvement | null> {
    return this.http
      .requestGraphQL<{
        improvementCreate: Improvement;
      }>({
        url: Environment.BACKEND_API_URL,
        requestDocument: gql`
          mutation CREATE_IMPROVEMENT($data: ImprovementCreateInput!) {
            improvementCreate(data: $data) {
              id
            }
          }
        `,
        token: params.token,
        variables: params.variables,
      })
      ?.then((response) => response.improvementCreate)
      ?.catch(() => null);
  }

  async deleteImprovement(
    params: IRepositoryParams<MutationImprovementDeleteArgs>,
  ): Promise<SuccessResponse | null> {
    return this.http
      .requestGraphQL<SuccessResponse>({
        url: Environment.BACKEND_API_URL,
        requestDocument: gql`
          mutation DELETE_IMPROVEMENT(
            $data: ImprovementDeleteInput!
            $filter: ImprovementKeyFilter
            $force: Boolean
          ) {
            improvementDelete(data: $data, filter: $filter, force: $force) {
              success
            }
          }
        `,
        token: params.token,
        variables: params.variables,
      })
      ?.catch(() => null);
  }

  async updateImprovement(
    params: IRepositoryParams<MutationImprovementUpdateArgs>,
  ): Promise<Improvement | null> {
    return this.http
      .requestGraphQL<{
        improvementUpdate: Improvement;
      }>({
        url: Environment.BACKEND_API_URL,
        requestDocument: gql`
          mutation UPDATE_IMPROVEMENT($data: ImprovementUpdateInput!) {
            improvementUpdate(data: $data) {
              id
            }
          }
        `,
        token: params.token,
        variables: params.variables,
      })
      ?.then((response) => response.improvementUpdate)
      ?.catch(() => null);
  }
}
