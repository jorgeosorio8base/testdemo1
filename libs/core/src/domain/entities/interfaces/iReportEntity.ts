import { IFileEntity } from './iFileEntity';

export interface IReportEntity {
  Id?: string;
  CreatedAt?: string;
  UpdatedAt?: string;

  Name?: string;
  Description?: string;
  Configuration?: Record<string, any>;
  GeneratedDate?: string;
  File?: IFileEntity;
}
