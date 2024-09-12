import {
  IRepositoryParams,
  IEnvironmentalInformationRepository,
} from './interfaces';
import { Http, IHttp } from '../http';
import { gql } from 'graphql-request';
import { Environment } from '../../environment';
import {
  EnvironmentalInformation,
  QueryEnvironmentalInformationArgs,
  QueryEnvironmentalInformationListArgs,
  EnvironmentalInformationListResponse,
  MutationEnvironmentalInformationCreateArgs,
  MutationEnvironmentalInformationDeleteArgs,
  MutationEnvironmentalInformationUpdateArgs,
  SuccessResponse,
} from '../../definitions/schema';

export class EnvironmentalInformationRepository
  implements IEnvironmentalInformationRepository
{
  private readonly http: IHttp;

  constructor() {
    this.http = new Http();
  }

  async getEnvironmentalInformation(
    params: IRepositoryParams<QueryEnvironmentalInformationArgs>,
  ): Promise<EnvironmentalInformation | null> {
    return this.http
      .requestGraphQL<{
        environmentalInformation: EnvironmentalInformation;
      }>({
        url: Environment.BACKEND_API_URL,
        requestDocument: gql`
          query GET_ENVIRONMENTALINFORMATION($id: ID) {
            environmentalInformation(id: $id) {
              id
              createdAt
              updatedAt

              data_type
              data_value
              measurement_date
            }
          }
        `,
        token: params.token,
        variables: params.variables,
      })
      ?.then((response) => response.environmentalInformation)
      ?.catch(() => null);
  }

  async getEnvironmentalInformationList(
    params: IRepositoryParams<QueryEnvironmentalInformationListArgs>,
  ): Promise<EnvironmentalInformationListResponse> {
    return this.http
      .requestGraphQL<{
        environmentalInformationsList: EnvironmentalInformationListResponse;
      }>({
        url: Environment.BACKEND_API_URL,
        requestDocument: gql`
          query GET_ENVIRONMENTALINFORMATION(
            $first: Int
            $skip: Int
            $filter: EnvironmentalInformationFilter
            $sort: [EnvironmentalInformationSort!]
          ) {
            environmentalInformationsList(
              first: $first
              skip: $skip
              filter: $filter
              sort: $sort
            ) {
              items {
                id
                createdAt
                updatedAt

                data_type
                data_value
                measurement_date
              }
              count
            }
          }
        `,
        token: params.token,
        variables: params.variables,
      })
      ?.then((response) => response.environmentalInformationsList);
  }

  async createEnvironmentalInformation(
    params: IRepositoryParams<MutationEnvironmentalInformationCreateArgs>,
  ): Promise<EnvironmentalInformation | null> {
    return this.http
      .requestGraphQL<{
        environmentalInformationCreate: EnvironmentalInformation;
      }>({
        url: Environment.BACKEND_API_URL,
        requestDocument: gql`
          mutation CREATE_ENVIRONMENTALINFORMATION(
            $data: EnvironmentalInformationCreateInput!
          ) {
            environmentalInformationCreate(data: $data) {
              id
            }
          }
        `,
        token: params.token,
        variables: params.variables,
      })
      ?.then((response) => response.environmentalInformationCreate)
      ?.catch(() => null);
  }

  async deleteEnvironmentalInformation(
    params: IRepositoryParams<MutationEnvironmentalInformationDeleteArgs>,
  ): Promise<SuccessResponse | null> {
    return this.http
      .requestGraphQL<SuccessResponse>({
        url: Environment.BACKEND_API_URL,
        requestDocument: gql`
          mutation DELETE_ENVIRONMENTALINFORMATION(
            $data: EnvironmentalInformationDeleteInput!
            $filter: EnvironmentalInformationKeyFilter
            $force: Boolean
          ) {
            environmentalInformationDelete(
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

  async updateEnvironmentalInformation(
    params: IRepositoryParams<MutationEnvironmentalInformationUpdateArgs>,
  ): Promise<EnvironmentalInformation | null> {
    return this.http
      .requestGraphQL<{
        environmentalInformationUpdate: EnvironmentalInformation;
      }>({
        url: Environment.BACKEND_API_URL,
        requestDocument: gql`
          mutation UPDATE_ENVIRONMENTALINFORMATION(
            $data: EnvironmentalInformationUpdateInput!
          ) {
            environmentalInformationUpdate(data: $data) {
              id
            }
          }
        `,
        token: params.token,
        variables: params.variables,
      })
      ?.then((response) => response.environmentalInformationUpdate)
      ?.catch(() => null);
  }
}
