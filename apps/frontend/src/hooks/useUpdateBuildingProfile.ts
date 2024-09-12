import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useSession } from 'next-auth/react';
import { UseCases } from '../usecases';
import { MutationBuildingProfileUpdateArgs } from '@testdemo1/core';

/** 
             * Type: MutationBuildingProfileUpdateArgs
            {
 *   data: BuildingProfileUpdateInput
 *   destroyDetached?: InputMaybe<Scalars['Boolean']['input']>
 *   filter?: InputMaybe<BuildingProfileKeyFilter>
 *   force?: InputMaybe<Scalars['Boolean']['input']>
 * }
 * 
 *  BuildingProfileUpdateInput = {
 *   Certification?: InputMaybe<BuildingProfileCertificationUpdateRelationInput>
 *   ComplianceRecord?: InputMaybe<BuildingProfileComplianceRecordUpdateRelationInput>
 *   EnergyEfficiency?: InputMaybe<BuildingProfileEnergyEfficiencyUpdateRelationInput>
 *   EnvironmentalInformation?: InputMaybe<BuildingProfileEnvironmentalInformationUpdateRelationInput>
 *   EquipmentInventory?: InputMaybe<BuildingProfileEquipmentInventoryUpdateRelationInput>
 *   Improvement?: InputMaybe<BuildingProfileImprovementUpdateRelationInput>
 *   IndoorAirQuality?: InputMaybe<BuildingProfileIndoorAirQualityUpdateRelationInput>
 *   MaintenanceRecord?: InputMaybe<BuildingProfileMaintenanceRecordUpdateRelationInput>
 *   Permit?: InputMaybe<BuildingProfilePermitUpdateRelationInput>
 *   SiteDocumentation?: InputMaybe<BuildingProfileSiteDocumentationUpdateRelationInput>
 *   WorkOrder?: InputMaybe<BuildingProfileWorkOrderUpdateRelationInput>
 *   address?: InputMaybe<Scalars['String']['input']>
 *   certification?: InputMaybe<BuildingProfileCertificationUpdateRelationInput>
 *   compliance_record?: InputMaybe<BuildingProfileCompliance_RecordUpdateRelationInput>
 *   demographics?: InputMaybe<Scalars['JSON']['input']>
 *   energy_efficiency?: InputMaybe<BuildingProfileEnergy_EfficiencyUpdateRelationInput>
 *   environmental_information?: InputMaybe<BuildingProfileEnvironmental_InformationUpdateRelationInput>
 *   equipment_inventory?: InputMaybe<BuildingProfileEquipment_InventoryUpdateRelationInput>
 *   id?: InputMaybe<Scalars['ID']['input']>
 *   improvements?: InputMaybe<BuildingProfileImprovementsUpdateRelationInput>
 *   indoor_air_quality?: InputMaybe<BuildingProfileIndoor_Air_QualityUpdateRelationInput>
 *   maintenance_records?: InputMaybe<BuildingProfileMaintenance_RecordsUpdateRelationInput>
 *   name?: InputMaybe<Scalars['String']['input']>
 *   owner_id?: InputMaybe<BuildingProfileOwner_IdUpdateRelationInput>
 *   site_documentation?: InputMaybe<BuildingProfileSite_DocumentationUpdateRelationInput>
 * }
 * 
 * 
 * 
 * export type BuildingProfileCertificationUpdateRelationInput = {
 *   connect?: InputMaybe<CertificationKeyFilter>
 *   create?: InputMaybe<BuildingProfile_CertificationCreateInput>
 *   disconnect?: InputMaybe<CertificationKeyFilter>
 *   reconnect?: InputMaybe<CertificationKeyFilter>
 *   update?: InputMaybe<BuildingProfile_CertificationUpdateInput>
 * }
 * 
 * export type BuildingProfileComplianceRecordUpdateRelationInput = {
 *   connect?: InputMaybe<ComplianceRecordKeyFilter>
 *   create?: InputMaybe<Building_Profile_Id_ComplianceRecordCreateInput>
 *   disconnect?: InputMaybe<ComplianceRecordKeyFilter>
 *   reconnect?: InputMaybe<ComplianceRecordKeyFilter>
 *   update?: InputMaybe<Building_Profile_Id_ComplianceRecordUpdateInput>
 * }
 * 
 * export type BuildingProfileEnergyEfficiencyUpdateRelationInput = {
 *   connect?: InputMaybe<EnergyEfficiencyKeyFilter>
 *   create?: InputMaybe<Building_Profile_Id_EnergyEfficiencyCreateInput>
 *   disconnect?: InputMaybe<EnergyEfficiencyKeyFilter>
 *   reconnect?: InputMaybe<EnergyEfficiencyKeyFilter>
 *   update?: InputMaybe<Building_Profile_Id_EnergyEfficiencyUpdateInput>
 * }
 * 
 * export type BuildingProfileEnvironmentalInformationUpdateRelationInput = {
 *   connect?: InputMaybe<EnvironmentalInformationKeyFilter>
 *   create?: InputMaybe<Building_Profile_Id_EnvironmentalInformationCreateInput>
 *   disconnect?: InputMaybe<EnvironmentalInformationKeyFilter>
 *   reconnect?: InputMaybe<EnvironmentalInformationKeyFilter>
 *   update?: InputMaybe<Building_Profile_Id_EnvironmentalInformationUpdateInput>
 * }
 * 
 * export type BuildingProfileEquipmentInventoryUpdateRelationInput = {
 *   connect?: InputMaybe<EquipmentInventoryKeyFilter>
 *   create?: InputMaybe<Building_Profile_Id_EquipmentInventoryCreateInput>
 *   disconnect?: InputMaybe<EquipmentInventoryKeyFilter>
 *   reconnect?: InputMaybe<EquipmentInventoryKeyFilter>
 *   update?: InputMaybe<Building_Profile_Id_EquipmentInventoryUpdateInput>
 * }
 * 
 * export type BuildingProfileImprovementUpdateRelationInput = {
 *   connect?: InputMaybe<ImprovementKeyFilter>
 *   create?: InputMaybe<Building_Profile_Id_ImprovementCreateInput>
 *   disconnect?: InputMaybe<ImprovementKeyFilter>
 *   reconnect?: InputMaybe<ImprovementKeyFilter>
 *   update?: InputMaybe<Building_Profile_Id_ImprovementUpdateInput>
 * }
 * 
 * export type BuildingProfileIndoorAirQualityUpdateRelationInput = {
 *   connect?: InputMaybe<IndoorAirQualityKeyFilter>
 *   create?: InputMaybe<Building_Profile_Id_IndoorAirQualityCreateInput>
 *   disconnect?: InputMaybe<IndoorAirQualityKeyFilter>
 *   reconnect?: InputMaybe<IndoorAirQualityKeyFilter>
 *   update?: InputMaybe<Building_Profile_Id_IndoorAirQualityUpdateInput>
 * }
 * 
 * export type BuildingProfileMaintenanceRecordUpdateRelationInput = {
 *   connect?: InputMaybe<MaintenanceRecordKeyFilter>
 *   create?: InputMaybe<Building_Profile_Id_MaintenanceRecordCreateInput>
 *   disconnect?: InputMaybe<MaintenanceRecordKeyFilter>
 *   reconnect?: InputMaybe<MaintenanceRecordKeyFilter>
 *   update?: InputMaybe<Building_Profile_Id_MaintenanceRecordUpdateInput>
 * }
 * 
 * export type BuildingProfilePermitUpdateRelationInput = {
 *   connect?: InputMaybe<PermitKeyFilter>
 *   create?: InputMaybe<Building_Profile_Id_PermitCreateInput>
 *   disconnect?: InputMaybe<PermitKeyFilter>
 *   reconnect?: InputMaybe<PermitKeyFilter>
 *   update?: InputMaybe<Building_Profile_Id_PermitUpdateInput>
 * }
 * 
 * export type BuildingProfileSiteDocumentationUpdateRelationInput = {
 *   connect?: InputMaybe<SiteDocumentationKeyFilter>
 *   create?: InputMaybe<Building_Profile_Id_SiteDocumentationCreateInput>
 *   disconnect?: InputMaybe<SiteDocumentationKeyFilter>
 *   reconnect?: InputMaybe<SiteDocumentationKeyFilter>
 *   update?: InputMaybe<Building_Profile_Id_SiteDocumentationUpdateInput>
 * }
 * 
 * export type BuildingProfileWorkOrderUpdateRelationInput = {
 *   connect?: InputMaybe<WorkOrderKeyFilter>
 *   create?: InputMaybe<Building_Profile_Id_WorkOrderCreateInput>
 *   disconnect?: InputMaybe<WorkOrderKeyFilter>
 *   reconnect?: InputMaybe<WorkOrderKeyFilter>
 *   update?: InputMaybe<Building_Profile_Id_WorkOrderUpdateInput>
 * }
 * 
 * export type BuildingProfileCompliance_RecordUpdateRelationInput = {
 *   connect?: InputMaybe<ComplianceRecordKeyFilter>
 *   create?: InputMaybe<BuildingProfile_ComplianceRecordCreateInput>
 *   disconnect?: InputMaybe<ComplianceRecordKeyFilter>
 *   reconnect?: InputMaybe<ComplianceRecordKeyFilter>
 *   update?: InputMaybe<BuildingProfile_ComplianceRecordUpdateInput>
 * }
 * 
 * export type BuildingProfileEnergy_EfficiencyUpdateRelationInput = {
 *   connect?: InputMaybe<EnergyEfficiencyKeyFilter>
 *   create?: InputMaybe<BuildingProfile_EnergyEfficiencyCreateInput>
 *   disconnect?: InputMaybe<EnergyEfficiencyKeyFilter>
 *   reconnect?: InputMaybe<EnergyEfficiencyKeyFilter>
 *   update?: InputMaybe<BuildingProfile_EnergyEfficiencyUpdateInput>
 * }
 * 
 * export type BuildingProfileEnvironmental_InformationUpdateRelationInput = {
 *   connect?: InputMaybe<EnvironmentalInformationKeyFilter>
 *   create?: InputMaybe<BuildingProfile_EnvironmentalInformationCreateInput>
 *   disconnect?: InputMaybe<EnvironmentalInformationKeyFilter>
 *   reconnect?: InputMaybe<EnvironmentalInformationKeyFilter>
 *   update?: InputMaybe<BuildingProfile_EnvironmentalInformationUpdateInput>
 * }
 * 
 * export type BuildingProfileEquipment_InventoryUpdateRelationInput = {
 *   connect?: InputMaybe<EquipmentInventoryKeyFilter>
 *   create?: InputMaybe<BuildingProfile_EquipmentInventoryCreateInput>
 *   disconnect?: InputMaybe<EquipmentInventoryKeyFilter>
 *   reconnect?: InputMaybe<EquipmentInventoryKeyFilter>
 *   update?: InputMaybe<BuildingProfile_EquipmentInventoryUpdateInput>
 * }
 * 
 * export type BuildingProfileImprovementsUpdateRelationInput = {
 *   connect?: InputMaybe<ImprovementKeyFilter>
 *   create?: InputMaybe<BuildingProfile_ImprovementCreateInput>
 *   disconnect?: InputMaybe<ImprovementKeyFilter>
 *   reconnect?: InputMaybe<ImprovementKeyFilter>
 *   update?: InputMaybe<BuildingProfile_ImprovementUpdateInput>
 * }
 * 
 * export type BuildingProfileIndoor_Air_QualityUpdateRelationInput = {
 *   connect?: InputMaybe<IndoorAirQualityKeyFilter>
 *   create?: InputMaybe<BuildingProfile_IndoorAirQualityCreateInput>
 *   disconnect?: InputMaybe<IndoorAirQualityKeyFilter>
 *   reconnect?: InputMaybe<IndoorAirQualityKeyFilter>
 *   update?: InputMaybe<BuildingProfile_IndoorAirQualityUpdateInput>
 * }
 * 
 * export type BuildingProfileMaintenance_RecordsUpdateRelationInput = {
 *   connect?: InputMaybe<MaintenanceRecordKeyFilter>
 *   create?: InputMaybe<BuildingProfile_MaintenanceRecordCreateInput>
 *   disconnect?: InputMaybe<MaintenanceRecordKeyFilter>
 *   reconnect?: InputMaybe<MaintenanceRecordKeyFilter>
 *   update?: InputMaybe<BuildingProfile_MaintenanceRecordUpdateInput>
 * }
 * 
 * export type BuildingProfileOwner_IdUpdateRelationInput = {
 *   connect?: InputMaybe<UserKeyFilter>
 *   create?: InputMaybe<BuildingProfile_UserCreateInput>
 *   disconnect?: InputMaybe<UserKeyFilter>
 *   reconnect?: InputMaybe<UserKeyFilter>
 *   update?: InputMaybe<BuildingProfile_UserUpdateInput>
 * }
 * 
 * export type BuildingProfileSite_DocumentationUpdateRelationInput = {
 *   connect?: InputMaybe<SiteDocumentationKeyFilter>
 *   create?: InputMaybe<BuildingProfile_SiteDocumentationCreateInput>
 *   disconnect?: InputMaybe<SiteDocumentationKeyFilter>
 *   reconnect?: InputMaybe<SiteDocumentationKeyFilter>
 *   update?: InputMaybe<BuildingProfile_SiteDocumentationUpdateInput>
 * }
 * 
 * export type 
 * 
 * 
 * 
 * export type BuildingProfileKeyFilter = {
 *   id?: InputMaybe<Scalars['ID']['input']>
 * }
 * 
 * 
 * 
             */

/**
 * Hook to update a BuildingProfile from the server.
 * @returns {UseMutationResult<boolean, Error, MutationBuildingProfileUpdateArgs>}
 * @example
 * const {mutate, isPending, isError, mutateAsync} = useUpdateBuildingProfile();
 * @param {MutationBuildingProfileUpdateArgs} params
 */

export function useUpdateBuildingProfile() {
  const { data: session } = useSession();
  const queryClient = useQueryClient();

  return useMutation<boolean, Error, MutationBuildingProfileUpdateArgs>({
    mutationKey: ['BUILDINGPROFILE_UPDATE_MUTATION'],
    mutationFn: async (params) =>
      UseCases.BuildingProfile.updateBuildingProfile({
        variables: params,
        token: session?.token?.idToken,
      }),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['BUILDINGPROFILE_LIST_QUERY'],
      });
    },
  });
}
