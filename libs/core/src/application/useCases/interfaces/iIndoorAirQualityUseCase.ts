import {
  QueryIndoorAirQualityArgs,
  QueryIndoorAirQualitiesListArgs,
  MutationIndoorAirQualityCreateArgs,
  MutationIndoorAirQualityDeleteArgs,
  MutationIndoorAirQualityUpdateArgs,
} from '../../../definitions/schema';
import { IndoorAirQualityEntity } from '../../../domain';
import { IRepositoryParams } from '../../../infrastructure';

export interface IIndoorAirQualityUseCase {
  getIndoorAirQuality(
    params: IRepositoryParams<QueryIndoorAirQualityArgs>,
  ): Promise<IndoorAirQualityEntity | null>;
  getIndoorAirQualityList(
    params: IRepositoryParams<QueryIndoorAirQualitiesListArgs>,
  ): Promise<{
    count: number;
    items: Array<IndoorAirQualityEntity>;
  }>;
  createIndoorAirQuality(
    params: IRepositoryParams<MutationIndoorAirQualityCreateArgs>,
  ): Promise<boolean>;
  deleteIndoorAirQuality(
    params: IRepositoryParams<MutationIndoorAirQualityDeleteArgs>,
  ): Promise<boolean>;
  updateIndoorAirQuality(
    params: IRepositoryParams<MutationIndoorAirQualityUpdateArgs>,
  ): Promise<boolean>;
}
