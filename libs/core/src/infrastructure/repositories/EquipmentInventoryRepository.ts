import { IRepositoryParams, IEquipmentInventoryRepository } from './interfaces';
import { Http, IHttp } from '../http';
import { gql } from 'graphql-request';
import { Environment } from '../../environment';
import {
  EquipmentInventory,
  QueryEquipmentInventoryArgs,
  QueryEquipmentInventoriesListArgs,
  EquipmentInventoryListResponse,
  MutationEquipmentInventoryCreateArgs,
  MutationEquipmentInventoryDeleteArgs,
  MutationEquipmentInventoryUpdateArgs,
  SuccessResponse,
} from '../../definitions/schema';

export class EquipmentInventoryRepository
  implements IEquipmentInventoryRepository
{
  private readonly http: IHttp;

  constructor() {
    this.http = new Http();
  }

  async getEquipmentInventory(
    params: IRepositoryParams<QueryEquipmentInventoryArgs>,
  ): Promise<EquipmentInventory | null> {
    return this.http
      .requestGraphQL<{
        equipmentInventory: EquipmentInventory;
      }>({
        url: Environment.BACKEND_API_URL,
        requestDocument: gql`
          query GET_EQUIPMENTINVENTORY($id: ID) {
            equipmentInventory(id: $id) {
              id
              createdAt
              updatedAt

              equipment_name
              equipment_type
              installation_date
              last_maintenance_date
            }
          }
        `,
        token: params.token,
        variables: params.variables,
      })
      ?.then((response) => response.equipmentInventory)
      ?.catch(() => null);
  }

  async getEquipmentInventoryList(
    params: IRepositoryParams<QueryEquipmentInventoriesListArgs>,
  ): Promise<EquipmentInventoryListResponse> {
    return this.http
      .requestGraphQL<{
        equipmentInventoriesList: EquipmentInventoryListResponse;
      }>({
        url: Environment.BACKEND_API_URL,
        requestDocument: gql`
          query GET_EQUIPMENTINVENTORY(
            $first: Int
            $skip: Int
            $filter: EquipmentInventoryFilter
            $sort: [EquipmentInventorySort!]
          ) {
            equipmentInventoriesList(
              first: $first
              skip: $skip
              filter: $filter
              sort: $sort
            ) {
              items {
                id
                createdAt
                updatedAt

                equipment_name
                equipment_type
                installation_date
                last_maintenance_date
              }
              count
            }
          }
        `,
        token: params.token,
        variables: params.variables,
      })
      ?.then((response) => response.equipmentInventoriesList);
  }

  async createEquipmentInventory(
    params: IRepositoryParams<MutationEquipmentInventoryCreateArgs>,
  ): Promise<EquipmentInventory | null> {
    return this.http
      .requestGraphQL<{
        equipmentInventoryCreate: EquipmentInventory;
      }>({
        url: Environment.BACKEND_API_URL,
        requestDocument: gql`
          mutation CREATE_EQUIPMENTINVENTORY(
            $data: EquipmentInventoryCreateInput!
          ) {
            equipmentInventoryCreate(data: $data) {
              id
            }
          }
        `,
        token: params.token,
        variables: params.variables,
      })
      ?.then((response) => response.equipmentInventoryCreate)
      ?.catch(() => null);
  }

  async deleteEquipmentInventory(
    params: IRepositoryParams<MutationEquipmentInventoryDeleteArgs>,
  ): Promise<SuccessResponse | null> {
    return this.http
      .requestGraphQL<SuccessResponse>({
        url: Environment.BACKEND_API_URL,
        requestDocument: gql`
          mutation DELETE_EQUIPMENTINVENTORY(
            $data: EquipmentInventoryDeleteInput!
            $filter: EquipmentInventoryKeyFilter
            $force: Boolean
          ) {
            equipmentInventoryDelete(
              data: $data
              filter: $filter
              force: $force
            ) {
              success
            }
          }
        `,
        token: params.token,
        variables: params.variables,
      })
      ?.catch(() => null);
  }

  async updateEquipmentInventory(
    params: IRepositoryParams<MutationEquipmentInventoryUpdateArgs>,
  ): Promise<EquipmentInventory | null> {
    return this.http
      .requestGraphQL<{
        equipmentInventoryUpdate: EquipmentInventory;
      }>({
        url: Environment.BACKEND_API_URL,
        requestDocument: gql`
          mutation UPDATE_EQUIPMENTINVENTORY(
            $data: EquipmentInventoryUpdateInput!
          ) {
            equipmentInventoryUpdate(data: $data) {
              id
            }
          }
        `,
        token: params.token,
        variables: params.variables,
      })
      ?.then((response) => response.equipmentInventoryUpdate)
      ?.catch(() => null);
  }
}
