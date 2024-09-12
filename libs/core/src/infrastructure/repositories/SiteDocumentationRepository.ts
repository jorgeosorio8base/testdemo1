import { IRepositoryParams, ISiteDocumentationRepository } from './interfaces';
import { Http, IHttp } from '../http';
import { gql } from 'graphql-request';
import { Environment } from '../../environment';
import {
  SiteDocumentation,
  QuerySiteDocumentationArgs,
  QuerySiteDocumentationListArgs,
  SiteDocumentationListResponse,
  MutationSiteDocumentationCreateArgs,
  MutationSiteDocumentationDeleteArgs,
  MutationSiteDocumentationUpdateArgs,
  SuccessResponse,
} from '../../definitions/schema';

export class SiteDocumentationRepository
  implements ISiteDocumentationRepository
{
  private readonly http: IHttp;

  constructor() {
    this.http = new Http();
  }

  async getSiteDocumentation(
    params: IRepositoryParams<QuerySiteDocumentationArgs>,
  ): Promise<SiteDocumentation | null> {
    return this.http
      .requestGraphQL<{
        siteDocumentation: SiteDocumentation;
      }>({
        url: Environment.BACKEND_API_URL,
        requestDocument: gql`
          query GET_SITEDOCUMENTATION($id: ID) {
            siteDocumentation(id: $id) {
              id
              createdAt
              updatedAt

              document_type
              document_file {
                id
                downloadUrl
              }
              upload_date
              description
            }
          }
        `,
        token: params.token,
        variables: params.variables,
      })
      ?.then((response) => response.siteDocumentation)
      ?.catch(() => null);
  }

  async getSiteDocumentationList(
    params: IRepositoryParams<QuerySiteDocumentationListArgs>,
  ): Promise<SiteDocumentationListResponse> {
    return this.http
      .requestGraphQL<{
        siteDocumentationsList: SiteDocumentationListResponse;
      }>({
        url: Environment.BACKEND_API_URL,
        requestDocument: gql`
          query GET_SITEDOCUMENTATION(
            $first: Int
            $skip: Int
            $filter: SiteDocumentationFilter
            $sort: [SiteDocumentationSort!]
          ) {
            siteDocumentationsList(
              first: $first
              skip: $skip
              filter: $filter
              sort: $sort
            ) {
              items {
                id
                createdAt
                updatedAt

                document_type
                document_file {
                  id
                  downloadUrl
                }
                upload_date
                description
              }
              count
            }
          }
        `,
        token: params.token,
        variables: params.variables,
      })
      ?.then((response) => response.siteDocumentationsList);
  }

  async createSiteDocumentation(
    params: IRepositoryParams<MutationSiteDocumentationCreateArgs>,
  ): Promise<SiteDocumentation | null> {
    return this.http
      .requestGraphQL<{
        siteDocumentationCreate: SiteDocumentation;
      }>({
        url: Environment.BACKEND_API_URL,
        requestDocument: gql`
          mutation CREATE_SITEDOCUMENTATION(
            $data: SiteDocumentationCreateInput!
          ) {
            siteDocumentationCreate(data: $data) {
              id
            }
          }
        `,
        token: params.token,
        variables: params.variables,
      })
      ?.then((response) => response.siteDocumentationCreate)
      ?.catch(() => null);
  }

  async deleteSiteDocumentation(
    params: IRepositoryParams<MutationSiteDocumentationDeleteArgs>,
  ): Promise<SuccessResponse | null> {
    return this.http
      .requestGraphQL<SuccessResponse>({
        url: Environment.BACKEND_API_URL,
        requestDocument: gql`
          mutation DELETE_SITEDOCUMENTATION(
            $data: SiteDocumentationDeleteInput!
            $filter: SiteDocumentationKeyFilter
            $force: Boolean
          ) {
            siteDocumentationDelete(
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

  async updateSiteDocumentation(
    params: IRepositoryParams<MutationSiteDocumentationUpdateArgs>,
  ): Promise<SiteDocumentation | null> {
    return this.http
      .requestGraphQL<{
        siteDocumentationUpdate: SiteDocumentation;
      }>({
        url: Environment.BACKEND_API_URL,
        requestDocument: gql`
          mutation UPDATE_SITEDOCUMENTATION(
            $data: SiteDocumentationUpdateInput!
          ) {
            siteDocumentationUpdate(data: $data) {
              id
            }
          }
        `,
        token: params.token,
        variables: params.variables,
      })
      ?.then((response) => response.siteDocumentationUpdate)
      ?.catch(() => null);
  }
}
