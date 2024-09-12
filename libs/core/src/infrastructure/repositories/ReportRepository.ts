import { IRepositoryParams, IReportRepository } from './interfaces';
import { Http, IHttp } from '../http';
import { gql } from 'graphql-request';
import { Environment } from '../../environment';
import {
  Report,
  QueryReportArgs,
  QueryReportListArgs,
  ReportListResponse,
  MutationReportCreateArgs,
  MutationReportDeleteArgs,
  MutationReportUpdateArgs,
  SuccessResponse,
} from '../../definitions/schema';

export class ReportRepository implements IReportRepository {
  private readonly http: IHttp;

  constructor() {
    this.http = new Http();
  }

  async getReport(
    params: IRepositoryParams<QueryReportArgs>,
  ): Promise<Report | null> {
    return this.http
      .requestGraphQL<{
        report: Report;
      }>({
        url: Environment.BACKEND_API_URL,
        requestDocument: gql`
          query GET_REPORT($id: ID) {
            report(id: $id) {
              id
              createdAt
              updatedAt

              name
              description
              configuration
              generated_date
              file {
                id
                downloadUrl
              }
            }
          }
        `,
        token: params.token,
        variables: params.variables,
      })
      ?.then((response) => response.report)
      ?.catch(() => null);
  }

  async getReportList(
    params: IRepositoryParams<QueryReportListArgs>,
  ): Promise<ReportListResponse> {
    return this.http
      .requestGraphQL<{
        reportsList: ReportListResponse;
      }>({
        url: Environment.BACKEND_API_URL,
        requestDocument: gql`
          query GET_REPORT(
            $first: Int
            $skip: Int
            $filter: ReportFilter
            $sort: [ReportSort!]
          ) {
            reportsList(
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
                configuration
                generated_date
                file {
                  id
                  downloadUrl
                }
              }
              count
            }
          }
        `,
        token: params.token,
        variables: params.variables,
      })
      ?.then((response) => response.reportsList);
  }

  async createReport(
    params: IRepositoryParams<MutationReportCreateArgs>,
  ): Promise<Report | null> {
    return this.http
      .requestGraphQL<{
        reportCreate: Report;
      }>({
        url: Environment.BACKEND_API_URL,
        requestDocument: gql`
          mutation CREATE_REPORT($data: ReportCreateInput!) {
            reportCreate(data: $data) {
              id
            }
          }
        `,
        token: params.token,
        variables: params.variables,
      })
      ?.then((response) => response.reportCreate)
      ?.catch(() => null);
  }

  async deleteReport(
    params: IRepositoryParams<MutationReportDeleteArgs>,
  ): Promise<SuccessResponse | null> {
    return this.http
      .requestGraphQL<SuccessResponse>({
        url: Environment.BACKEND_API_URL,
        requestDocument: gql`
          mutation DELETE_REPORT(
            $data: ReportDeleteInput!
            $filter: ReportKeyFilter
            $force: Boolean
          ) {
            reportDelete(data: $data, filter: $filter, force: $force) {
              success
            }
          }
        `,
        token: params.token,
        variables: params.variables,
      })
      ?.catch(() => null);
  }

  async updateReport(
    params: IRepositoryParams<MutationReportUpdateArgs>,
  ): Promise<Report | null> {
    return this.http
      .requestGraphQL<{
        reportUpdate: Report;
      }>({
        url: Environment.BACKEND_API_URL,
        requestDocument: gql`
          mutation UPDATE_REPORT($data: ReportUpdateInput!) {
            reportUpdate(data: $data) {
              id
            }
          }
        `,
        token: params.token,
        variables: params.variables,
      })
      ?.then((response) => response.reportUpdate)
      ?.catch(() => null);
  }
}
