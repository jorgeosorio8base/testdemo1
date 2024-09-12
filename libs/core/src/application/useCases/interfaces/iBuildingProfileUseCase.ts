import {
  QueryBuildingProfileArgs,
  QueryBuildingProfileListArgs,
  MutationBuildingProfileCreateArgs,
  MutationBuildingProfileDeleteArgs,
  MutationBuildingProfileUpdateArgs,
} from '../../../definitions/schema';
import { BuildingProfileEntity } from '../../../domain';
import { IRepositoryParams } from '../../../infrastructure';

export interface IBuildingProfileUseCase {
  getBuildingProfile(
    params: IRepositoryParams<QueryBuildingProfileArgs>,
  ): Promise<BuildingProfileEntity | null>;
  getBuildingProfileList(
    params: IRepositoryParams<QueryBuildingProfileListArgs>,
  ): Promise<{
    count: number;
    items: Array<BuildingProfileEntity>;
  }>;
  createBuildingProfile(
    params: IRepositoryParams<MutationBuildingProfileCreateArgs>,
  ): Promise<boolean>;
  deleteBuildingProfile(
    params: IRepositoryParams<MutationBuildingProfileDeleteArgs>,
  ): Promise<boolean>;
  updateBuildingProfile(
    params: IRepositoryParams<MutationBuildingProfileUpdateArgs>,
  ): Promise<boolean>;
}
