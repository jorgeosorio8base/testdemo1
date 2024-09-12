import { useQuery, useQueryClient } from '@tanstack/react-query';
import { useSession } from 'next-auth/react';
import { UseCases } from '../usecases';
import {
  QueryBuildingProfileArgs,
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

/*
            Type: QueryBuildingProfileArgs
            {
  id?: InputMaybe<Scalars['ID']['input']>
  withDeleted?: InputMaybe<Scalars['Boolean']['input']>
}




          */

/**
 * Hook to fetch BuildingProfile from the server.
 *
 * @returns {UseQueryResult<BuildingProfileEntity | null>}
 *
 * @example
 * const {data, isError, isLoading, isFetching, refetch} = useBuildingProfile({id: '1'});
 *
 * @param {QueryBuildingProfileArgs} variables - The query variables.
 */

export function useBuildingProfile(variables: QueryBuildingProfileArgs) {
  const { data: session } = useSession();
  return useQuery<BuildingProfileEntity | null>({
    queryKey: ['BUILDINGPROFILE_QUERY'],
    queryFn: async () =>
      UseCases.BuildingProfile.getBuildingProfile({
        variables,
        token: session?.token?.idToken,
      }),
    enabled: !!session?.token?.idToken,
  });
}
