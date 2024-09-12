import {
  QueryPermitArgs,
  QueryPermitListArgs,
  MutationPermitCreateArgs,
  MutationPermitDeleteArgs,
  MutationPermitUpdateArgs,
} from '../../../definitions/schema';
import { PermitEntity } from '../../../domain';
import { IRepositoryParams } from '../../../infrastructure';

export interface IPermitUseCase {
  getPermit(
    params: IRepositoryParams<QueryPermitArgs>,
  ): Promise<PermitEntity | null>;
  getPermitList(params: IRepositoryParams<QueryPermitListArgs>): Promise<{
    count: number;
    items: Array<PermitEntity>;
  }>;
  createPermit(
    params: IRepositoryParams<MutationPermitCreateArgs>,
  ): Promise<boolean>;
  deletePermit(
    params: IRepositoryParams<MutationPermitDeleteArgs>,
  ): Promise<boolean>;
  updatePermit(
    params: IRepositoryParams<MutationPermitUpdateArgs>,
  ): Promise<boolean>;
}
