import {
  Notification,
  QueryNotificationArgs,
  QueryNotificationListArgs,
  NotificationListResponse,
  MutationNotificationCreateArgs,
  MutationNotificationDeleteArgs,
  MutationNotificationUpdateArgs,
  SuccessResponse,
} from '../../../definitions/schema';
import { IRepositoryParams } from './iRepositoryParams';

export interface INotificationRepository {
  getNotification(
    params: IRepositoryParams<QueryNotificationArgs>,
  ): Promise<Notification | null>;
  getNotificationList(
    params: IRepositoryParams<QueryNotificationListArgs>,
  ): Promise<NotificationListResponse>;
  createNotification(
    params: IRepositoryParams<MutationNotificationCreateArgs>,
  ): Promise<Notification | null>;
  deleteNotification(
    params: IRepositoryParams<MutationNotificationDeleteArgs>,
  ): Promise<SuccessResponse | null>;
  updateNotification(
    params: IRepositoryParams<MutationNotificationUpdateArgs>,
  ): Promise<Notification | null>;
}
