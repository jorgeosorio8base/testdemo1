import { IIndoorAirQualityEntity } from './interfaces';
import { IndoorAirQuality as GQLIndoorAirQuality } from '../../definitions/schema';

export class IndoorAirQualityEntity implements IIndoorAirQualityEntity {
  private readonly _id?: string;
  private readonly _createdAt?: string;
  private readonly _updatedAt?: string;

  private readonly _measurement_date?: string;
  private readonly _air_quality_level?: string;
  private readonly _pollutant_levels?: Record<string, any>;

  constructor(data: GQLIndoorAirQuality | null) {
    this._id = data?.id || undefined;
    this._createdAt = data?.createdAt || undefined;
    this._updatedAt = data?.updatedAt || undefined;

    this._measurement_date = data?.measurement_date || undefined;
    this._air_quality_level = data?.air_quality_level || undefined;
    this._pollutant_levels = data?.pollutant_levels || undefined;
  }

  get Id(): string | undefined {
    return this._id;
  }

  get CreatedAt(): string | undefined {
    return this._createdAt;
  }

  get UpdatedAt(): string | undefined {
    return this._updatedAt;
  }

  get MeasurementDate(): string | undefined {
    return this._measurement_date;
  }

  get AirQualityLevel(): string | undefined {
    return this._air_quality_level;
  }

  get PollutantLevels(): Record<string, any> | undefined {
    return this._pollutant_levels;
  }
}
