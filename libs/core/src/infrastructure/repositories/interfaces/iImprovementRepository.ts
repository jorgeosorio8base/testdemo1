import {
  Improvement,
  QueryImprovementArgs,
  QueryImprovementListArgs,
  ImprovementListResponse,
  MutationImprovementCreateArgs,
  MutationImprovementDeleteArgs,
  MutationImprovementUpdateArgs,
  SuccessResponse,
} from '../../../definitions/schema';
import { IRepositoryParams } from './iRepositoryParams';

export interface IImprovementRepository {
  getImprovement(
    params: IRepositoryParams<QueryImprovementArgs>,
  ): Promise<Improvement | null>;
  getImprovementList(
    params: IRepositoryParams<QueryImprovementListArgs>,
  ): Promise<ImprovementListResponse>;
  createImprovement(
    params: IRepositoryParams<MutationImprovementCreateArgs>,
  ): Promise<Improvement | null>;
  deleteImprovement(
    params: IRepositoryParams<MutationImprovementDeleteArgs>,
  ): Promise<SuccessResponse | null>;
  updateImprovement(
    params: IRepositoryParams<MutationImprovementUpdateArgs>,
  ): Promise<Improvement | null>;
}
