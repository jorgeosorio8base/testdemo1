import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useSession } from 'next-auth/react';
import { UseCases } from '../usecases';
import { MutationSiteDocumentationUpdateArgs } from '@testdemo1/core';

/** 
             * Type: MutationSiteDocumentationUpdateArgs
            {
 *   data: SiteDocumentationUpdateInput
 *   destroyDetached?: InputMaybe<Scalars['Boolean']['input']>
 *   filter?: InputMaybe<SiteDocumentationKeyFilter>
 *   force?: InputMaybe<Scalars['Boolean']['input']>
 * }
 * 
 *  SiteDocumentationUpdateInput = {
 *   BuildingProfile?: InputMaybe<SiteDocumentationBuildingProfileUpdateRelationInput>
 *   building_profile_id?: InputMaybe<SiteDocumentationBuilding_Profile_IdUpdateRelationInput>
 *   description?: InputMaybe<Scalars['String']['input']>
 *   document_file?: InputMaybe<SiteDocumentationDocument_FileUpdateRelationInput>
 *   document_type?: InputMaybe<Scalars['String']['input']>
 *   id?: InputMaybe<Scalars['ID']['input']>
 *   upload_date?: InputMaybe<Scalars['DateTime']['input']>
 * }
 * 
 * 
 * 
 * export type SiteDocumentationBuildingProfileUpdateRelationInput = {
 *   connect?: InputMaybe<Array<BuildingProfileKeyFilter>>
 *   create?: InputMaybe<Array<InputMaybe<Site_Documentation_BuildingProfileCreateInput>>>
 *   disconnect?: InputMaybe<Array<BuildingProfileKeyFilter>>
 *   reconnect?: InputMaybe<Array<BuildingProfileKeyFilter>>
 *   update?: InputMaybe<Array<InputMaybe<Site_Documentation_BuildingProfileUpdateInput>>>
 * }
 * 
 * export type SiteDocumentationBuilding_Profile_IdUpdateRelationInput = {
 *   connect?: InputMaybe<BuildingProfileKeyFilter>
 *   create?: InputMaybe<SiteDocumentation_BuildingProfileCreateInput>
 *   disconnect?: InputMaybe<BuildingProfileKeyFilter>
 *   reconnect?: InputMaybe<BuildingProfileKeyFilter>
 *   update?: InputMaybe<SiteDocumentation_BuildingProfileUpdateInput>
 * }
 * 
 * export type SiteDocumentationDocument_FileUpdateRelationInput = {
 *   connect?: InputMaybe<FileKeyFilter>
 *   create?: InputMaybe<SiteDocumentation_Document_File_FileCreateInput>
 *   disconnect?: InputMaybe<FileKeyFilter>
 *   reconnect?: InputMaybe<FileKeyFilter>
 *   update?: InputMaybe<SiteDocumentation_Document_File_FileUpdateInput>
 * }
 * 
 * export type 
 * 
 * 
 * 
 * export type SiteDocumentationKeyFilter = {
 *   id?: InputMaybe<Scalars['ID']['input']>
 * }
 * 
 * 
 * 
             */

/**
 * Hook to update a SiteDocumentation from the server.
 * @returns {UseMutationResult<boolean, Error, MutationSiteDocumentationUpdateArgs>}
 * @example
 * const {mutate, isPending, isError, mutateAsync} = useUpdateSiteDocumentation();
 * @param {MutationSiteDocumentationUpdateArgs} params
 */

export function useUpdateSiteDocumentation() {
  const { data: session } = useSession();
  const queryClient = useQueryClient();

  return useMutation<boolean, Error, MutationSiteDocumentationUpdateArgs>({
    mutationKey: ['SITEDOCUMENTATION_UPDATE_MUTATION'],
    mutationFn: async (params) =>
      UseCases.SiteDocumentation.updateSiteDocumentation({
        variables: params,
        token: session?.token?.idToken,
      }),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['SITEDOCUMENTATION_LIST_QUERY'],
      });
    },
  });
}
