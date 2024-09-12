import { ISubscriptionTierEntity } from './interfaces';
import { SubscriptionTier as GQLSubscriptionTier } from '../../definitions/schema';

export class SubscriptionTierEntity implements ISubscriptionTierEntity {
  private readonly _id?: string;
  private readonly _createdAt?: string;
  private readonly _updatedAt?: string;
  private readonly _name?: string;
  private readonly _description?: string;
  private readonly _price?: number;
  private readonly _features?: Record<string, any>;

  constructor(data: GQLSubscriptionTier | null) {
    this._id = data?.id || undefined;
    this._createdAt = data?.createdAt || undefined;
    this._updatedAt = data?.updatedAt || undefined;
    this._name = data?.name || undefined;
    this._description = data?.description || undefined;
    this._price = data?.price || undefined;
    this._features = data?.features || undefined;
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

  get Description(): string | undefined {
    return this._description;
  }

  get Price(): number | undefined {
    return this._price;
  }

  get Features(): Record<string, any> | undefined {
    return this._features;
  }
}
