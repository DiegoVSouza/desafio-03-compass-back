import { Attributes } from '@/core/domain/models/attributes.entity';

export abstract class IDbListAttributesRepository {
  abstract getAll(): Promise<Attributes[]>;
}
