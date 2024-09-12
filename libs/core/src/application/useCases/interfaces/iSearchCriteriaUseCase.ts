import {
  QuerySearchCriterionArgs,
  QuerySearchCriteriaListArgs,
  MutationSearchCriterionCreateArgs,
  MutationSearchCriterionDeleteArgs,
  MutationSearchCriterionUpdateArgs,
} from '../../../definitions/schema';
import { SearchCriteriaEntity } from '../../../domain';
import { IRepositoryParams } from '../../../infrastructure';

export interface ISearchCriteriaUseCase {
  getSearchCriteria(
    params: IRepositoryParams<QuerySearchCriterionArgs>,
  ): Promise<SearchCriteriaEntity | null>;
  getSearchCriteriaList(
    params: IRepositoryParams<QuerySearchCriteriaListArgs>,
  ): Promise<{
    count: number;
    items: Array<SearchCriteriaEntity>;
  }>;
  createSearchCriteria(
    params: IRepositoryParams<MutationSearchCriterionCreateArgs>,
  ): Promise<boolean>;
  deleteSearchCriteria(
    params: IRepositoryParams<MutationSearchCriterionDeleteArgs>,
  ): Promise<boolean>;
  updateSearchCriteria(
    params: IRepositoryParams<MutationSearchCriterionUpdateArgs>,
  ): Promise<boolean>;
}
