import { IRepositoryParams, IMaintenanceRecordRepository } from './interfaces';
import { Http, IHttp } from '../http';
import { gql } from 'graphql-request';
import { Environment } from '../../environment';
import {
  MaintenanceRecord,
  QueryMaintenanceRecordArgs,
  QueryMaintenanceRecordListArgs,
  MaintenanceRecordListResponse,
  MutationMaintenanceRecordCreateArgs,
  MutationMaintenanceRecordDeleteArgs,
  MutationMaintenanceRecordUpdateArgs,
  SuccessResponse,
} from '../../definitions/schema';

export class MaintenanceRecordRepository
  implements IMaintenanceRecordRepository
{
  private readonly http: IHttp;

  constructor() {
    this.http = new Http();
  }

  async getMaintenanceRecord(
    params: IRepositoryParams<QueryMaintenanceRecordArgs>,
  ): Promise<MaintenanceRecord | null> {
    return this.http
      .requestGraphQL<{
        maintenanceRecord: MaintenanceRecord;
      }>({
        url: Environment.BACKEND_API_URL,
        requestDocument: gql`
          query GET_MAINTENANCERECORD($id: ID) {
            maintenanceRecord(id: $id) {
              id
              createdAt
              updatedAt

              description
              date_performed
            }
          }
        `,
        token: params.token,
        variables: params.variables,
      })
      ?.then((response) => response.maintenanceRecord)
      ?.catch(() => null);
  }

  async getMaintenanceRecordList(
    params: IRepositoryParams<QueryMaintenanceRecordListArgs>,
  ): Promise<MaintenanceRecordListResponse> {
    return this.http
      .requestGraphQL<{
        maintenanceRecordsList: MaintenanceRecordListResponse;
      }>({
        url: Environment.BACKEND_API_URL,
        requestDocument: gql`
          query GET_MAINTENANCERECORD(
            $first: Int
            $skip: Int
            $filter: MaintenanceRecordFilter
            $sort: [MaintenanceRecordSort!]
          ) {
            maintenanceRecordsList(
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
                date_performed
              }
              count
            }
          }
        `,
        token: params.token,
        variables: params.variables,
      })
      ?.then((response) => response.maintenanceRecordsList);
  }

  async createMaintenanceRecord(
    params: IRepositoryParams<MutationMaintenanceRecordCreateArgs>,
  ): Promise<MaintenanceRecord | null> {
    return this.http
      .requestGraphQL<{
        maintenanceRecordCreate: MaintenanceRecord;
      }>({
        url: Environment.BACKEND_API_URL,
        requestDocument: gql`
          mutation CREATE_MAINTENANCERECORD(
            $data: MaintenanceRecordCreateInput!
          ) {
            maintenanceRecordCreate(data: $data) {
              id
            }
          }
        `,
        token: params.token,
        variables: params.variables,
      })
      ?.then((response) => response.maintenanceRecordCreate)
      ?.catch(() => null);
  }

  async deleteMaintenanceRecord(
    params: IRepositoryParams<MutationMaintenanceRecordDeleteArgs>,
  ): Promise<SuccessResponse | null> {
    return this.http
      .requestGraphQL<SuccessResponse>({
        url: Environment.BACKEND_API_URL,
        requestDocument: gql`
          mutation DELETE_MAINTENANCERECORD(
            $data: MaintenanceRecordDeleteInput!
            $filter: MaintenanceRecordKeyFilter
            $force: Boolean
          ) {
            maintenanceRecordDelete(
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

  async updateMaintenanceRecord(
    params: IRepositoryParams<MutationMaintenanceRecordUpdateArgs>,
  ): Promise<MaintenanceRecord | null> {
    return this.http
      .requestGraphQL<{
        maintenanceRecordUpdate: MaintenanceRecord;
      }>({
        url: Environment.BACKEND_API_URL,
        requestDocument: gql`
          mutation UPDATE_MAINTENANCERECORD(
            $data: MaintenanceRecordUpdateInput!
          ) {
            maintenanceRecordUpdate(data: $data) {
              id
            }
          }
        `,
        token: params.token,
        variables: params.variables,
      })
      ?.then((response) => response.maintenanceRecordUpdate)
      ?.catch(() => null);
  }
}
