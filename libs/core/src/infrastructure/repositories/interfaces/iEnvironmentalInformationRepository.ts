import {
  EnvironmentalInformation,
  QueryEnvironmentalInformationArgs,
  QueryEnvironmentalInformationListArgs,
  EnvironmentalInformationListResponse,
  MutationEnvironmentalInformationCreateArgs,
  MutationEnvironmentalInformationDeleteArgs,
  MutationEnvironmentalInformationUpdateArgs,
  SuccessResponse,
} from '../../../definitions/schema';
import { IRepositoryParams } from './iRepositoryParams';

export interface IEnvironmentalInformationRepository {
  getEnvironmentalInformation(
    params: IRepositoryParams<QueryEnvironmentalInformationArgs>,
  ): Promise<EnvironmentalInformation | null>;
  getEnvironmentalInformationList(
    params: IRepositoryParams<QueryEnvironmentalInformationListArgs>,
  ): Promise<EnvironmentalInformationListResponse>;
  createEnvironmentalInformation(
    params: IRepositoryParams<MutationEnvironmentalInformationCreateArgs>,
  ): Promise<EnvironmentalInformation | null>;
  deleteEnvironmentalInformation(
    params: IRepositoryParams<MutationEnvironmentalInformationDeleteArgs>,
  ): Promise<SuccessResponse | null>;
  updateEnvironmentalInformation(
    params: IRepositoryParams<MutationEnvironmentalInformationUpdateArgs>,
  ): Promise<EnvironmentalInformation | null>;
}
