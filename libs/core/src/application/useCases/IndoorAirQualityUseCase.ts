import { IIndoorAirQualityUseCase } from './interfaces';
import { IndoorAirQualityEntity } from '../../domain';
import {
  QueryIndoorAirQualityArgs,
  QueryIndoorAirQualitiesListArgs,
  MutationIndoorAirQualityCreateArgs,
  MutationIndoorAirQualityDeleteArgs,
  MutationIndoorAirQualityUpdateArgs,
} from '../../definitions/schema';
import {
  IIndoorAirQualityRepository,
  IndoorAirQualityRepository,
  IRepositoryParams,
} from '../../infrastructure';

export class IndoorAirQualityUseCase implements IIndoorAirQualityUseCase {
  private readonly repository: IIndoorAirQualityRepository;
  private readonly errorCatcher: (error: unknown, methodName: string) => never;

  constructor() {
    this.repository = new IndoorAirQualityRepository();
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

  async getIndoorAirQuality(
    params: IRepositoryParams<QueryIndoorAirQualityArgs>,
  ): Promise<IndoorAirQualityEntity | null> {
    try {
      return this.repository
        .getIndoorAirQuality(params)
        .then((result) => new IndoorAirQualityEntity(result))
        .catch((err) => this.errorCatcher(err, 'getIndoorAirQuality'));
    } catch (error) {
      this.errorCatcher(error, 'getIndoorAirQuality');
    }
  }

  async getIndoorAirQualityList(
    params: IRepositoryParams<QueryIndoorAirQualitiesListArgs>,
  ): Promise<{
    count: number;
    items: Array<IndoorAirQualityEntity>;
  }> {
    try {
      return this.repository
        .getIndoorAirQualityList(params)
        .then((result) => {
          return {
            count: result?.count || 0,
            items:
              result?.items?.map((item) => new IndoorAirQualityEntity(item)) ||
              [],
          };
        })
        .catch((err) => this.errorCatcher(err, 'getIndoorAirQualityList'));
    } catch (error) {
      this.errorCatcher(error, 'getIndoorAirQualityList');
    }
  }

  async createIndoorAirQuality(
    params: IRepositoryParams<MutationIndoorAirQualityCreateArgs>,
  ): Promise<boolean> {
    try {
      return this.repository
        .createIndoorAirQuality(params)
        .then((result) => !!result?.id)
        .catch((err) => this.errorCatcher(err, 'createIndoorAirQuality'));
    } catch (error) {
      this.errorCatcher(error, 'createIndoorAirQuality');
    }
  }

  async deleteIndoorAirQuality(
    params: IRepositoryParams<MutationIndoorAirQualityDeleteArgs>,
  ): Promise<boolean> {
    try {
      return this.repository
        .deleteIndoorAirQuality(params)
        .then((result) => !!result?.success)
        .catch((err) => this.errorCatcher(err, 'deleteIndoorAirQuality'));
    } catch (error) {
      this.errorCatcher(error, 'deleteIndoorAirQuality');
    }
  }

  async updateIndoorAirQuality(
    params: IRepositoryParams<MutationIndoorAirQualityUpdateArgs>,
  ): Promise<boolean> {
    try {
      return this.repository
        .updateIndoorAirQuality(params)
        .then((result) => !!result?.id)
        .catch((err) => this.errorCatcher(err, 'updateIndoorAirQuality'));
    } catch (error) {
      this.errorCatcher(error, 'updateIndoorAirQuality');
    }
  }
}
