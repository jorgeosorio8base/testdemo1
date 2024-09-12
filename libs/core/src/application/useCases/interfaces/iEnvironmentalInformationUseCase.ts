import {
  QueryEnvironmentalInformationArgs,
  QueryEnvironmentalInformationListArgs,
  MutationEnvironmentalInformationCreateArgs,
  MutationEnvironmentalInformationDeleteArgs,
  MutationEnvironmentalInformationUpdateArgs,
} from '../../../definitions/schema';
import { EnvironmentalInformationEntity } from '../../../domain';
import { IRepositoryParams } from '../../../infrastructure';

export interface IEnvironmentalInformationUseCase {
  getEnvironmentalInformation(
    params: IRepositoryParams<QueryEnvironmentalInformationArgs>,
  ): Promise<EnvironmentalInformationEntity | null>;
  getEnvironmentalInformationList(
    params: IRepositoryParams<QueryEnvironmentalInformationListArgs>,
  ): Promise<{
    count: number;
    items: Array<EnvironmentalInformationEntity>;
  }>;
  createEnvironmentalInformation(
    params: IRepositoryParams<MutationEnvironmentalInformationCreateArgs>,
  ): Promise<boolean>;
  deleteEnvironmentalInformation(
    params: IRepositoryParams<MutationEnvironmentalInformationDeleteArgs>,
  ): Promise<boolean>;
  updateEnvironmentalInformation(
    params: IRepositoryParams<MutationEnvironmentalInformationUpdateArgs>,
  ): Promise<boolean>;
}
