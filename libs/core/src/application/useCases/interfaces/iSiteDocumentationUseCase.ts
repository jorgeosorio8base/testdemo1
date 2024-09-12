import {
  QuerySiteDocumentationArgs,
  QuerySiteDocumentationListArgs,
  MutationSiteDocumentationCreateArgs,
  MutationSiteDocumentationDeleteArgs,
  MutationSiteDocumentationUpdateArgs,
} from '../../../definitions/schema';
import { SiteDocumentationEntity } from '../../../domain';
import { IRepositoryParams } from '../../../infrastructure';

export interface ISiteDocumentationUseCase {
  getSiteDocumentation(
    params: IRepositoryParams<QuerySiteDocumentationArgs>,
  ): Promise<SiteDocumentationEntity | null>;
  getSiteDocumentationList(
    params: IRepositoryParams<QuerySiteDocumentationListArgs>,
  ): Promise<{
    count: number;
    items: Array<SiteDocumentationEntity>;
  }>;
  createSiteDocumentation(
    params: IRepositoryParams<MutationSiteDocumentationCreateArgs>,
  ): Promise<boolean>;
  deleteSiteDocumentation(
    params: IRepositoryParams<MutationSiteDocumentationDeleteArgs>,
  ): Promise<boolean>;
  updateSiteDocumentation(
    params: IRepositoryParams<MutationSiteDocumentationUpdateArgs>,
  ): Promise<boolean>;
}
