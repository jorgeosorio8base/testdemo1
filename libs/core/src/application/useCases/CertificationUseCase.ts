import { ICertificationUseCase } from './interfaces';
import { CertificationEntity } from '../../domain';
import {
  QueryCertificationArgs,
  QueryCertificationListArgs,
  MutationCertificationCreateArgs,
  MutationCertificationDeleteArgs,
  MutationCertificationUpdateArgs,
} from '../../definitions/schema';
import {
  ICertificationRepository,
  CertificationRepository,
  IRepositoryParams,
} from '../../infrastructure';

export class CertificationUseCase implements ICertificationUseCase {
  private readonly repository: ICertificationRepository;
  private readonly errorCatcher: (error: unknown, methodName: string) => never;

  constructor() {
    this.repository = new CertificationRepository();
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

  async getCertification(
    params: IRepositoryParams<QueryCertificationArgs>,
  ): Promise<CertificationEntity | null> {
    try {
      return this.repository
        .getCertification(params)
        .then((result) => new CertificationEntity(result))
        .catch((err) => this.errorCatcher(err, 'getCertification'));
    } catch (error) {
      this.errorCatcher(error, 'getCertification');
    }
  }

  async getCertificationList(
    params: IRepositoryParams<QueryCertificationListArgs>,
  ): Promise<{
    count: number;
    items: Array<CertificationEntity>;
  }> {
    try {
      return this.repository
        .getCertificationList(params)
        .then((result) => {
          return {
            count: result?.count || 0,
            items:
              result?.items?.map((item) => new CertificationEntity(item)) || [],
          };
        })
        .catch((err) => this.errorCatcher(err, 'getCertificationList'));
    } catch (error) {
      this.errorCatcher(error, 'getCertificationList');
    }
  }

  async createCertification(
    params: IRepositoryParams<MutationCertificationCreateArgs>,
  ): Promise<boolean> {
    try {
      return this.repository
        .createCertification(params)
        .then((result) => !!result?.id)
        .catch((err) => this.errorCatcher(err, 'createCertification'));
    } catch (error) {
      this.errorCatcher(error, 'createCertification');
    }
  }

  async deleteCertification(
    params: IRepositoryParams<MutationCertificationDeleteArgs>,
  ): Promise<boolean> {
    try {
      return this.repository
        .deleteCertification(params)
        .then((result) => !!result?.success)
        .catch((err) => this.errorCatcher(err, 'deleteCertification'));
    } catch (error) {
      this.errorCatcher(error, 'deleteCertification');
    }
  }

  async updateCertification(
    params: IRepositoryParams<MutationCertificationUpdateArgs>,
  ): Promise<boolean> {
    try {
      return this.repository
        .updateCertification(params)
        .then((result) => !!result?.id)
        .catch((err) => this.errorCatcher(err, 'updateCertification'));
    } catch (error) {
      this.errorCatcher(error, 'updateCertification');
    }
  }
}
