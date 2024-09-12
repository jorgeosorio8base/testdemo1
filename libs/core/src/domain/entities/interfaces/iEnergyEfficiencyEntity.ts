export interface IEnergyEfficiencyEntity {
  Id?: string;
  CreatedAt?: string;
  UpdatedAt?: string;

  MeasurementDate?: string;
  EnergyConsumption?: number;
  EnergyCost?: number;
  EfficiencyRating?: string;
}
