import { INotificationEntity } from './interfaces';
import { Notification as GQLNotification } from '../../definitions/schema';

export class NotificationEntity implements INotificationEntity {
  private readonly _id?: string;
  private readonly _createdAt?: string;
  private readonly _updatedAt?: string;

  private readonly _message?: string;
  private readonly _type?: string;
  private readonly _read?: any;
  private readonly _created_date?: string;

  constructor(data: GQLNotification | null) {
    this._id = data?.id || undefined;
    this._createdAt = data?.createdAt || undefined;
    this._updatedAt = data?.updatedAt || undefined;

    this._message = data?.message || undefined;
    this._type = data?.type || undefined;
    this._read = data?.read || undefined;
    this._created_date = data?.created_date || undefined;
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

  get Message(): string | undefined {
    return this._message;
  }

  get Type(): string | undefined {
    return this._type;
  }

  get Read(): any | undefined {
    return this._read;
  }

  get CreatedDate(): string | undefined {
    return this._created_date;
  }
}
