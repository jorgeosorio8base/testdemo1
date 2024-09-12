import { IFileEntity } from './iFileEntity';

export interface ISiteDocumentationEntity {
  Id?: string;
  CreatedAt?: string;
  UpdatedAt?: string;

  DocumentType?: string;
  DocumentFile?: IFileEntity;
  UploadDate?: string;
  Description?: string;
}
