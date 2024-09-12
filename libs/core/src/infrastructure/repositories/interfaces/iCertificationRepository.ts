import {
  Certification,
  QueryCertificationArgs,
  QueryCertificationListArgs,
  CertificationListResponse,
  MutationCertificationCreateArgs,
  MutationCertificationDeleteArgs,
  MutationCertificationUpdateArgs,
  SuccessResponse,
} from '../../../definitions/schema';
import { IRepositoryParams } from './iRepositoryParams';

export interface ICertificationRepository {
  getCertification(
    params: IRepositoryParams<QueryCertificationArgs>,
  ): Promise<Certification | null>;
  getCertificationList(
    params: IRepositoryParams<QueryCertificationListArgs>,
  ): Promise<CertificationListResponse>;
  createCertification(
    params: IRepositoryParams<MutationCertificationCreateArgs>,
  ): Promise<Certification | null>;
  deleteCertification(
    params: IRepositoryParams<MutationCertificationDeleteArgs>,
  ): Promise<SuccessResponse | null>;
  updateCertification(
    params: IRepositoryParams<MutationCertificationUpdateArgs>,
  ): Promise<Certification | null>;
}
