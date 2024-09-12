import { IEnergyEfficiencyUseCase } from './interfaces';
import { EnergyEfficiencyEntity } from '../../domain';
import {
  QueryEnergyEfficiencyArgs,
  QueryEnergyEfficienciesListArgs,
  MutationEnergyEfficiencyCreateArgs,
  MutationEnergyEfficiencyDeleteArgs,
  MutationEnergyEfficiencyUpdateArgs,
} from '../../definitions/schema';
import {
  IEnergyEfficiencyRepository,
  EnergyEfficiencyRepository,
  IRepositoryParams,
} from '../../infrastructure';

export class EnergyEfficiencyUseCase implements IEnergyEfficiencyUseCase {
  private readonly repository: IEnergyEfficiencyRepository;
  private readonly errorCatcher: (error: unknown, methodName: string) => never;

  constructor() {
    this.repository = new EnergyEfficiencyRepository();
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

  async getEnergyEfficiency(
    params: IRepositoryParams<QueryEnergyEfficiencyArgs>,
  ): Promise<EnergyEfficiencyEntity | null> {
    try {
      return this.repository
        .getEnergyEfficiency(params)
        .then((result) => new EnergyEfficiencyEntity(result))
        .catch((err) => this.errorCatcher(err, 'getEnergyEfficiency'));
    } catch (error) {
      this.errorCatcher(error, 'getEnergyEfficiency');
    }
  }

  async getEnergyEfficiencyList(
    params: IRepositoryParams<QueryEnergyEfficienciesListArgs>,
  ): Promise<{
    count: number;
    items: Array<EnergyEfficiencyEntity>;
  }> {
    try {
      return this.repository
        .getEnergyEfficiencyList(params)
        .then((result) => {
          return {
            count: result?.count || 0,
            items:
              result?.items?.map((item) => new EnergyEfficiencyEntity(item)) ||
              [],
          };
        })
        .catch((err) => this.errorCatcher(err, 'getEnergyEfficiencyList'));
    } catch (error) {
      this.errorCatcher(error, 'getEnergyEfficiencyList');
    }
  }

  async createEnergyEfficiency(
    params: IRepositoryParams<MutationEnergyEfficiencyCreateArgs>,
  ): Promise<boolean> {
    try {
      return this.repository
        .createEnergyEfficiency(params)
        .then((result) => !!result?.id)
        .catch((err) => this.errorCatcher(err, 'createEnergyEfficiency'));
    } catch (error) {
      this.errorCatcher(error, 'createEnergyEfficiency');
    }
  }

  async deleteEnergyEfficiency(
    params: IRepositoryParams<MutationEnergyEfficiencyDeleteArgs>,
  ): Promise<boolean> {
    try {
      return this.repository
        .deleteEnergyEfficiency(params)
        .then((result) => !!result?.success)
        .catch((err) => this.errorCatcher(err, 'deleteEnergyEfficiency'));
    } catch (error) {
      this.errorCatcher(error, 'deleteEnergyEfficiency');
    }
  }

  async updateEnergyEfficiency(
    params: IRepositoryParams<MutationEnergyEfficiencyUpdateArgs>,
  ): Promise<boolean> {
    try {
      return this.repository
        .updateEnergyEfficiency(params)
        .then((result) => !!result?.id)
        .catch((err) => this.errorCatcher(err, 'updateEnergyEfficiency'));
    } catch (error) {
      this.errorCatcher(error, 'updateEnergyEfficiency');
    }
  }
}
