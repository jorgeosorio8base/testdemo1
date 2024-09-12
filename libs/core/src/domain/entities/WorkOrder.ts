import { IWorkOrderEntity } from './interfaces';
import { WorkOrder as GQLWorkOrder } from '../../definitions/schema';

export class WorkOrderEntity implements IWorkOrderEntity {
  private readonly _id?: string;
  private readonly _createdAt?: string;
  private readonly _updatedAt?: string;

  private readonly _description?: string;
  private readonly _status?: string;
  private readonly _priority?: string;
  private readonly _created_date?: string;
  private readonly _completion_date?: string;

  constructor(data: GQLWorkOrder | null) {
    this._id = data?.id || undefined;
    this._createdAt = data?.createdAt || undefined;
    this._updatedAt = data?.updatedAt || undefined;

    this._description = data?.description || undefined;
    this._status = data?.status || undefined;
    this._priority = data?.priority || undefined;
    this._created_date = data?.created_date || undefined;
    this._completion_date = data?.completion_date || undefined;
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

  get Status(): string | undefined {
    return this._status;
  }

  get Priority(): string | undefined {
    return this._priority;
  }

  get CreatedDate(): string | undefined {
    return this._created_date;
  }

  get CompletionDate(): string | undefined {
    return this._completion_date;
  }
}
