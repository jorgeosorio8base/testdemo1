import { IWorkOrderUseCase } from './interfaces';
import { WorkOrderEntity } from '../../domain';
import {
  QueryWorkOrderArgs,
  QueryWorkOrderListArgs,
  MutationWorkOrderCreateArgs,
  MutationWorkOrderDeleteArgs,
  MutationWorkOrderUpdateArgs,
} from '../../definitions/schema';
import {
  IWorkOrderRepository,
  WorkOrderRepository,
  IRepositoryParams,
} from '../../infrastructure';

export class WorkOrderUseCase implements IWorkOrderUseCase {
  private readonly repository: IWorkOrderRepository;
  private readonly errorCatcher: (error: unknown, methodName: string) => never;

  constructor() {
    this.repository = new WorkOrderRepository();
    this.errorCatcher = (error: unknown, methodName: string) => {
      if (error instanceof Error) {
        throw new Error(error.message);
      }

      if (typeof error === 'string') {
        throw new Error(error);
      }

      throw new Error(`An error occurred trying to ${methodName}`);
    };
  }

  async getWorkOrder(
    params: IRepositoryParams<QueryWorkOrderArgs>,
  ): Promise<WorkOrderEntity | null> {
    try {
      return this.repository
        .getWorkOrder(params)
        .then((result) => new WorkOrderEntity(result))
        .catch((err) => this.errorCatcher(err, 'getWorkOrder'));
    } catch (error) {
      this.errorCatcher(error, 'getWorkOrder');
    }
  }

  async getWorkOrderList(
    params: IRepositoryParams<QueryWorkOrderListArgs>,
  ): Promise<{
    count: number;
    items: Array<WorkOrderEntity>;
  }> {
    try {
      return this.repository
        .getWorkOrderList(params)
        .then((result) => {
          return {
            count: result?.count || 0,
            items:
              result?.items?.map((item) => new WorkOrderEntity(item)) || [],
          };
        })
        .catch((err) => this.errorCatcher(err, 'getWorkOrderList'));
    } catch (error) {
      this.errorCatcher(error, 'getWorkOrderList');
    }
  }

  async createWorkOrder(
    params: IRepositoryParams<MutationWorkOrderCreateArgs>,
  ): Promise<boolean> {
    try {
      return this.repository
        .createWorkOrder(params)
        .then((result) => !!result?.id)
        .catch((err) => this.errorCatcher(err, 'createWorkOrder'));
    } catch (error) {
      this.errorCatcher(error, 'createWorkOrder');
    }
  }

  async deleteWorkOrder(
    params: IRepositoryParams<MutationWorkOrderDeleteArgs>,
  ): Promise<boolean> {
    try {
      return this.repository
        .deleteWorkOrder(params)
        .then((result) => !!result?.success)
        .catch((err) => this.errorCatcher(err, 'deleteWorkOrder'));
    } catch (error) {
      this.errorCatcher(error, 'deleteWorkOrder');
    }
  }

  async updateWorkOrder(
    params: IRepositoryParams<MutationWorkOrderUpdateArgs>,
  ): Promise<boolean> {
    try {
      return this.repository
        .updateWorkOrder(params)
        .then((result) => !!result?.id)
        .catch((err) => this.errorCatcher(err, 'updateWorkOrder'));
    } catch (error) {
      this.errorCatcher(error, 'updateWorkOrder');
    }
  }
}
