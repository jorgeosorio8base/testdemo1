import { IBuildingProfileEntity } from './interfaces';
import { BuildingProfile as GQLBuildingProfile } from '../../definitions/schema';

export class BuildingProfileEntity implements IBuildingProfileEntity {
  private readonly _id?: string;
  private readonly _createdAt?: string;
  private readonly _updatedAt?: string;
  private readonly _name?: string;
  private readonly _address?: string;

  private readonly _demographics?: Record<string, any>;

  constructor(data: GQLBuildingProfile | null) {
    this._id = data?.id || undefined;
    this._createdAt = data?.createdAt || undefined;
    this._updatedAt = data?.updatedAt || undefined;
    this._name = data?.name || undefined;
    this._address = data?.address || undefined;

    this._demographics = data?.demographics || undefined;
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

  get Name(): string | undefined {
    return this._name;
  }

  get Address(): string | undefined {
    return this._address;
  }

  get Demographics(): Record<string, any> | undefined {
    return this._demographics;
  }
}
