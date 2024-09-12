import { IEquipmentInventoryEntity } from './interfaces';
import { EquipmentInventory as GQLEquipmentInventory } from '../../definitions/schema';

export class EquipmentInventoryEntity implements IEquipmentInventoryEntity {
  private readonly _id?: string;
  private readonly _createdAt?: string;
  private readonly _updatedAt?: string;

  private readonly _equipment_name?: string;
  private readonly _equipment_type?: string;
  private readonly _installation_date?: string;
  private readonly _last_maintenance_date?: string;

  constructor(data: GQLEquipmentInventory | null) {
    this._id = data?.id || undefined;
    this._createdAt = data?.createdAt || undefined;
    this._updatedAt = data?.updatedAt || undefined;

    this._equipment_name = data?.equipment_name || undefined;
    this._equipment_type = data?.equipment_type || undefined;
    this._installation_date = data?.installation_date || undefined;
    this._last_maintenance_date = data?.last_maintenance_date || undefined;
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

  get EquipmentName(): string | undefined {
    return this._equipment_name;
  }

  get EquipmentType(): string | undefined {
    return this._equipment_type;
  }

  get InstallationDate(): string | undefined {
    return this._installation_date;
  }

  get LastMaintenanceDate(): string | undefined {
    return this._last_maintenance_date;
  }
}
