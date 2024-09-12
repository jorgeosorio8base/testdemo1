import { IMaintenanceRecordEntity } from './interfaces';
import { MaintenanceRecord as GQLMaintenanceRecord } from '../../definitions/schema';

export class MaintenanceRecordEntity implements IMaintenanceRecordEntity {
  private readonly _id?: string;
  private readonly _createdAt?: string;
  private readonly _updatedAt?: string;

  private readonly _description?: string;
  private readonly _date_performed?: string;

  constructor(data: GQLMaintenanceRecord | null) {
    this._id = data?.id || undefined;
    this._createdAt = data?.createdAt || undefined;
    this._updatedAt = data?.updatedAt || undefined;

    this._description = data?.description || undefined;
    this._date_performed = data?.date_performed || undefined;
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

  get Description(): string | undefined {
    return this._description;
  }

  get DatePerformed(): string | undefined {
    return this._date_performed;
  }
}
