import { IImprovementEntity } from './interfaces';
import { Improvement as GQLImprovement } from '../../definitions/schema';

export class ImprovementEntity implements IImprovementEntity {
  private readonly _id?: string;
  private readonly _createdAt?: string;
  private readonly _updatedAt?: string;

  private readonly _description?: string;
  private readonly _date_completed?: string;
  private readonly _cost?: number;

  constructor(data: GQLImprovement | null) {
    this._id = data?.id || undefined;
    this._createdAt = data?.createdAt || undefined;
    this._updatedAt = data?.updatedAt || undefined;

    this._description = data?.description || undefined;
    this._date_completed = data?.date_completed || undefined;
    this._cost = data?.cost || undefined;
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

  get DateCompleted(): string | undefined {
    return this._date_completed;
  }

  get Cost(): number | undefined {
    return this._cost;
  }
}
