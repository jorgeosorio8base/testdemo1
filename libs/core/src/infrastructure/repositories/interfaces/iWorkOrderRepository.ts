import {
  WorkOrder,
  QueryWorkOrderArgs,
  QueryWorkOrderListArgs,
  WorkOrderListResponse,
  MutationWorkOrderCreateArgs,
  MutationWorkOrderDeleteArgs,
  MutationWorkOrderUpdateArgs,
  SuccessResponse,
} from '../../../definitions/schema';
import { IRepositoryParams } from './iRepositoryParams';

export interface IWorkOrderRepository {
  getWorkOrder(
    params: IRepositoryParams<QueryWorkOrderArgs>,
  ): Promise<WorkOrder | null>;
  getWorkOrderList(
    params: IRepositoryParams<QueryWorkOrderListArgs>,
  ): Promise<WorkOrderListResponse>;
  createWorkOrder(
    params: IRepositoryParams<MutationWorkOrderCreateArgs>,
  ): Promise<WorkOrder | null>;
  deleteWorkOrder(
    params: IRepositoryParams<MutationWorkOrderDeleteArgs>,
  ): Promise<SuccessResponse | null>;
  updateWorkOrder(
    params: IRepositoryParams<MutationWorkOrderUpdateArgs>,
  ): Promise<WorkOrder | null>;
}
