import { ICertificationEntity } from './interfaces';
import { Certification as GQLCertification } from '../../definitions/schema';

export class CertificationEntity implements ICertificationEntity {
  private readonly _id?: string;
  private readonly _createdAt?: string;
  private readonly _updatedAt?: string;

  private readonly _certification_type?: string;
  private readonly _issue_date?: string;
  private readonly _expiration_date?: string;
  private readonly _description?: string;

  constructor(data: GQLCertification | null) {
    this._id = data?.id || undefined;
    this._createdAt = data?.createdAt || undefined;
    this._updatedAt = data?.updatedAt || undefined;

    this._certification_type = data?.certification_type || undefined;
    this._issue_date = data?.issue_date || undefined;
    this._expiration_date = data?.expiration_date || undefined;
    this._description = data?.description || undefined;
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

  get CertificationType(): string | undefined {
    return this._certification_type;
  }

  get IssueDate(): string | undefined {
    return this._issue_date;
  }

  get ExpirationDate(): string | undefined {
    return this._expiration_date;
  }

  get Description(): string | undefined {
    return this._description;
  }
}
