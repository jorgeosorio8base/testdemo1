import {
  SiteDocumentation,
  QuerySiteDocumentationArgs,
  QuerySiteDocumentationListArgs,
  SiteDocumentationListResponse,
  MutationSiteDocumentationCreateArgs,
  MutationSiteDocumentationDeleteArgs,
  MutationSiteDocumentationUpdateArgs,
  SuccessResponse,
} from '../../../definitions/schema';
import { IRepositoryParams } from './iRepositoryParams';

export interface ISiteDocumentationRepository {
  getSiteDocumentation(
    params: IRepositoryParams<QuerySiteDocumentationArgs>,
  ): Promise<SiteDocumentation | null>;
  getSiteDocumentationList(
    params: IRepositoryParams<QuerySiteDocumentationListArgs>,
  ): Promise<SiteDocumentationListResponse>;
  createSiteDocumentation(
    params: IRepositoryParams<MutationSiteDocumentationCreateArgs>,
  ): Promise<SiteDocumentation | null>;
  deleteSiteDocumentation(
    params: IRepositoryParams<MutationSiteDocumentationDeleteArgs>,
  ): Promise<SuccessResponse | null>;
  updateSiteDocumentation(
    params: IRepositoryParams<MutationSiteDocumentationUpdateArgs>,
  ): Promise<SiteDocumentation | null>;
}
