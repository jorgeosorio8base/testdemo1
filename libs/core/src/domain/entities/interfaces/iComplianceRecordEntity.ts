export interface IComplianceRecordEntity {
  Id?: string;
  CreatedAt?: string;
  UpdatedAt?: string;

  ComplianceType?: string;
  Status?: string;
  IssueDate?: string;
  ExpirationDate?: string;
  Description?: string;
}
