import { IRepositoryParams, ISearchCriteriaRepository } from './interfaces';
import { Http, IHttp } from '../http';
import { gql } from 'graphql-request';
import { Environment } from '../../environment';
import {
  SearchCriterion,
  QuerySearchCriterionArgs,
  QuerySearchCriteriaListArgs,
  SearchCriterionListResponse,
  MutationSearchCriterionCreateArgs,
  MutationSearchCriterionDeleteArgs,
  MutationSearchCriterionUpdateArgs,
  SuccessResponse,
} from '../../definitions/schema';

export class SearchCriteriaRepository implements ISearchCriteriaRepository {
  private readonly http: IHttp;

  constructor() {
    this.http = new Http();
  }

  async getSearchCriteria(
    params: IRepositoryParams<QuerySearchCriterionArgs>,
  ): Promise<SearchCriterion | null> {
    return this.http
      .requestGraphQL<{
        searchCriterion: SearchCriterion;
      }>({
        url: Environment.BACKEND_API_URL,
        requestDocument: gql`
          query GET_SEARCHCRITERIA($id: ID) {
            searchCriterion(id: $id) {
              id
              createdAt
              updatedAt

              name
              criteria
              created_date
              last_modified_date
            }
          }
        `,
        token: params.token,
        variables: params.variables,
      })
      ?.then((response) => response.searchCriterion)
      ?.catch(() => null);
  }

  async getSearchCriteriaList(
    params: IRepositoryParams<QuerySearchCriteriaListArgs>,
  ): Promise<SearchCriterionListResponse> {
    return this.http
      .requestGraphQL<{
        searchCriteriaList: SearchCriterionListResponse;
      }>({
        url: Environment.BACKEND_API_URL,
        requestDocument: gql`
          query GET_SEARCHCRITERIA(
            $first: Int
            $skip: Int
            $filter: SearchCriterionFilter
            $sort: [SearchCriterionSort!]
          ) {
            searchCriteriaList(
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
                criteria
                created_date
                last_modified_date
              }
              count
            }
          }
        `,
        token: params.token,
        variables: params.variables,
      })
      ?.then((response) => response.searchCriteriaList);
  }

  async createSearchCriteria(
    params: IRepositoryParams<MutationSearchCriterionCreateArgs>,
  ): Promise<SearchCriterion | null> {
    return this.http
      .requestGraphQL<{
        searchCriterionCreate: SearchCriterion;
      }>({
        url: Environment.BACKEND_API_URL,
        requestDocument: gql`
          mutation CREATE_SEARCHCRITERIA($data: SearchCriteriaCreateInput!) {
            searchCriterionCreate(data: $data) {
              id
            }
          }
        `,
        token: params.token,
        variables: params.variables,
      })
      ?.then((response) => response.searchCriterionCreate)
      ?.catch(() => null);
  }

  async deleteSearchCriteria(
    params: IRepositoryParams<MutationSearchCriterionDeleteArgs>,
  ): Promise<SuccessResponse | null> {
    return this.http
      .requestGraphQL<SuccessResponse>({
        url: Environment.BACKEND_API_URL,
        requestDocument: gql`
          mutation DELETE_SEARCHCRITERIA(
            $data: SearchCriterionDeleteInput!
            $filter: SearchCriterionKeyFilter
            $force: Boolean
          ) {
            searchCriterionDelete(data: $data, filter: $filter, force: $force) {
              success
            }
          }
        `,
        token: params.token,
        variables: params.variables,
      })
      ?.catch(() => null);
  }

  async updateSearchCriteria(
    params: IRepositoryParams<MutationSearchCriterionUpdateArgs>,
  ): Promise<SearchCriterion | null> {
    return this.http
      .requestGraphQL<{
        searchCriterionUpdate: SearchCriterion;
      }>({
        url: Environment.BACKEND_API_URL,
        requestDocument: gql`
          mutation UPDATE_SEARCHCRITERIA($data: SearchCriteriaUpdateInput!) {
            searchCriterionUpdate(data: $data) {
              id
            }
          }
        `,
        token: params.token,
        variables: params.variables,
      })
      ?.then((response) => response.searchCriterionUpdate)
      ?.catch(() => null);
  }
}
