import { Attributes } from '@/core/domain/models/attributes.entity';
import { AddAttributesDTO } from '@/presentation/dtos/attributes/addAttributes.dto';

export abstract class IDbAddAttributesRepository {
  abstract create(payload: AddAttributesDTO): Promise<Attributes>;
}
