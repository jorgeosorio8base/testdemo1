import { IEnvironmentalInformationUseCase } from './interfaces';
import { EnvironmentalInformationEntity } from '../../domain';
import {
  QueryEnvironmentalInformationArgs,
  QueryEnvironmentalInformationListArgs,
  MutationEnvironmentalInformationCreateArgs,
  MutationEnvironmentalInformationDeleteArgs,
  MutationEnvironmentalInformationUpdateArgs,
} from '../../definitions/schema';
import {
  IEnvironmentalInformationRepository,
  EnvironmentalInformationRepository,
  IRepositoryParams,
} from '../../infrastructure';

export class EnvironmentalInformationUseCase
  implements IEnvironmentalInformationUseCase
{
  private readonly repository: IEnvironmentalInformationRepository;
  private readonly errorCatcher: (error: unknown, methodName: string) => never;

  constructor() {
    this.repository = new EnvironmentalInformationRepository();
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

  async getEnvironmentalInformation(
    params: IRepositoryParams<QueryEnvironmentalInformationArgs>,
  ): Promise<EnvironmentalInformationEntity | null> {
    try {
      return this.repository
        .getEnvironmentalInformation(params)
        .then((result) => new EnvironmentalInformationEntity(result))
        .catch((err) => this.errorCatcher(err, 'getEnvironmentalInformation'));
    } catch (error) {
      this.errorCatcher(error, 'getEnvironmentalInformation');
    }
  }

  async getEnvironmentalInformationList(
    params: IRepositoryParams<QueryEnvironmentalInformationListArgs>,
  ): Promise<{
    count: number;
    items: Array<EnvironmentalInformationEntity>;
  }> {
    try {
      return this.repository
        .getEnvironmentalInformationList(params)
        .then((result) => {
          return {
            count: result?.count || 0,
            items:
              result?.items?.map(
                (item) => new EnvironmentalInformationEntity(item),
              ) || [],
          };
        })
        .catch((err) =>
          this.errorCatcher(err, 'getEnvironmentalInformationList'),
        );
    } catch (error) {
      this.errorCatcher(error, 'getEnvironmentalInformationList');
    }
  }

  async createEnvironmentalInformation(
    params: IRepositoryParams<MutationEnvironmentalInformationCreateArgs>,
  ): Promise<boolean> {
    try {
      return this.repository
        .createEnvironmentalInformation(params)
        .then((result) => !!result?.id)
        .catch((err) =>
          this.errorCatcher(err, 'createEnvironmentalInformation'),
        );
    } catch (error) {
      this.errorCatcher(error, 'createEnvironmentalInformation');
    }
  }

  async deleteEnvironmentalInformation(
    params: IRepositoryParams<MutationEnvironmentalInformationDeleteArgs>,
  ): Promise<boolean> {
    try {
      return this.repository
        .deleteEnvironmentalInformation(params)
        .then((result) => !!result?.success)
        .catch((err) =>
          this.errorCatcher(err, 'deleteEnvironmentalInformation'),
        );
    } catch (error) {
      this.errorCatcher(error, 'deleteEnvironmentalInformation');
    }
  }

  async updateEnvironmentalInformation(
    params: IRepositoryParams<MutationEnvironmentalInformationUpdateArgs>,
  ): Promise<boolean> {
    try {
      return this.repository
        .updateEnvironmentalInformation(params)
        .then((result) => !!result?.id)
        .catch((err) =>
          this.errorCatcher(err, 'updateEnvironmentalInformation'),
        );
    } catch (error) {
      this.errorCatcher(error, 'updateEnvironmentalInformation');
    }
  }
}
