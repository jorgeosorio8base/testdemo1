import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useSession } from 'next-auth/react';
import { UseCases } from '../usecases';
import { MutationSiteDocumentationCreateArgs } from '@testdemo1/core';

/** 
             * Type: MutationSiteDocumentationCreateArgs
            {
 *   data: SiteDocumentationCreateInput
 * }
 * 
 *  SiteDocumentationCreateInput = {
 *   BuildingProfile?: InputMaybe<SiteDocumentationBuildingProfileRelationInput>
 *   building_profile_id?: InputMaybe<SiteDocumentationBuilding_Profile_IdRelationInput>
 *   description?: InputMaybe<Scalars['String']['input']>
 *   document_file?: InputMaybe<SiteDocumentationDocument_FileRelationInput>
 *   document_type?: InputMaybe<Scalars['String']['input']>
 *   upload_date?: InputMaybe<Scalars['DateTime']['input']>
 * }
 * 
 * 
 * 
 * export type SiteDocumentationBuildingProfileRelationInput = {
 *   connect?: InputMaybe<Array<BuildingProfileKeyFilter>>
 *   create?: InputMaybe<Array<InputMaybe<Site_Documentation_BuildingProfileCreateInput>>>
 * }
 * 
 * export type SiteDocumentationBuilding_Profile_IdRelationInput = {
 *   connect?: InputMaybe<BuildingProfileKeyFilter>
 *   create?: InputMaybe<SiteDocumentation_BuildingProfileCreateInput>
 * }
 * 
 * export type SiteDocumentationDocument_FileRelationInput = {
 *   connect?: InputMaybe<FileKeyFilter>
 *   create?: InputMaybe<SiteDocumentation_Document_File_FileCreateInput>
 * }
 * 
             */

/**
 * Hook to create a SiteDocumentation from the server.
 * @returns {UseMutationResult<boolean, Error, MutationSiteDocumentationCreateArgs>}
 * @example
 * const {mutate, isPending, isError, mutateAsync} = useCreateSiteDocumentation();
 * @param {MutationSiteDocumentationCreateArgs} params
 */

export function useCreateSiteDocumentation() {
  const { data: session } = useSession();
  const queryClient = useQueryClient();

  return useMutation<boolean, Error, MutationSiteDocumentationCreateArgs>({
    mutationKey: ['SITEDOCUMENTATION_CREATE_MUTATION'],
    mutationFn: async (params) =>
      UseCases.SiteDocumentation.createSiteDocumentation({
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
