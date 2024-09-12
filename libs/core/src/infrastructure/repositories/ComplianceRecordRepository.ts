import { IRepositoryParams, IComplianceRecordRepository } from './interfaces';
import { Http, IHttp } from '../http';
import { gql } from 'graphql-request';
import { Environment } from '../../environment';
import {
  ComplianceRecord,
  QueryComplianceRecordArgs,
  QueryComplianceRecordListArgs,
  ComplianceRecordListResponse,
  MutationComplianceRecordCreateArgs,
  MutationComplianceRecordDeleteArgs,
  MutationComplianceRecordUpdateArgs,
  SuccessResponse,
} from '../../definitions/schema';

export class ComplianceRecordRepository implements IComplianceRecordRepository {
  private readonly http: IHttp;

  constructor() {
    this.http = new Http();
  }

  async getComplianceRecord(
    params: IRepositoryParams<QueryComplianceRecordArgs>,
  ): Promise<ComplianceRecord | null> {
    return this.http
      .requestGraphQL<{
        complianceRecord: ComplianceRecord;
      }>({
        url: Environment.BACKEND_API_URL,
        requestDocument: gql`
          query GET_COMPLIANCERECORD($id: ID) {
            complianceRecord(id: $id) {
              id
              createdAt
              updatedAt

              compliance_type
              status
              issue_date
              expiration_date
              description
            }
          }
        `,
        token: params.token,
        variables: params.variables,
      })
      ?.then((response) => response.complianceRecord)
      ?.catch(() => null);
  }

  async getComplianceRecordList(
    params: IRepositoryParams<QueryComplianceRecordListArgs>,
  ): Promise<ComplianceRecordListResponse> {
    return this.http
      .requestGraphQL<{
        complianceRecordsList: ComplianceRecordListResponse;
      }>({
        url: Environment.BACKEND_API_URL,
        requestDocument: gql`
          query GET_COMPLIANCERECORD(
            $first: Int
            $skip: Int
            $filter: ComplianceRecordFilter
            $sort: [ComplianceRecordSort!]
          ) {
            complianceRecordsList(
              first: $first
              skip: $skip
              filter: $filter
              sort: $sort
            ) {
              items {
                id
                createdAt
                updatedAt

                compliance_type
                status
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
      ?.then((response) => response.complianceRecordsList);
  }

  async createComplianceRecord(
    params: IRepositoryParams<MutationComplianceRecordCreateArgs>,
  ): Promise<ComplianceRecord | null> {
    return this.http
      .requestGraphQL<{
        complianceRecordCreate: ComplianceRecord;
      }>({
        url: Environment.BACKEND_API_URL,
        requestDocument: gql`
          mutation CREATE_COMPLIANCERECORD(
            $data: ComplianceRecordCreateInput!
          ) {
            complianceRecordCreate(data: $data) {
              id
            }
          }
        `,
        token: params.token,
        variables: params.variables,
      })
      ?.then((response) => response.complianceRecordCreate)
      ?.catch(() => null);
  }

  async deleteComplianceRecord(
    params: IRepositoryParams<MutationComplianceRecordDeleteArgs>,
  ): Promise<SuccessResponse | null> {
    return this.http
      .requestGraphQL<SuccessResponse>({
        url: Environment.BACKEND_API_URL,
        requestDocument: gql`
          mutation DELETE_COMPLIANCERECORD(
            $data: ComplianceRecordDeleteInput!
            $filter: ComplianceRecordKeyFilter
            $force: Boolean
          ) {
            complianceRecordDelete(
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

  async updateComplianceRecord(
    params: IRepositoryParams<MutationComplianceRecordUpdateArgs>,
  ): Promise<ComplianceRecord | null> {
    return this.http
      .requestGraphQL<{
        complianceRecordUpdate: ComplianceRecord;
      }>({
        url: Environment.BACKEND_API_URL,
        requestDocument: gql`
          mutation UPDATE_COMPLIANCERECORD(
            $data: ComplianceRecordUpdateInput!
          ) {
            complianceRecordUpdate(data: $data) {
              id
            }
          }
        `,
        token: params.token,
        variables: params.variables,
      })
      ?.then((response) => response.complianceRecordUpdate)
      ?.catch(() => null);
  }
}
