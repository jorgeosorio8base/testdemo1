import { ISiteDocumentationUseCase } from './interfaces';
import { SiteDocumentationEntity } from '../../domain';
import {
  QuerySiteDocumentationArgs,
  QuerySiteDocumentationListArgs,
  MutationSiteDocumentationCreateArgs,
  MutationSiteDocumentationDeleteArgs,
  MutationSiteDocumentationUpdateArgs,
} from '../../definitions/schema';
import {
  ISiteDocumentationRepository,
  SiteDocumentationRepository,
  IRepositoryParams,
} from '../../infrastructure';

export class SiteDocumentationUseCase implements ISiteDocumentationUseCase {
  private readonly repository: ISiteDocumentationRepository;
  private readonly errorCatcher: (error: unknown, methodName: string) => never;

  constructor() {
    this.repository = new SiteDocumentationRepository();
    this.errorCatcher = (error: unknown, methodName: string) => {
      if (error instanceof Error) {
        throw new Error(error.message);
      }

      if (typeof error === 'string') {
        throw new Error(error);
      }

      throw new Error(`An error occurred trying to ${methodName}`);
    };
  }

  async getSiteDocumentation(
    params: IRepositoryParams<QuerySiteDocumentationArgs>,
  ): Promise<SiteDocumentationEntity | null> {
    try {
      return this.repository
        .getSiteDocumentation(params)
        .then((result) => new SiteDocumentationEntity(result))
        .catch((err) => this.errorCatcher(err, 'getSiteDocumentation'));
    } catch (error) {
      this.errorCatcher(error, 'getSiteDocumentation');
    }
  }

  async getSiteDocumentationList(
    params: IRepositoryParams<QuerySiteDocumentationListArgs>,
  ): Promise<{
    count: number;
    items: Array<SiteDocumentationEntity>;
  }> {
    try {
      return this.repository
        .getSiteDocumentationList(params)
        .then((result) => {
          return {
            count: result?.count || 0,
            items:
              result?.items?.map((item) => new SiteDocumentationEntity(item)) ||
              [],
          };
        })
        .catch((err) => this.errorCatcher(err, 'getSiteDocumentationList'));
    } catch (error) {
      this.errorCatcher(error, 'getSiteDocumentationList');
    }
  }

  async createSiteDocumentation(
    params: IRepositoryParams<MutationSiteDocumentationCreateArgs>,
  ): Promise<boolean> {
    try {
      return this.repository
        .createSiteDocumentation(params)
        .then((result) => !!result?.id)
        .catch((err) => this.errorCatcher(err, 'createSiteDocumentation'));
    } catch (error) {
      this.errorCatcher(error, 'createSiteDocumentation');
    }
  }

  async deleteSiteDocumentation(
    params: IRepositoryParams<MutationSiteDocumentationDeleteArgs>,
  ): Promise<boolean> {
    try {
      return this.repository
        .deleteSiteDocumentation(params)
        .then((result) => !!result?.success)
        .catch((err) => this.errorCatcher(err, 'deleteSiteDocumentation'));
    } catch (error) {
      this.errorCatcher(error, 'deleteSiteDocumentation');
    }
  }

  async updateSiteDocumentation(
    params: IRepositoryParams<MutationSiteDocumentationUpdateArgs>,
  ): Promise<boolean> {
    try {
      return this.repository
        .updateSiteDocumentation(params)
        .then((result) => !!result?.id)
        .catch((err) => this.errorCatcher(err, 'updateSiteDocumentation'));
    } catch (error) {
      this.errorCatcher(error, 'updateSiteDocumentation');
    }
  }
}
