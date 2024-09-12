import { useQuery } from '@tanstack/react-query';
import { useSession } from 'next-auth/react';
import { UseCases } from '../usecases';
import {
  QueryIndoorAirQualitiesListArgs,
  IndoorAirQualityEntity,
} from '@testdemo1/core';

/*
              Type: IndoorAirQualityEntity

              
      
        

         IIndoorAirQualityEntity {
            Id?: string;
CreatedAt?: string;
UpdatedAt?: string;


MeasurementDate?: string;
AirQualityLevel?: string;
PollutantLevels?: Record<string, any>;
        }
    
      
            */

/** 
             * Type: QueryIndoorAirQualitiesListArgs
            {
 *   after?: InputMaybe<Scalars['String']['input']>
 *   before?: InputMaybe<Scalars['String']['input']>
 *   filter?: InputMaybe<IndoorAirQualityFilter>
 *   first?: InputMaybe<Scalars['Int']['input']>
 *   groupBy?: InputMaybe<IndoorAirQualityGroupBy>
 *   last?: InputMaybe<Scalars['Int']['input']>
 *   orderBy?: InputMaybe<Array<InputMaybe<IndoorAirQualityOrderBy>>>
 *   skip?: InputMaybe<Scalars['Int']['input']>
 *   sort?: InputMaybe<Array<IndoorAirQualitySort>>
 *   withDeleted?: InputMaybe<Scalars['Boolean']['input']>
 * }
 * 
 * 
 * 
 * 
 * 
 *  IndoorAirQualityFilter = {
 *   AND?: InputMaybe<Array<IndoorAirQualityFilter>>
 *   BuildingProfile?: InputMaybe<BuildingProfileFilter>
 *   OR?: InputMaybe<Array<IndoorAirQualityFilter>>
 *   _fullText?: InputMaybe<Scalars['String']['input']>
 *   air_quality_level?: InputMaybe<StringPredicate>
 *   building_profile_id?: InputMaybe<BuildingProfileFilter>
 *   createdAt?: InputMaybe<DateTimePredicate>
 *   deletedAt?: InputMaybe<IntPredicate>
 *   id?: InputMaybe<IdPredicate>
 *   measurement_date?: InputMaybe<DateTimePredicate>
 *   updatedAt?: InputMaybe<DateTimePredicate>
 * }
 * 
 * export type 
 * 
 * export type IndoorAirQualityFilter = {
 *   AND?: InputMaybe<Array<IndoorAirQualityFilter>>
 *   BuildingProfile?: InputMaybe<BuildingProfileFilter>
 *   OR?: InputMaybe<Array<IndoorAirQualityFilter>>
 *   _fullText?: InputMaybe<Scalars['String']['input']>
 *   air_quality_level?: InputMaybe<StringPredicate>
 *   building_profile_id?: InputMaybe<BuildingProfileFilter>
 *   createdAt?: InputMaybe<DateTimePredicate>
 *   deletedAt?: InputMaybe<IntPredicate>
 *   id?: InputMaybe<IdPredicate>
 *   measurement_date?: InputMaybe<DateTimePredicate>
 *   updatedAt?: InputMaybe<DateTimePredicate>
 * }
 * 
 * export type BuildingProfileFilter = {
 *   AND?: InputMaybe<Array<BuildingProfileFilter>>
 *   Certification?: InputMaybe<CertificationFilter>
 *   ComplianceRecord?: InputMaybe<ComplianceRecordFilter>
 *   EnergyEfficiency?: InputMaybe<EnergyEfficiencyFilter>
 *   EnvironmentalInformation?: InputMaybe<EnvironmentalInformationFilter>
 *   EquipmentInventory?: InputMaybe<EquipmentInventoryFilter>
 *   Improvement?: InputMaybe<ImprovementFilter>
 *   IndoorAirQuality?: InputMaybe<IndoorAirQualityFilter>
 *   MaintenanceRecord?: InputMaybe<MaintenanceRecordFilter>
 *   OR?: InputMaybe<Array<BuildingProfileFilter>>
 *   Permit?: InputMaybe<PermitFilter>
 *   SiteDocumentation?: InputMaybe<SiteDocumentationFilter>
 *   WorkOrder?: InputMaybe<WorkOrderFilter>
 *   _fullText?: InputMaybe<Scalars['String']['input']>
 *   address?: InputMaybe<StringPredicate>
 *   certification?: InputMaybe<CertificationFilter>
 *   compliance_record?: InputMaybe<ComplianceRecordFilter>
 *   createdAt?: InputMaybe<DateTimePredicate>
 *   deletedAt?: InputMaybe<IntPredicate>
 *   energy_efficiency?: InputMaybe<EnergyEfficiencyFilter>
 *   environmental_information?: InputMaybe<EnvironmentalInformationFilter>
 *   equipment_inventory?: InputMaybe<EquipmentInventoryFilter>
 *   id?: InputMaybe<IdPredicate>
 *   improvements?: InputMaybe<ImprovementFilter>
 *   indoor_air_quality?: InputMaybe<IndoorAirQualityFilter>
 *   maintenance_records?: InputMaybe<MaintenanceRecordFilter>
 *   name?: InputMaybe<StringPredicate>
 *   owner_id?: InputMaybe<UserFilter>
 *   site_documentation?: InputMaybe<SiteDocumentationFilter>
 *   updatedAt?: InputMaybe<DateTimePredicate>
 * }
 * 
 * export type StringPredicate = {
 *   contains?: InputMaybe<Scalars['String']['input']>
 *   ends_with?: InputMaybe<Scalars['String']['input']>
 *   equals?: InputMaybe<Scalars['String']['input']>
 *   in?: InputMaybe<Array<Scalars['String']['input']>>
 *   is_empty?: InputMaybe<Scalars['Boolean']['input']>
 *   is_not_empty?: InputMaybe<Scalars['Boolean']['input']>
 *   not_contains?: InputMaybe<Scalars['String']['input']>
 *   not_ends_with?: InputMaybe<Scalars['String']['input']>
 *   not_equals?: InputMaybe<Scalars['String']['input']>
 *   not_in?: InputMaybe<Array<Scalars['String']['input']>>
 *   not_starts_with?: InputMaybe<Scalars['String']['input']>
 *   starts_with?: InputMaybe<Scalars['String']['input']>
 * }
 * 
 * export type DateTimePredicate = {
 *   equals?: InputMaybe<Scalars['DateTime']['input']>
 *   gt?: InputMaybe<Scalars['DateTime']['input']>
 *   gte?: InputMaybe<Scalars['DateTime']['input']>
 *   in?: InputMaybe<Array<Scalars['DateTime']['input']>>
 *   is_empty?: InputMaybe<Scalars['Boolean']['input']>
 *   is_not_empty?: InputMaybe<Scalars['Boolean']['input']>
 *   lt?: InputMaybe<Scalars['DateTime']['input']>
 *   lte?: InputMaybe<Scalars['DateTime']['input']>
 *   not_equals?: InputMaybe<Scalars['DateTime']['input']>
 *   not_in?: InputMaybe<Array<Scalars['DateTime']['input']>>
 *   relative?: InputMaybe<DateRelativePredicates>
 * }
 * 
 * export type IntPredicate = {
 *   equals?: InputMaybe<Scalars['Int']['input']>
 *   gt?: InputMaybe<Scalars['Int']['input']>
 *   gte?: InputMaybe<Scalars['Int']['input']>
 *   in?: InputMaybe<Array<Scalars['Int']['input']>>
 *   is_empty?: InputMaybe<Scalars['Boolean']['input']>
 *   is_not_empty?: InputMaybe<Scalars['Boolean']['input']>
 *   lt?: InputMaybe<Scalars['Int']['input']>
 *   lte?: InputMaybe<Scalars['Int']['input']>
 *   not_equals?: InputMaybe<Scalars['Int']['input']>
 *   not_in?: InputMaybe<Array<Scalars['Int']['input']>>
 * }
 * 
 * export type IdPredicate = {
 *   contains?: InputMaybe<Scalars['ID']['input']>
 *   ends_with?: InputMaybe<Scalars['ID']['input']>
 *   equals?: InputMaybe<Scalars['ID']['input']>
 *   gt?: InputMaybe<Scalars['ID']['input']>
 *   gte?: InputMaybe<Scalars['ID']['input']>
 *   in?: InputMaybe<Array<Scalars['ID']['input']>>
 *   is_empty?: InputMaybe<Scalars['Boolean']['input']>
 *   is_not_empty?: InputMaybe<Scalars['Boolean']['input']>
 *   lt?: InputMaybe<Scalars['ID']['input']>
 *   lte?: InputMaybe<Scalars['ID']['input']>
 *   not_contains?: InputMaybe<Scalars['ID']['input']>
 *   not_ends_with?: InputMaybe<Scalars['ID']['input']>
 *   not_equals?: InputMaybe<Scalars['ID']['input']>
 *   not_in?: InputMaybe<Array<Scalars['ID']['input']>>
 *   not_starts_with?: InputMaybe<Scalars['ID']['input']>
 *   starts_with?: InputMaybe<Scalars['ID']['input']>
 * }
 * 
 * export type IndoorAirQualityGroupBy = {
 *   first?: InputMaybe<Scalars['Int']['input']>
 *   having?: InputMaybe<Having>
 *   last?: InputMaybe<Scalars['Int']['input']>
 *   query: IndoorAirQualityGroupByQuery
 *   skip?: InputMaybe<Scalars['Int']['input']>
 *   sort?: InputMaybe<Array<GroupBySort>>
 * }
 * 
 * 
 * 
 * export type Having = {
 *   AND?: InputMaybe<Array<Having>>
 *   OR?: InputMaybe<Array<Having>>
 *   alias?: InputMaybe<Scalars['String']['input']>
 *   bigint?: InputMaybe<BigIntPredicateHaving>
 *   bool?: InputMaybe<BoolPredicateHaving>
 *   date?: InputMaybe<DatePredicateHaving>
 *   datetime?: InputMaybe<DateTimePredicateHaving>
 *   float?: InputMaybe<FloatPredicateHaving>
 *   id?: InputMaybe<IdPredicateHaving>
 *   int?: InputMaybe<IntPredicateHaving>
 *   string?: InputMaybe<StringPredicateHaving>
 * }
 * 
 * export type IndoorAirQualityGroupByQuery = {
 *   BuildingProfile?: InputMaybe<BuildingProfileGroupByQuery>
 *   _group?: InputMaybe<Array<GroupIdentifiersGroupByField>>
 *   air_quality_level?: InputMaybe<Array<GroupByField>>
 *   building_profile_id?: InputMaybe<BuildingProfileGroupByQuery>
 *   createdAt?: InputMaybe<Array<GroupByField>>
 *   id?: InputMaybe<Array<GroupByField>>
 *   measurement_date?: InputMaybe<Array<GroupByField>>
 *   pollutant_levels?: InputMaybe<Array<GroupByField>>
 *   updatedAt?: InputMaybe<Array<GroupByField>>
 * }
 * 
 * export type GroupBySort = {
 *   alias: Scalars['String']['input']
 *   direction: SortOrder
 * }
 * 
 * export type IndoorAirQualitySort = {
 *   BuildingProfile?: InputMaybe<BuildingProfileSort>
 *   air_quality_level?: InputMaybe<SortOrder>
 *   building_profile_id?: InputMaybe<BuildingProfileSort>
 *   createdAt?: InputMaybe<SortOrder>
 *   deletedAt?: InputMaybe<SortOrder>
 *   id?: InputMaybe<SortOrder>
 *   measurement_date?: InputMaybe<SortOrder>
 *   updatedAt?: InputMaybe<SortOrder>
 * }
 * 
 * export type InputMaybe<T> = Maybe<T>
 * 
 * export type BuildingProfileSort = {
 *   Certification?: InputMaybe<CertificationSort>
 *   ComplianceRecord?: InputMaybe<ComplianceRecordSort>
 *   EnergyEfficiency?: InputMaybe<EnergyEfficiencySort>
 *   EnvironmentalInformation?: InputMaybe<EnvironmentalInformationSort>
 *   EquipmentInventory?: InputMaybe<EquipmentInventorySort>
 *   Improvement?: InputMaybe<ImprovementSort>
 *   IndoorAirQuality?: InputMaybe<IndoorAirQualitySort>
 *   MaintenanceRecord?: InputMaybe<MaintenanceRecordSort>
 *   Permit?: InputMaybe<PermitSort>
 *   SiteDocumentation?: InputMaybe<SiteDocumentationSort>
 *   WorkOrder?: InputMaybe<WorkOrderSort>
 *   address?: InputMaybe<SortOrder>
 *   certification?: InputMaybe<CertificationSort>
 *   compliance_record?: InputMaybe<ComplianceRecordSort>
 *   createdAt?: InputMaybe<SortOrder>
 *   deletedAt?: InputMaybe<SortOrder>
 *   energy_efficiency?: InputMaybe<EnergyEfficiencySort>
 *   environmental_information?: InputMaybe<EnvironmentalInformationSort>
 *   equipment_inventory?: InputMaybe<EquipmentInventorySort>
 *   id?: InputMaybe<SortOrder>
 *   improvements?: InputMaybe<ImprovementSort>
 *   indoor_air_quality?: InputMaybe<IndoorAirQualitySort>
 *   maintenance_records?: InputMaybe<MaintenanceRecordSort>
 *   name?: InputMaybe<SortOrder>
 *   owner_id?: InputMaybe<UserSort>
 *   site_documentation?: InputMaybe<SiteDocumentationSort>
 *   updatedAt?: InputMaybe<SortOrder>
 * }
 * 
             */

/**
 * Hook to fetch list of IndoorAirQuality from the server.
 *
 * @returns {UseQueryResult<{items: IndoorAirQualityEntity[], count: number} | null>}
 *
 * @example
 * const {data, isError, isLoading, isFetching, refetch} = useIndoorAirQualityList({first: 10});
 *
 * @param {QueryIndoorAirQualitiesListArgs} variables - The query variables.
 */

export function useIndoorAirQualityList(
  variables?: QueryIndoorAirQualitiesListArgs,
) {
  const { data: session } = useSession();
  return useQuery<{
    items: IndoorAirQualityEntity[];
    count: number;
  } | null>({
    queryKey: ['INDOORAIRQUALITY_LIST_QUERY'],
    queryFn: async () =>
      UseCases.IndoorAirQuality.getIndoorAirQualityList({
        variables: variables || {},
        token: session?.token?.idToken,
      }),
    enabled: !!session?.token?.idToken,
  });
}
