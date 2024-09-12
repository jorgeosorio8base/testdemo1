import { useQuery } from '@tanstack/react-query';
import { useSession } from 'next-auth/react';
import { UseCases } from '../usecases';
import {
  QueryBuildingProfileListArgs,
  BuildingProfileEntity,
} from '@testdemo1/core';

/*
              Type: BuildingProfileEntity

              
      
        

         IBuildingProfileEntity {
            Id?: string;
CreatedAt?: string;
UpdatedAt?: string;
Name?: string;
Address?: string;

Demographics?: Record<string, any>;




















        }
    
      
            */

/** 
             * Type: QueryBuildingProfileListArgs
            undefined
             */

/**
 * Hook to fetch list of BuildingProfile from the server.
 *
 * @returns {UseQueryResult<{items: BuildingProfileEntity[], count: number} | null>}
 *
 * @example
 * const {data, isError, isLoading, isFetching, refetch} = useBuildingProfileList({first: 10});
 *
 * @param {QueryBuildingProfileListArgs} variables - The query variables.
 */

export function useBuildingProfileList(
  variables?: QueryBuildingProfileListArgs,
) {
  const { data: session } = useSession();
  return useQuery<{
    items: BuildingProfileEntity[];
    count: number;
  } | null>({
    queryKey: ['BUILDINGPROFILE_LIST_QUERY'],
    queryFn: async () =>
      UseCases.BuildingProfile.getBuildingProfileList({
        variables: variables || {},
        token: session?.token?.idToken,
      }),
    enabled: !!session?.token?.idToken,
  });
}
