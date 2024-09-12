import { useQuery } from '@tanstack/react-query';
import { useSession } from 'next-auth/react';
import { UseCases } from '../usecases';
import {
  QuerySiteDocumentationListArgs,
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

/** 
             * Type: QuerySiteDocumentationListArgs
            undefined
             */

/**
 * Hook to fetch list of SiteDocumentation from the server.
 *
 * @returns {UseQueryResult<{items: SiteDocumentationEntity[], count: number} | null>}
 *
 * @example
 * const {data, isError, isLoading, isFetching, refetch} = useSiteDocumentationList({first: 10});
 *
 * @param {QuerySiteDocumentationListArgs} variables - The query variables.
 */

export function useSiteDocumentationList(
  variables?: QuerySiteDocumentationListArgs,
) {
  const { data: session } = useSession();
  return useQuery<{
    items: SiteDocumentationEntity[];
    count: number;
  } | null>({
    queryKey: ['SITEDOCUMENTATION_LIST_QUERY'],
    queryFn: async () =>
      UseCases.SiteDocumentation.getSiteDocumentationList({
        variables: variables || {},
        token: session?.token?.idToken,
      }),
    enabled: !!session?.token?.idToken,
  });
}
