import { useQuery, useQueryClient } from '@tanstack/react-query';
import { useSession } from 'next-auth/react';
import { UseCases } from '../usecases';
import {
  QuerySiteDocumentationArgs,
  SiteDocumentationEntity,
} from '@testdemo1/core';

/*
              Type: SiteDocumentationEntity

              
      
        import { IFileEntity } from './iFileEntity';

         ISiteDocumentationEntity {
            Id?: string;
CreatedAt?: string;
UpdatedAt?: string;


DocumentType?: string;
DocumentFile?: IFileEntity;
UploadDate?: string;
Description?: string;
        }
    
      
            */

/*
            Type: QuerySiteDocumentationArgs
            {
  id?: InputMaybe<Scalars['ID']['input']>
  withDeleted?: InputMaybe<Scalars['Boolean']['input']>
}




          */

/**
 * Hook to fetch SiteDocumentation from the server.
 *
 * @returns {UseQueryResult<SiteDocumentationEntity | null>}
 *
 * @example
 * const {data, isError, isLoading, isFetching, refetch} = useSiteDocumentation({id: '1'});
 *
 * @param {QuerySiteDocumentationArgs} variables - The query variables.
 */

export function useSiteDocumentation(variables: QuerySiteDocumentationArgs) {
  const { data: session } = useSession();
  return useQuery<SiteDocumentationEntity | null>({
    queryKey: ['SITEDOCUMENTATION_QUERY'],
    queryFn: async () =>
      UseCases.SiteDocumentation.getSiteDocumentation({
        variables,
        token: session?.token?.idToken,
      }),
    enabled: !!session?.token?.idToken,
  });
}
