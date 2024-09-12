import { IRepositoryParams, ICertificationRepository } from './interfaces';
import { Http, IHttp } from '../http';
import { gql } from 'graphql-request';
import { Environment } from '../../environment';
import {
  Certification,
  QueryCertificationArgs,
  QueryCertificationListArgs,
  CertificationListResponse,
  MutationCertificationCreateArgs,
  MutationCertificationDeleteArgs,
  MutationCertificationUpdateArgs,
  SuccessResponse,
} from '../../definitions/schema';

export class CertificationRepository implements ICertificationRepository {
  private readonly http: IHttp;

  constructor() {
    this.http = new Http();
  }

  async getCertification(
    params: IRepositoryParams<QueryCertificationArgs>,
  ): Promise<Certification | null> {
    return this.http
      .requestGraphQL<{
        certification: Certification;
      }>({
        url: Environment.BACKEND_API_URL,
        requestDocument: gql`
          query GET_CERTIFICATION($id: ID) {
            certification(id: $id) {
              id
              createdAt
              updatedAt

              certification_type
              issue_date
              expiration_date
              description
            }
          }
        `,
        token: params.token,
        variables: params.variables,
      })
      ?.then((response) => response.certification)
      ?.catch(() => null);
  }

  async getCertificationList(
    params: IRepositoryParams<QueryCertificationListArgs>,
  ): Promise<CertificationListResponse> {
    return this.http
      .requestGraphQL<{
        certificationsList: CertificationListResponse;
      }>({
        url: Environment.BACKEND_API_URL,
        requestDocument: gql`
          query GET_CERTIFICATION(
            $first: Int
            $skip: Int
            $filter: CertificationFilter
            $sort: [CertificationSort!]
          ) {
            certificationsList(
              first: $first
              skip: $skip
              filter: $filter
              sort: $sort
            ) {
              items {
                id
                createdAt
                updatedAt

                certification_type
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
      ?.then((response) => response.certificationsList);
  }

  async createCertification(
    params: IRepositoryParams<MutationCertificationCreateArgs>,
  ): Promise<Certification | null> {
    return this.http
      .requestGraphQL<{
        certificationCreate: Certification;
      }>({
        url: Environment.BACKEND_API_URL,
        requestDocument: gql`
          mutation CREATE_CERTIFICATION($data: CertificationCreateInput!) {
            certificationCreate(data: $data) {
              id
            }
          }
        `,
        token: params.token,
        variables: params.variables,
      })
      ?.then((response) => response.certificationCreate)
      ?.catch(() => null);
  }

  async deleteCertification(
    params: IRepositoryParams<MutationCertificationDeleteArgs>,
  ): Promise<SuccessResponse | null> {
    return this.http
      .requestGraphQL<SuccessResponse>({
        url: Environment.BACKEND_API_URL,
        requestDocument: gql`
          mutation DELETE_CERTIFICATION(
            $data: CertificationDeleteInput!
            $filter: CertificationKeyFilter
            $force: Boolean
          ) {
            certificationDelete(data: $data, filter: $filter, force: $force) {
              success
            }
          }
        `,
        token: params.token,
        variables: params.variables,
      })
      ?.catch(() => null);
  }

  async updateCertification(
    params: IRepositoryParams<MutationCertificationUpdateArgs>,
  ): Promise<Certification | null> {
    return this.http
      .requestGraphQL<{
        certificationUpdate: Certification;
      }>({
        url: Environment.BACKEND_API_URL,
        requestDocument: gql`
          mutation UPDATE_CERTIFICATION($data: CertificationUpdateInput!) {
            certificationUpdate(data: $data) {
              id
            }
          }
        `,
        token: params.token,
        variables: params.variables,
      })
      ?.then((response) => response.certificationUpdate)
      ?.catch(() => null);
  }
}
