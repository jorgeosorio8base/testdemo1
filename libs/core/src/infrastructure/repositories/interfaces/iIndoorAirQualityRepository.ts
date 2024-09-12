import {
  IndoorAirQuality,
  QueryIndoorAirQualityArgs,
  QueryIndoorAirQualitiesListArgs,
  IndoorAirQualityListResponse,
  MutationIndoorAirQualityCreateArgs,
  MutationIndoorAirQualityDeleteArgs,
  MutationIndoorAirQualityUpdateArgs,
  SuccessResponse,
} from '../../../definitions/schema';
import { IRepositoryParams } from './iRepositoryParams';

export interface IIndoorAirQualityRepository {
  getIndoorAirQuality(
    params: IRepositoryParams<QueryIndoorAirQualityArgs>,
  ): Promise<IndoorAirQuality | null>;
  getIndoorAirQualityList(
    params: IRepositoryParams<QueryIndoorAirQualitiesListArgs>,
  ): Promise<IndoorAirQualityListResponse>;
  createIndoorAirQuality(
    params: IRepositoryParams<MutationIndoorAirQualityCreateArgs>,
  ): Promise<IndoorAirQuality | null>;
  deleteIndoorAirQuality(
    params: IRepositoryParams<MutationIndoorAirQualityDeleteArgs>,
  ): Promise<SuccessResponse | null>;
  updateIndoorAirQuality(
    params: IRepositoryParams<MutationIndoorAirQualityUpdateArgs>,
  ): Promise<IndoorAirQuality | null>;
}
