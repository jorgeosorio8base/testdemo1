import { ISearchCriteriaUseCase } from './interfaces';
import { SearchCriteriaEntity } from '../../domain';
import {
  QuerySearchCriterionArgs,
  QuerySearchCriteriaListArgs,
  MutationSearchCriterionCreateArgs,
  MutationSearchCriterionDeleteArgs,
  MutationSearchCriterionUpdateArgs,
} from '../../definitions/schema';
import {
  ISearchCriteriaRepository,
  SearchCriteriaRepository,
  IRepositoryParams,
} from '../../infrastructure';

export class SearchCriteriaUseCase implements ISearchCriteriaUseCase {
  private readonly repository: ISearchCriteriaRepository;
  private readonly errorCatcher: (error: unknown, methodName: string) => never;

  constructor() {
    this.repository = new SearchCriteriaRepository();
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

  async getSearchCriteria(
    params: IRepositoryParams<QuerySearchCriterionArgs>,
  ): Promise<SearchCriteriaEntity | null> {
    try {
      return this.repository
        .getSearchCriteria(params)
        .then((result) => new SearchCriteriaEntity(result))
        .catch((err) => this.errorCatcher(err, 'getSearchCriteria'));
    } catch (error) {
      this.errorCatcher(error, 'getSearchCriteria');
    }
  }

  async getSearchCriteriaList(
    params: IRepositoryParams<QuerySearchCriteriaListArgs>,
  ): Promise<{
    count: number;
    items: Array<SearchCriteriaEntity>;
  }> {
    try {
      return this.repository
        .getSearchCriteriaList(params)
        .then((result) => {
          return {
            count: result?.count || 0,
            items:
              result?.items?.map((item) => new SearchCriteriaEntity(item)) ||
              [],
          };
        })
        .catch((err) => this.errorCatcher(err, 'getSearchCriteriaList'));
    } catch (error) {
      this.errorCatcher(error, 'getSearchCriteriaList');
    }
  }

  async createSearchCriteria(
    params: IRepositoryParams<MutationSearchCriterionCreateArgs>,
  ): Promise<boolean> {
    try {
      return this.repository
        .createSearchCriteria(params)
        .then((result) => !!result?.id)
        .catch((err) => this.errorCatcher(err, 'createSearchCriteria'));
    } catch (error) {
      this.errorCatcher(error, 'createSearchCriteria');
    }
  }

  async deleteSearchCriteria(
    params: IRepositoryParams<MutationSearchCriterionDeleteArgs>,
  ): Promise<boolean> {
    try {
      return this.repository
        .deleteSearchCriteria(params)
        .then((result) => !!result?.success)
        .catch((err) => this.errorCatcher(err, 'deleteSearchCriteria'));
    } catch (error) {
      this.errorCatcher(error, 'deleteSearchCriteria');
    }
  }

  async updateSearchCriteria(
    params: IRepositoryParams<MutationSearchCriterionUpdateArgs>,
  ): Promise<boolean> {
    try {
      return this.repository
        .updateSearchCriteria(params)
        .then((result) => !!result?.id)
        .catch((err) => this.errorCatcher(err, 'updateSearchCriteria'));
    } catch (error) {
      this.errorCatcher(error, 'updateSearchCriteria');
    }
  }
}
