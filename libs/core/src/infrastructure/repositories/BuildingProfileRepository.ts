import { IRepositoryParams, IBuildingProfileRepository } from './interfaces';
import { Http, IHttp } from '../http';
import { gql } from 'graphql-request';
import { Environment } from '../../environment';
import {
  BuildingProfile,
  QueryBuildingProfileArgs,
  QueryBuildingProfileListArgs,
  BuildingProfileListResponse,
  MutationBuildingProfileCreateArgs,
  MutationBuildingProfileDeleteArgs,
  MutationBuildingProfileUpdateArgs,
  SuccessResponse,
} from '../../definitions/schema';

export class BuildingProfileRepository implements IBuildingProfileRepository {
  private readonly http: IHttp;

  constructor() {
    this.http = new Http();
  }

  async getBuildingProfile(
    params: IRepositoryParams<QueryBuildingProfileArgs>,
  ): Promise<BuildingProfile | null> {
    return this.http
      .requestGraphQL<{
        buildingProfile: BuildingProfile;
      }>({
        url: Environment.BACKEND_API_URL,
        requestDocument: gql`
          query GET_BUILDINGPROFILE($id: ID) {
            buildingProfile(id: $id) {
              id
              createdAt
              updatedAt
              name
              address

              demographics
            }
          }
        `,
        token: params.token,
        variables: params.variables,
      })
      ?.then((response) => response.buildingProfile)
      ?.catch(() => null);
  }

  async getBuildingProfileList(
    params: IRepositoryParams<QueryBuildingProfileListArgs>,
  ): Promise<BuildingProfileListResponse> {
    return this.http
      .requestGraphQL<{
        buildingProfilesList: BuildingProfileListResponse;
      }>({
        url: Environment.BACKEND_API_URL,
        requestDocument: gql`
          query GET_BUILDINGPROFILE(
            $first: Int
            $skip: Int
            $filter: BuildingProfileFilter
            $sort: [BuildingProfileSort!]
          ) {
            buildingProfilesList(
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
                address

                demographics
              }
              count
            }
          }
        `,
        token: params.token,
        variables: params.variables,
      })
      ?.then((response) => response.buildingProfilesList);
  }

  async createBuildingProfile(
    params: IRepositoryParams<MutationBuildingProfileCreateArgs>,
  ): Promise<BuildingProfile | null> {
    return this.http
      .requestGraphQL<{
        buildingProfileCreate: BuildingProfile;
      }>({
        url: Environment.BACKEND_API_URL,
        requestDocument: gql`
          mutation CREATE_BUILDINGPROFILE($data: BuildingProfileCreateInput!) {
            buildingProfileCreate(data: $data) {
              id
            }
          }
        `,
        token: params.token,
        variables: params.variables,
      })
      ?.then((response) => response.buildingProfileCreate)
      ?.catch(() => null);
  }

  async deleteBuildingProfile(
    params: IRepositoryParams<MutationBuildingProfileDeleteArgs>,
  ): Promise<SuccessResponse | null> {
    return this.http
      .requestGraphQL<SuccessResponse>({
        url: Environment.BACKEND_API_URL,
        requestDocument: gql`
          mutation DELETE_BUILDINGPROFILE(
            $data: BuildingProfileDeleteInput!
            $filter: BuildingProfileKeyFilter
            $force: Boolean
          ) {
            buildingProfileDelete(data: $data, filter: $filter, force: $force) {
              success
            }
          }
        `,
        token: params.token,
        variables: params.variables,
      })
      ?.catch(() => null);
  }

  async updateBuildingProfile(
    params: IRepositoryParams<MutationBuildingProfileUpdateArgs>,
  ): Promise<BuildingProfile | null> {
    return this.http
      .requestGraphQL<{
        buildingProfileUpdate: BuildingProfile;
      }>({
        url: Environment.BACKEND_API_URL,
        requestDocument: gql`
          mutation UPDATE_BUILDINGPROFILE($data: BuildingProfileUpdateInput!) {
            buildingProfileUpdate(data: $data) {
              id
            }
          }
        `,
        token: params.token,
        variables: params.variables,
      })
      ?.then((response) => response.buildingProfileUpdate)
      ?.catch(() => null);
  }
}
