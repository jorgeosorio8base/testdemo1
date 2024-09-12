export interface IIndoorAirQualityEntity {
  Id?: string;
  CreatedAt?: string;
  UpdatedAt?: string;

  MeasurementDate?: string;
  AirQualityLevel?: string;
  PollutantLevels?: Record<string, any>;
}
