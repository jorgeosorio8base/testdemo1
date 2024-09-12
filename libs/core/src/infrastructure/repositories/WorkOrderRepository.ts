import { IRepositoryParams, IWorkOrderRepository } from './interfaces';
import { Http, IHttp } from '../http';
import { gql } from 'graphql-request';
import { Environment } from '../../environment';
import {
  WorkOrder,
  QueryWorkOrderArgs,
  QueryWorkOrderListArgs,
  WorkOrderListResponse,
  MutationWorkOrderCreateArgs,
  MutationWorkOrderDeleteArgs,
  MutationWorkOrderUpdateArgs,
  SuccessResponse,
} from '../../definitions/schema';

export class WorkOrderRepository implements IWorkOrderRepository {
  private readonly http: IHttp;

  constructor() {
    this.http = new Http();
  }

  async getWorkOrder(
    params: IRepositoryParams<QueryWorkOrderArgs>,
  ): Promise<WorkOrder | null> {
    return this.http
      .requestGraphQL<{
        workOrder: WorkOrder;
      }>({
        url: Environment.BACKEND_API_URL,
        requestDocument: gql`
          query GET_WORKORDER($id: ID) {
            workOrder(id: $id) {
              id
              createdAt
              updatedAt

              description
              status
              priority
              created_date
              completion_date
            }
          }
        `,
        token: params.token,
        variables: params.variables,
      })
      ?.then((response) => response.workOrder)
      ?.catch(() => null);
  }

  async getWorkOrderList(
    params: IRepositoryParams<QueryWorkOrderListArgs>,
  ): Promise<WorkOrderListResponse> {
    return this.http
      .requestGraphQL<{
        workOrdersList: WorkOrderListResponse;
      }>({
        url: Environment.BACKEND_API_URL,
        requestDocument: gql`
          query GET_WORKORDER(
            $first: Int
            $skip: Int
            $filter: WorkOrderFilter
            $sort: [WorkOrderSort!]
          ) {
            workOrdersList(
              first: $first
              skip: $skip
              filter: $filter
              sort: $sort
            ) {
              items {
                id
                createdAt
                updatedAt

                description
                status
                priority
                created_date
                completion_date
              }
              count
            }
          }
        `,
        token: params.token,
        variables: params.variables,
      })
      ?.then((response) => response.workOrdersList);
  }

  async createWorkOrder(
    params: IRepositoryParams<MutationWorkOrderCreateArgs>,
  ): Promise<WorkOrder | null> {
    return this.http
      .requestGraphQL<{
        workOrderCreate: WorkOrder;
      }>({
        url: Environment.BACKEND_API_URL,
        requestDocument: gql`
          mutation CREATE_WORKORDER($data: WorkOrderCreateInput!) {
            workOrderCreate(data: $data) {
              id
            }
          }
        `,
        token: params.token,
        variables: params.variables,
      })
      ?.then((response) => response.workOrderCreate)
      ?.catch(() => null);
  }

  async deleteWorkOrder(
    params: IRepositoryParams<MutationWorkOrderDeleteArgs>,
  ): Promise<SuccessResponse | null> {
    return this.http
      .requestGraphQL<SuccessResponse>({
        url: Environment.BACKEND_API_URL,
        requestDocument: gql`
          mutation DELETE_WORKORDER(
            $data: WorkOrderDeleteInput!
            $filter: WorkOrderKeyFilter
            $force: Boolean
          ) {
            workOrderDelete(data: $data, filter: $filter, force: $force) {
              success
            }
          }
        `,
        token: params.token,
        variables: params.variables,
      })
      ?.catch(() => null);
  }

  async updateWorkOrder(
    params: IRepositoryParams<MutationWorkOrderUpdateArgs>,
  ): Promise<WorkOrder | null> {
    return this.http
      .requestGraphQL<{
        workOrderUpdate: WorkOrder;
      }>({
        url: Environment.BACKEND_API_URL,
        requestDocument: gql`
          mutation UPDATE_WORKORDER($data: WorkOrderUpdateInput!) {
            workOrderUpdate(data: $data) {
              id
            }
          }
        `,
        token: params.token,
        variables: params.variables,
      })
      ?.then((response) => response.workOrderUpdate)
      ?.catch(() => null);
  }
}
