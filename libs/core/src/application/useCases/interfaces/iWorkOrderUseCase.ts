import {
  QueryWorkOrderArgs,
  QueryWorkOrderListArgs,
  MutationWorkOrderCreateArgs,
  MutationWorkOrderDeleteArgs,
  MutationWorkOrderUpdateArgs,
} from '../../../definitions/schema';
import { WorkOrderEntity } from '../../../domain';
import { IRepositoryParams } from '../../../infrastructure';

export interface IWorkOrderUseCase {
  getWorkOrder(
    params: IRepositoryParams<QueryWorkOrderArgs>,
  ): Promise<WorkOrderEntity | null>;
  getWorkOrderList(params: IRepositoryParams<QueryWorkOrderListArgs>): Promise<{
    count: number;
    items: Array<WorkOrderEntity>;
  }>;
  createWorkOrder(
    params: IRepositoryParams<MutationWorkOrderCreateArgs>,
  ): Promise<boolean>;
  deleteWorkOrder(
    params: IRepositoryParams<MutationWorkOrderDeleteArgs>,
  ): Promise<boolean>;
  updateWorkOrder(
    params: IRepositoryParams<MutationWorkOrderUpdateArgs>,
  ): Promise<boolean>;
}
