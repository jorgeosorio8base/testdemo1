import {
  BuildingProfile,
  QueryBuildingProfileArgs,
  QueryBuildingProfileListArgs,
  BuildingProfileListResponse,
  MutationBuildingProfileCreateArgs,
  MutationBuildingProfileDeleteArgs,
  MutationBuildingProfileUpdateArgs,
  SuccessResponse,
} from '../../../definitions/schema';
import { IRepositoryParams } from './iRepositoryParams';

export interface IBuildingProfileRepository {
  getBuildingProfile(
    params: IRepositoryParams<QueryBuildingProfileArgs>,
  ): Promise<BuildingProfile | null>;
  getBuildingProfileList(
    params: IRepositoryParams<QueryBuildingProfileListArgs>,
  ): Promise<BuildingProfileListResponse>;
  createBuildingProfile(
    params: IRepositoryParams<MutationBuildingProfileCreateArgs>,
  ): Promise<BuildingProfile | null>;
  deleteBuildingProfile(
    params: IRepositoryParams<MutationBuildingProfileDeleteArgs>,
  ): Promise<SuccessResponse | null>;
  updateBuildingProfile(
    params: IRepositoryParams<MutationBuildingProfileUpdateArgs>,
  ): Promise<BuildingProfile | null>;
}
