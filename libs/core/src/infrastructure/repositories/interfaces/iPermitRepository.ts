import {
  Permit,
  QueryPermitArgs,
  QueryPermitListArgs,
  PermitListResponse,
  MutationPermitCreateArgs,
  MutationPermitDeleteArgs,
  MutationPermitUpdateArgs,
  SuccessResponse,
} from '../../../definitions/schema';
import { IRepositoryParams } from './iRepositoryParams';

export interface IPermitRepository {
  getPermit(params: IRepositoryParams<QueryPermitArgs>): Promise<Permit | null>;
  getPermitList(
    params: IRepositoryParams<QueryPermitListArgs>,
  ): Promise<PermitListResponse>;
  createPermit(
    params: IRepositoryParams<MutationPermitCreateArgs>,
  ): Promise<Permit | null>;
  deletePermit(
    params: IRepositoryParams<MutationPermitDeleteArgs>,
  ): Promise<SuccessResponse | null>;
  updatePermit(
    params: IRepositoryParams<MutationPermitUpdateArgs>,
  ): Promise<Permit | null>;
}
