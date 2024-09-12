import {
  QueryEnergyEfficiencyArgs,
  QueryEnergyEfficienciesListArgs,
  MutationEnergyEfficiencyCreateArgs,
  MutationEnergyEfficiencyDeleteArgs,
  MutationEnergyEfficiencyUpdateArgs,
} from '../../../definitions/schema';
import { EnergyEfficiencyEntity } from '../../../domain';
import { IRepositoryParams } from '../../../infrastructure';

export interface IEnergyEfficiencyUseCase {
  getEnergyEfficiency(
    params: IRepositoryParams<QueryEnergyEfficiencyArgs>,
  ): Promise<EnergyEfficiencyEntity | null>;
  getEnergyEfficiencyList(
    params: IRepositoryParams<QueryEnergyEfficienciesListArgs>,
  ): Promise<{
    count: number;
    items: Array<EnergyEfficiencyEntity>;
  }>;
  createEnergyEfficiency(
    params: IRepositoryParams<MutationEnergyEfficiencyCreateArgs>,
  ): Promise<boolean>;
  deleteEnergyEfficiency(
    params: IRepositoryParams<MutationEnergyEfficiencyDeleteArgs>,
  ): Promise<boolean>;
  updateEnergyEfficiency(
    params: IRepositoryParams<MutationEnergyEfficiencyUpdateArgs>,
  ): Promise<boolean>;
}
