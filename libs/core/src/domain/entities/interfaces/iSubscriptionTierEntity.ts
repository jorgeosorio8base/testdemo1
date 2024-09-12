export interface ISubscriptionTierEntity {
  Id?: string;
  CreatedAt?: string;
  UpdatedAt?: string;
  Name?: string;
  Description?: string;
  Price?: number;
  Features?: Record<string, any>;
}
