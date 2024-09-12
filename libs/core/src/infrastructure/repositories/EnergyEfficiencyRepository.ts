import { IRepositoryParams, IEnergyEfficiencyRepository } from './interfaces';
import { Http, IHttp } from '../http';
import { gql } from 'graphql-request';
import { Environment } from '../../environment';
import {
  EnergyEfficiency,
  QueryEnergyEfficiencyArgs,
  QueryEnergyEfficienciesListArgs,
  EnergyEfficiencyListResponse,
  MutationEnergyEfficiencyCreateArgs,
  MutationEnergyEfficiencyDeleteArgs,
  MutationEnergyEfficiencyUpdateArgs,
  SuccessResponse,
} from '../../definitions/schema';

export class EnergyEfficiencyRepository implements IEnergyEfficiencyRepository {
  private readonly http: IHttp;

  constructor() {
    this.http = new Http();
  }

  async getEnergyEfficiency(
    params: IRepositoryParams<QueryEnergyEfficiencyArgs>,
  ): Promise<EnergyEfficiency | null> {
    return this.http
      .requestGraphQL<{
        energyEfficiency: EnergyEfficiency;
      }>({
        url: Environment.BACKEND_API_URL,
        requestDocument: gql`
          query GET_ENERGYEFFICIENCY($id: ID) {
            energyEfficiency(id: $id) {
              id
              createdAt
              updatedAt

              measurement_date
              energy_consumption
              energy_cost
              efficiency_rating
            }
          }
        `,
        token: params.token,
        variables: params.variables,
      })
      ?.then((response) => response.energyEfficiency)
      ?.catch(() => null);
  }

  async getEnergyEfficiencyList(
    params: IRepositoryParams<QueryEnergyEfficienciesListArgs>,
  ): Promise<EnergyEfficiencyListResponse> {
    return this.http
      .requestGraphQL<{
        energyEfficienciesList: EnergyEfficiencyListResponse;
      }>({
        url: Environment.BACKEND_API_URL,
        requestDocument: gql`
          query GET_ENERGYEFFICIENCY(
            $first: Int
            $skip: Int
            $filter: EnergyEfficiencyFilter
            $sort: [EnergyEfficiencySort!]
          ) {
            energyEfficienciesList(
              first: $first
              skip: $skip
              filter: $filter
              sort: $sort
            ) {
              items {
                id
                createdAt
                updatedAt

                measurement_date
                energy_consumption
                energy_cost
                efficiency_rating
              }
              count
            }
          }
        `,
        token: params.token,
        variables: params.variables,
      })
      ?.then((response) => response.energyEfficienciesList);
  }

  async createEnergyEfficiency(
    params: IRepositoryParams<MutationEnergyEfficiencyCreateArgs>,
  ): Promise<EnergyEfficiency | null> {
    return this.http
      .requestGraphQL<{
        energyEfficiencyCreate: EnergyEfficiency;
      }>({
        url: Environment.BACKEND_API_URL,
        requestDocument: gql`
          mutation CREATE_ENERGYEFFICIENCY(
            $data: EnergyEfficiencyCreateInput!
          ) {
            energyEfficiencyCreate(data: $data) {
              id
            }
          }
        `,
        token: params.token,
        variables: params.variables,
      })
      ?.then((response) => response.energyEfficiencyCreate)
      ?.catch(() => null);
  }

  async deleteEnergyEfficiency(
    params: IRepositoryParams<MutationEnergyEfficiencyDeleteArgs>,
  ): Promise<SuccessResponse | null> {
    return this.http
      .requestGraphQL<SuccessResponse>({
        url: Environment.BACKEND_API_URL,
        requestDocument: gql`
          mutation DELETE_ENERGYEFFICIENCY(
            $data: EnergyEfficiencyDeleteInput!
            $filter: EnergyEfficiencyKeyFilter
            $force: Boolean
          ) {
            energyEfficiencyDelete(
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

  async updateEnergyEfficiency(
    params: IRepositoryParams<MutationEnergyEfficiencyUpdateArgs>,
  ): Promise<EnergyEfficiency | null> {
    return this.http
      .requestGraphQL<{
        energyEfficiencyUpdate: EnergyEfficiency;
      }>({
        url: Environment.BACKEND_API_URL,
        requestDocument: gql`
          mutation UPDATE_ENERGYEFFICIENCY(
            $data: EnergyEfficiencyUpdateInput!
          ) {
            energyEfficiencyUpdate(data: $data) {
              id
            }
          }
        `,
        token: params.token,
        variables: params.variables,
      })
      ?.then((response) => response.energyEfficiencyUpdate)
      ?.catch(() => null);
  }
}
