import {
  SearchCriterion,
  QuerySearchCriterionArgs,
  QuerySearchCriteriaListArgs,
  SearchCriterionListResponse,
  MutationSearchCriterionCreateArgs,
  MutationSearchCriterionDeleteArgs,
  MutationSearchCriterionUpdateArgs,
  SuccessResponse,
} from '../../../definitions/schema';
import { IRepositoryParams } from './iRepositoryParams';

export interface ISearchCriteriaRepository {
  getSearchCriteria(
    params: IRepositoryParams<QuerySearchCriterionArgs>,
  ): Promise<SearchCriterion | null>;
  getSearchCriteriaList(
    params: IRepositoryParams<QuerySearchCriteriaListArgs>,
  ): Promise<SearchCriterionListResponse>;
  createSearchCriteria(
    params: IRepositoryParams<MutationSearchCriterionCreateArgs>,
  ): Promise<SearchCriterion | null>;
  deleteSearchCriteria(
    params: IRepositoryParams<MutationSearchCriterionDeleteArgs>,
  ): Promise<SuccessResponse | null>;
  updateSearchCriteria(
    params: IRepositoryParams<MutationSearchCriterionUpdateArgs>,
  ): Promise<SearchCriterion | null>;
}
