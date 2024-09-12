import {
  EnergyEfficiency,
  QueryEnergyEfficiencyArgs,
  QueryEnergyEfficienciesListArgs,
  EnergyEfficiencyListResponse,
  MutationEnergyEfficiencyCreateArgs,
  MutationEnergyEfficiencyDeleteArgs,
  MutationEnergyEfficiencyUpdateArgs,
  SuccessResponse,
} from '../../../definitions/schema';
import { IRepositoryParams } from './iRepositoryParams';

export interface IEnergyEfficiencyRepository {
  getEnergyEfficiency(
    params: IRepositoryParams<QueryEnergyEfficiencyArgs>,
  ): Promise<EnergyEfficiency | null>;
  getEnergyEfficiencyList(
    params: IRepositoryParams<QueryEnergyEfficienciesListArgs>,
  ): Promise<EnergyEfficiencyListResponse>;
  createEnergyEfficiency(
    params: IRepositoryParams<MutationEnergyEfficiencyCreateArgs>,
  ): Promise<EnergyEfficiency | null>;
  deleteEnergyEfficiency(
    params: IRepositoryParams<MutationEnergyEfficiencyDeleteArgs>,
  ): Promise<SuccessResponse | null>;
  updateEnergyEfficiency(
    params: IRepositoryParams<MutationEnergyEfficiencyUpdateArgs>,
  ): Promise<EnergyEfficiency | null>;
}
