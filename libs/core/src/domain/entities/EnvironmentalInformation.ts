import { IEnvironmentalInformationEntity } from './interfaces';
import { EnvironmentalInformation as GQLEnvironmentalInformation } from '../../definitions/schema';

export class EnvironmentalInformationEntity
  implements IEnvironmentalInformationEntity
{
  private readonly _id?: string;
  private readonly _createdAt?: string;
  private readonly _updatedAt?: string;

  private readonly _data_type?: string;
  private readonly _data_value?: string;
  private readonly _measurement_date?: string;

  constructor(data: GQLEnvironmentalInformation | null) {
    this._id = data?.id || undefined;
    this._createdAt = data?.createdAt || undefined;
    this._updatedAt = data?.updatedAt || undefined;

    this._data_type = data?.data_type || undefined;
    this._data_value = data?.data_value || undefined;
    this._measurement_date = data?.measurement_date || undefined;
  }

  get Id(): string | undefined {
    return this._id;
  }

  get CreatedAt(): string | undefined {
    return this._createdAt;
  }

  get UpdatedAt(): string | undefined {
    return this._updatedAt;
  }

  get DataType(): string | undefined {
    return this._data_type;
  }

  get DataValue(): string | undefined {
    return this._data_value;
  }

  get MeasurementDate(): string | undefined {
    return this._measurement_date;
  }
}
