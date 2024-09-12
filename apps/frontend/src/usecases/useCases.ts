import {
  IUserUseCase,
  UserUseCase,
  IBuildingProfileUseCase,
  BuildingProfileUseCase,
  IMaintenanceRecordUseCase,
  MaintenanceRecordUseCase,
  IEquipmentInventoryUseCase,
  EquipmentInventoryUseCase,
  IPermitUseCase,
  PermitUseCase,
  IImprovementUseCase,
  ImprovementUseCase,
  IIndoorAirQualityUseCase,
  IndoorAirQualityUseCase,
  IEnvironmentalInformationUseCase,
  EnvironmentalInformationUseCase,
  IEnergyEfficiencyUseCase,
  EnergyEfficiencyUseCase,
  IComplianceRecordUseCase,
  ComplianceRecordUseCase,
  ICertificationUseCase,
  CertificationUseCase,
  ISiteDocumentationUseCase,
  SiteDocumentationUseCase,
  ISubscriptionTierUseCase,
  SubscriptionTierUseCase,
  IWorkOrderUseCase,
  WorkOrderUseCase,
  IReportUseCase,
  ReportUseCase,
  ISearchCriteriaUseCase,
  SearchCriteriaUseCase,
  INotificationUseCase,
  NotificationUseCase,
} from '@testdemo1/core';

export interface IUseCases {
  User: IUserUseCase;
  BuildingProfile: IBuildingProfileUseCase;
  MaintenanceRecord: IMaintenanceRecordUseCase;
  EquipmentInventory: IEquipmentInventoryUseCase;
  Permit: IPermitUseCase;
  Improvement: IImprovementUseCase;
  IndoorAirQuality: IIndoorAirQualityUseCase;
  EnvironmentalInformation: IEnvironmentalInformationUseCase;
  EnergyEfficiency: IEnergyEfficiencyUseCase;
  ComplianceRecord: IComplianceRecordUseCase;
  Certification: ICertificationUseCase;
  SiteDocumentation: ISiteDocumentationUseCase;
  SubscriptionTier: ISubscriptionTierUseCase;
  WorkOrder: IWorkOrderUseCase;
  Report: IReportUseCase;
  SearchCriteria: ISearchCriteriaUseCase;
  Notification: INotificationUseCase;
}

export const UseCases: IUseCases = {
  User: new UserUseCase(),
  BuildingProfile: new BuildingProfileUseCase(),
  MaintenanceRecord: new MaintenanceRecordUseCase(),
  EquipmentInventory: new EquipmentInventoryUseCase(),
  Permit: new PermitUseCase(),
  Improvement: new ImprovementUseCase(),
  IndoorAirQuality: new IndoorAirQualityUseCase(),
  EnvironmentalInformation: new EnvironmentalInformationUseCase(),
  EnergyEfficiency: new EnergyEfficiencyUseCase(),
  ComplianceRecord: new ComplianceRecordUseCase(),
  Certification: new CertificationUseCase(),
  SiteDocumentation: new SiteDocumentationUseCase(),
  SubscriptionTier: new SubscriptionTierUseCase(),
  WorkOrder: new WorkOrderUseCase(),
  Report: new ReportUseCase(),
  SearchCriteria: new SearchCriteriaUseCase(),
  Notification: new NotificationUseCase(),
};
