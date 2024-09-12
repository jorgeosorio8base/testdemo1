import { IRepositoryParams, IIndoorAirQualityRepository } from './interfaces';
import { Http, IHttp } from '../http';
import { gql } from 'graphql-request';
import { Environment } from '../../environment';
import {
  IndoorAirQuality,
  QueryIndoorAirQualityArgs,
  QueryIndoorAirQualitiesListArgs,
  IndoorAirQualityListResponse,
  MutationIndoorAirQualityCreateArgs,
  MutationIndoorAirQualityDeleteArgs,
  MutationIndoorAirQualityUpdateArgs,
  SuccessResponse,
} from '../../definitions/schema';

export class IndoorAirQualityRepository implements IIndoorAirQualityRepository {
  private readonly http: IHttp;

  constructor() {
    this.http = new Http();
  }

  async getIndoorAirQuality(
    params: IRepositoryParams<QueryIndoorAirQualityArgs>,
  ): Promise<IndoorAirQuality | null> {
    return this.http
      .requestGraphQL<{
        indoorAirQuality: IndoorAirQuality;
      }>({
        url: Environment.BACKEND_API_URL,
        requestDocument: gql`
          query GET_INDOORAIRQUALITY($id: ID) {
            indoorAirQuality(id: $id) {
              id
              createdAt
              updatedAt

              measurement_date
              air_quality_level
              pollutant_levels
            }
          }
        `,
        token: params.token,
        variables: params.variables,
      })
      ?.then((response) => response.indoorAirQuality)
      ?.catch(() => null);
  }

  async getIndoorAirQualityList(
    params: IRepositoryParams<QueryIndoorAirQualitiesListArgs>,
  ): Promise<IndoorAirQualityListResponse> {
    return this.http
      .requestGraphQL<{
        indoorAirQualitiesList: IndoorAirQualityListResponse;
      }>({
        url: Environment.BACKEND_API_URL,
        requestDocument: gql`
          query GET_INDOORAIRQUALITY(
            $first: Int
            $skip: Int
            $filter: IndoorAirQualityFilter
            $sort: [IndoorAirQualitySort!]
          ) {
            indoorAirQualitiesList(
              first: $first
              skip: $skip
              filter: $filter
              sort: $sort
            ) {
              items {
                id
                createdAt
                updatedAt

                measurement_date
                air_quality_level
                pollutant_levels
              }
              count
            }
          }
        `,
        token: params.token,
        variables: params.variables,
      })
      ?.then((response) => response.indoorAirQualitiesList);
  }

  async createIndoorAirQuality(
    params: IRepositoryParams<MutationIndoorAirQualityCreateArgs>,
  ): Promise<IndoorAirQuality | null> {
    return this.http
      .requestGraphQL<{
        indoorAirQualityCreate: IndoorAirQuality;
      }>({
        url: Environment.BACKEND_API_URL,
        requestDocument: gql`
          mutation CREATE_INDOORAIRQUALITY(
            $data: IndoorAirQualityCreateInput!
          ) {
            indoorAirQualityCreate(data: $data) {
              id
            }
          }
        `,
        token: params.token,
        variables: params.variables,
      })
      ?.then((response) => response.indoorAirQualityCreate)
      ?.catch(() => null);
  }

  async deleteIndoorAirQuality(
    params: IRepositoryParams<MutationIndoorAirQualityDeleteArgs>,
  ): Promise<SuccessResponse | null> {
    return this.http
      .requestGraphQL<SuccessResponse>({
        url: Environment.BACKEND_API_URL,
        requestDocument: gql`
          mutation DELETE_INDOORAIRQUALITY(
            $data: IndoorAirQualityDeleteInput!
            $filter: IndoorAirQualityKeyFilter
            $force: Boolean
          ) {
            indoorAirQualityDelete(
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

  async updateIndoorAirQuality(
    params: IRepositoryParams<MutationIndoorAirQualityUpdateArgs>,
  ): Promise<IndoorAirQuality | null> {
    return this.http
      .requestGraphQL<{
        indoorAirQualityUpdate: IndoorAirQuality;
      }>({
        url: Environment.BACKEND_API_URL,
        requestDocument: gql`
          mutation UPDATE_INDOORAIRQUALITY(
            $data: IndoorAirQualityUpdateInput!
          ) {
            indoorAirQualityUpdate(data: $data) {
              id
            }
          }
        `,
        token: params.token,
        variables: params.variables,
      })
      ?.then((response) => response.indoorAirQualityUpdate)
      ?.catch(() => null);
  }
}
