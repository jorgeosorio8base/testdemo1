export interface IBuildingProfileEntity {
  Id?: string;
  CreatedAt?: string;
  UpdatedAt?: string;
  Name?: string;
  Address?: string;

  Demographics?: Record<string, any>;
}
