import {
  QueryCertificationArgs,
  QueryCertificationListArgs,
  MutationCertificationCreateArgs,
  MutationCertificationDeleteArgs,
  MutationCertificationUpdateArgs,
} from '../../../definitions/schema';
import { CertificationEntity } from '../../../domain';
import { IRepositoryParams } from '../../../infrastructure';

export interface ICertificationUseCase {
  getCertification(
    params: IRepositoryParams<QueryCertificationArgs>,
  ): Promise<CertificationEntity | null>;
  getCertificationList(
    params: IRepositoryParams<QueryCertificationListArgs>,
  ): Promise<{
    count: number;
    items: Array<CertificationEntity>;
  }>;
  createCertification(
    params: IRepositoryParams<MutationCertificationCreateArgs>,
  ): Promise<boolean>;
  deleteCertification(
    params: IRepositoryParams<MutationCertificationDeleteArgs>,
  ): Promise<boolean>;
  updateCertification(
    params: IRepositoryParams<MutationCertificationUpdateArgs>,
  ): Promise<boolean>;
}
