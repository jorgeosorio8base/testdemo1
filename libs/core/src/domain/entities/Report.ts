import { IReportEntity, IFileEntity } from './interfaces';
import { File as GQLFile, Report as GQLReport } from '../../definitions/schema';
import { FileEntity } from './File';

export class ReportEntity implements IReportEntity {
  private readonly _id?: string;
  private readonly _createdAt?: string;
  private readonly _updatedAt?: string;

  private readonly _name?: string;
  private readonly _description?: string;
  private readonly _configuration?: Record<string, any>;
  private readonly _generated_date?: string;
  private readonly _file?: GQLFile;

  constructor(data: GQLReport | null) {
    this._id = data?.id || undefined;
    this._createdAt = data?.createdAt || undefined;
    this._updatedAt = data?.updatedAt || undefined;

    this._name = data?.name || undefined;
    this._description = data?.description || undefined;
    this._configuration = data?.configuration || undefined;
    this._generated_date = data?.generated_date || undefined;
    this._file = data?.file || undefined;
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

  get Configuration(): Record<string, any> | undefined {
    return this._configuration;
  }

  get GeneratedDate(): string | undefined {
    return this._generated_date;
  }

  get File(): IFileEntity | undefined {
    return new FileEntity(this._file);
  }
}
