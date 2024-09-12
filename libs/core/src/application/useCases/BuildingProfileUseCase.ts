import { IBuildingProfileUseCase } from './interfaces';
import { BuildingProfileEntity } from '../../domain';
import {
  QueryBuildingProfileArgs,
  QueryBuildingProfileListArgs,
  MutationBuildingProfileCreateArgs,
  MutationBuildingProfileDeleteArgs,
  MutationBuildingProfileUpdateArgs,
} from '../../definitions/schema';
import {
  IBuildingProfileRepository,
  BuildingProfileRepository,
  IRepositoryParams,
} from '../../infrastructure';

export class BuildingProfileUseCase implements IBuildingProfileUseCase {
  private readonly repository: IBuildingProfileRepository;
  private readonly errorCatcher: (error: unknown, methodName: string) => never;

  constructor() {
    this.repository = new BuildingProfileRepository();
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

  async getBuildingProfile(
    params: IRepositoryParams<QueryBuildingProfileArgs>,
  ): Promise<BuildingProfileEntity | null> {
    try {
      return this.repository
        .getBuildingProfile(params)
        .then((result) => new BuildingProfileEntity(result))
        .catch((err) => this.errorCatcher(err, 'getBuildingProfile'));
    } catch (error) {
      this.errorCatcher(error, 'getBuildingProfile');
    }
  }

  async getBuildingProfileList(
    params: IRepositoryParams<QueryBuildingProfileListArgs>,
  ): Promise<{
    count: number;
    items: Array<BuildingProfileEntity>;
  }> {
    try {
      return this.repository
        .getBuildingProfileList(params)
        .then((result) => {
          return {
            count: result?.count || 0,
            items:
              result?.items?.map((item) => new BuildingProfileEntity(item)) ||
              [],
          };
        })
        .catch((err) => this.errorCatcher(err, 'getBuildingProfileList'));
    } catch (error) {
      this.errorCatcher(error, 'getBuildingProfileList');
    }
  }

  async createBuildingProfile(
    params: IRepositoryParams<MutationBuildingProfileCreateArgs>,
  ): Promise<boolean> {
    try {
      return this.repository
        .createBuildingProfile(params)
        .then((result) => !!result?.id)
        .catch((err) => this.errorCatcher(err, 'createBuildingProfile'));
    } catch (error) {
      this.errorCatcher(error, 'createBuildingProfile');
    }
  }

  async deleteBuildingProfile(
    params: IRepositoryParams<MutationBuildingProfileDeleteArgs>,
  ): Promise<boolean> {
    try {
      return this.repository
        .deleteBuildingProfile(params)
        .then((result) => !!result?.success)
        .catch((err) => this.errorCatcher(err, 'deleteBuildingProfile'));
    } catch (error) {
      this.errorCatcher(error, 'deleteBuildingProfile');
    }
  }

  async updateBuildingProfile(
    params: IRepositoryParams<MutationBuildingProfileUpdateArgs>,
  ): Promise<boolean> {
    try {
      return this.repository
        .updateBuildingProfile(params)
        .then((result) => !!result?.id)
        .catch((err) => this.errorCatcher(err, 'updateBuildingProfile'));
    } catch (error) {
      this.errorCatcher(error, 'updateBuildingProfile');
    }
  }
}
