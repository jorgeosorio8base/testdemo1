import { IRepositoryParams, IPermitRepository } from './interfaces';
import { Http, IHttp } from '../http';
import { gql } from 'graphql-request';
import { Environment } from '../../environment';
import {
  Permit,
  QueryPermitArgs,
  QueryPermitListArgs,
  PermitListResponse,
  MutationPermitCreateArgs,
  MutationPermitDeleteArgs,
  MutationPermitUpdateArgs,
  SuccessResponse,
} from '../../definitions/schema';

export class PermitRepository implements IPermitRepository {
  private readonly http: IHttp;

  constructor() {
    this.http = new Http();
  }

  async getPermit(
    params: IRepositoryParams<QueryPermitArgs>,
  ): Promise<Permit | null> {
    return this.http
      .requestGraphQL<{
        permit: Permit;
      }>({
        url: Environment.BACKEND_API_URL,
        requestDocument: gql`
          query GET_PERMIT($id: ID) {
            permit(id: $id) {
              id
              createdAt
              updatedAt

              permit_number
              issue_date
              expiration_date
              description
            }
          }
        `,
        token: params.token,
        variables: params.variables,
      })
      ?.then((response) => response.permit)
      ?.catch(() => null);
  }

  async getPermitList(
    params: IRepositoryParams<QueryPermitListArgs>,
  ): Promise<PermitListResponse> {
    return this.http
      .requestGraphQL<{
        permitsList: PermitListResponse;
      }>({
        url: Environment.BACKEND_API_URL,
        requestDocument: gql`
          query GET_PERMIT(
            $first: Int
            $skip: Int
            $filter: PermitFilter
            $sort: [PermitSort!]
          ) {
            permitsList(
              first: $first
              skip: $skip
              filter: $filter
              sort: $sort
            ) {
              items {
                id
                createdAt
                updatedAt

                permit_number
                issue_date
                expiration_date
                description
              }
              count
            }
          }
        `,
        token: params.token,
        variables: params.variables,
      })
      ?.then((response) => response.permitsList);
  }

  async createPermit(
    params: IRepositoryParams<MutationPermitCreateArgs>,
  ): Promise<Permit | null> {
    return this.http
      .requestGraphQL<{
        permitCreate: Permit;
      }>({
        url: Environment.BACKEND_API_URL,
        requestDocument: gql`
          mutation CREATE_PERMIT($data: PermitCreateInput!) {
            permitCreate(data: $data) {
              id
            }
          }
        `,
        token: params.token,
        variables: params.variables,
      })
      ?.then((response) => response.permitCreate)
      ?.catch(() => null);
  }

  async deletePermit(
    params: IRepositoryParams<MutationPermitDeleteArgs>,
  ): Promise<SuccessResponse | null> {
    return this.http
      .requestGraphQL<SuccessResponse>({
        url: Environment.BACKEND_API_URL,
        requestDocument: gql`
          mutation DELETE_PERMIT(
            $data: PermitDeleteInput!
            $filter: PermitKeyFilter
            $force: Boolean
          ) {
            permitDelete(data: $data, filter: $filter, force: $force) {
              success
            }
          }
        `,
        token: params.token,
        variables: params.variables,
      })
      ?.catch(() => null);
  }

  async updatePermit(
    params: IRepositoryParams<MutationPermitUpdateArgs>,
  ): Promise<Permit | null> {
    return this.http
      .requestGraphQL<{
        permitUpdate: Permit;
      }>({
        url: Environment.BACKEND_API_URL,
        requestDocument: gql`
          mutation UPDATE_PERMIT($data: PermitUpdateInput!) {
            permitUpdate(data: $data) {
              id
            }
          }
        `,
        token: params.token,
        variables: params.variables,
      })
      ?.then((response) => response.permitUpdate)
      ?.catch(() => null);
  }
}
