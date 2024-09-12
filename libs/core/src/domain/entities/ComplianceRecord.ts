import { IComplianceRecordEntity } from './interfaces';
import { ComplianceRecord as GQLComplianceRecord } from '../../definitions/schema';

export class ComplianceRecordEntity implements IComplianceRecordEntity {
  private readonly _id?: string;
  private readonly _createdAt?: string;
  private readonly _updatedAt?: string;

  private readonly _compliance_type?: string;
  private readonly _status?: string;
  private readonly _issue_date?: string;
  private readonly _expiration_date?: string;
  private readonly _description?: string;

  constructor(data: GQLComplianceRecord | null) {
    this._id = data?.id || undefined;
    this._createdAt = data?.createdAt || undefined;
    this._updatedAt = data?.updatedAt || undefined;

    this._compliance_type = data?.compliance_type || undefined;
    this._status = data?.status || undefined;
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

  get ComplianceType(): string | undefined {
    return this._compliance_type;
  }

  get Status(): string | undefined {
    return this._status;
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
