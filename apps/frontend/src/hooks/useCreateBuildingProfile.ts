import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useSession } from 'next-auth/react';
import { UseCases } from '../usecases';
import { MutationBuildingProfileCreateArgs } from '@testdemo1/core';

/** 
             * Type: MutationBuildingProfileCreateArgs
            {
 *   data: BuildingProfileCreateInput
 * }
 * 
 *  BuildingProfileCreateInput = {
 *   Certification: BuildingProfileCertificationRelationInput
 *   ComplianceRecord?: InputMaybe<BuildingProfileComplianceRecordRelationInput>
 *   EnergyEfficiency?: InputMaybe<BuildingProfileEnergyEfficiencyRelationInput>
 *   EnvironmentalInformation?: InputMaybe<BuildingProfileEnvironmentalInformationRelationInput>
 *   EquipmentInventory?: InputMaybe<BuildingProfileEquipmentInventoryRelationInput>
 *   Improvement?: InputMaybe<BuildingProfileImprovementRelationInput>
 *   IndoorAirQuality?: InputMaybe<BuildingProfileIndoorAirQualityRelationInput>
 *   MaintenanceRecord?: InputMaybe<BuildingProfileMaintenanceRecordRelationInput>
 *   Permit?: InputMaybe<BuildingProfilePermitRelationInput>
 *   SiteDocumentation?: InputMaybe<BuildingProfileSiteDocumentationRelationInput>
 *   WorkOrder?: InputMaybe<BuildingProfileWorkOrderRelationInput>
 *   address?: InputMaybe<Scalars['String']['input']>
 *   certification?: InputMaybe<BuildingProfileCertificationRelationInput>
 *   compliance_record?: InputMaybe<BuildingProfileCompliance_RecordRelationInput>
 *   demographics?: InputMaybe<Scalars['JSON']['input']>
 *   energy_efficiency?: InputMaybe<BuildingProfileEnergy_EfficiencyRelationInput>
 *   environmental_information?: InputMaybe<BuildingProfileEnvironmental_InformationRelationInput>
 *   equipment_inventory?: InputMaybe<BuildingProfileEquipment_InventoryRelationInput>
 *   improvements?: InputMaybe<BuildingProfileImprovementsRelationInput>
 *   indoor_air_quality?: InputMaybe<BuildingProfileIndoor_Air_QualityRelationInput>
 *   maintenance_records?: InputMaybe<BuildingProfileMaintenance_RecordsRelationInput>
 *   name?: InputMaybe<Scalars['String']['input']>
 *   owner_id?: InputMaybe<BuildingProfileOwner_IdRelationInput>
 *   site_documentation?: InputMaybe<BuildingProfileSite_DocumentationRelationInput>
 * }
 * 
 * export type BuildingProfileCertificationRelationInput = {
 *   connect?: InputMaybe<CertificationKeyFilter>
 *   create?: InputMaybe<BuildingProfile_CertificationCreateInput>
 * }
 * 
 * 
 * 
 * export type BuildingProfileComplianceRecordRelationInput = {
 *   connect?: InputMaybe<ComplianceRecordKeyFilter>
 *   create?: InputMaybe<Building_Profile_Id_ComplianceRecordCreateInput>
 * }
 * 
 * export type BuildingProfileEnergyEfficiencyRelationInput = {
 *   connect?: InputMaybe<EnergyEfficiencyKeyFilter>
 *   create?: InputMaybe<Building_Profile_Id_EnergyEfficiencyCreateInput>
 * }
 * 
 * export type BuildingProfileEnvironmentalInformationRelationInput = {
 *   connect?: InputMaybe<EnvironmentalInformationKeyFilter>
 *   create?: InputMaybe<Building_Profile_Id_EnvironmentalInformationCreateInput>
 * }
 * 
 * export type BuildingProfileEquipmentInventoryRelationInput = {
 *   connect?: InputMaybe<EquipmentInventoryKeyFilter>
 *   create?: InputMaybe<Building_Profile_Id_EquipmentInventoryCreateInput>
 * }
 * 
 * export type BuildingProfileImprovementRelationInput = {
 *   connect?: InputMaybe<ImprovementKeyFilter>
 *   create?: InputMaybe<Building_Profile_Id_ImprovementCreateInput>
 * }
 * 
 * export type BuildingProfileIndoorAirQualityRelationInput = {
 *   connect?: InputMaybe<IndoorAirQualityKeyFilter>
 *   create?: InputMaybe<Building_Profile_Id_IndoorAirQualityCreateInput>
 * }
 * 
 * export type BuildingProfileMaintenanceRecordRelationInput = {
 *   connect?: InputMaybe<MaintenanceRecordKeyFilter>
 *   create?: InputMaybe<Building_Profile_Id_MaintenanceRecordCreateInput>
 * }
 * 
 * export type BuildingProfilePermitRelationInput = {
 *   connect?: InputMaybe<PermitKeyFilter>
 *   create?: InputMaybe<Building_Profile_Id_PermitCreateInput>
 * }
 * 
 * export type BuildingProfileSiteDocumentationRelationInput = {
 *   connect?: InputMaybe<SiteDocumentationKeyFilter>
 *   create?: InputMaybe<Building_Profile_Id_SiteDocumentationCreateInput>
 * }
 * 
 * export type BuildingProfileWorkOrderRelationInput = {
 *   connect?: InputMaybe<WorkOrderKeyFilter>
 *   create?: InputMaybe<Building_Profile_Id_WorkOrderCreateInput>
 * }
 * 
 * export type BuildingProfileCompliance_RecordRelationInput = {
 *   connect?: InputMaybe<ComplianceRecordKeyFilter>
 *   create?: InputMaybe<BuildingProfile_ComplianceRecordCreateInput>
 * }
 * 
 * export type BuildingProfileEnergy_EfficiencyRelationInput = {
 *   connect?: InputMaybe<EnergyEfficiencyKeyFilter>
 *   create?: InputMaybe<BuildingProfile_EnergyEfficiencyCreateInput>
 * }
 * 
 * export type BuildingProfileEnvironmental_InformationRelationInput = {
 *   connect?: InputMaybe<EnvironmentalInformationKeyFilter>
 *   create?: InputMaybe<BuildingProfile_EnvironmentalInformationCreateInput>
 * }
 * 
 * export type BuildingProfileEquipment_InventoryRelationInput = {
 *   connect?: InputMaybe<EquipmentInventoryKeyFilter>
 *   create?: InputMaybe<BuildingProfile_EquipmentInventoryCreateInput>
 * }
 * 
 * export type BuildingProfileImprovementsRelationInput = {
 *   connect?: InputMaybe<ImprovementKeyFilter>
 *   create?: InputMaybe<BuildingProfile_ImprovementCreateInput>
 * }
 * 
 * export type BuildingProfileIndoor_Air_QualityRelationInput = {
 *   connect?: InputMaybe<IndoorAirQualityKeyFilter>
 *   create?: InputMaybe<BuildingProfile_IndoorAirQualityCreateInput>
 * }
 * 
 * export type BuildingProfileMaintenance_RecordsRelationInput = {
 *   connect?: InputMaybe<MaintenanceRecordKeyFilter>
 *   create?: InputMaybe<BuildingProfile_MaintenanceRecordCreateInput>
 * }
 * 
 * export type BuildingProfileOwner_IdRelationInput = {
 *   connect?: InputMaybe<UserKeyFilter>
 *   create?: InputMaybe<BuildingProfile_UserCreateInput>
 * }
 * 
 * export type BuildingProfileSite_DocumentationRelationInput = {
 *   connect?: InputMaybe<SiteDocumentationKeyFilter>
 *   create?: InputMaybe<BuildingProfile_SiteDocumentationCreateInput>
 * }
 * 
             */

/**
 * Hook to create a BuildingProfile from the server.
 * @returns {UseMutationResult<boolean, Error, MutationBuildingProfileCreateArgs>}
 * @example
 * const {mutate, isPending, isError, mutateAsync} = useCreateBuildingProfile();
 * @param {MutationBuildingProfileCreateArgs} params
 */

export function useCreateBuildingProfile() {
  const { data: session } = useSession();
  const queryClient = useQueryClient();

  return useMutation<boolean, Error, MutationBuildingProfileCreateArgs>({
    mutationKey: ['BUILDINGPROFILE_CREATE_MUTATION'],
    mutationFn: async (params) =>
      UseCases.BuildingProfile.createBuildingProfile({
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
