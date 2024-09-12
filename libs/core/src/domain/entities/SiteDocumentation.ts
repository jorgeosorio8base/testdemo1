import { ISiteDocumentationEntity, IFileEntity } from './interfaces';
import {
  File as GQLFile,
  SiteDocumentation as GQLSiteDocumentation,
} from '../../definitions/schema';
import { FileEntity } from './File';

export class SiteDocumentationEntity implements ISiteDocumentationEntity {
  private readonly _id?: string;
  private readonly _createdAt?: string;
  private readonly _updatedAt?: string;

  private readonly _document_type?: string;
  private readonly _document_file?: GQLFile;
  private readonly _upload_date?: string;
  private readonly _description?: string;

  constructor(data: GQLSiteDocumentation | null) {
    this._id = data?.id || undefined;
    this._createdAt = data?.createdAt || undefined;
    this._updatedAt = data?.updatedAt || undefined;

    this._document_type = data?.document_type || undefined;
    this._document_file = data?.document_file || undefined;
    this._upload_date = data?.upload_date || undefined;
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

  get DocumentType(): string | undefined {
    return this._document_type;
  }

  get DocumentFile(): IFileEntity | undefined {
    return new FileEntity(this._document_file);
  }

  get UploadDate(): string | undefined {
    return this._upload_date;
  }

  get Description(): string | undefined {
    return this._description;
  }
}
