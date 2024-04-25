import { Attributes } from '@/core/domain/models/attributes.entity';
import { AddAttributesDTO } from '@/presentation/dtos/attributes/addAttributes.dto';

export abstract class IDbUpdateAttributesRepository {
  abstract update(
    payload: Omit<AddAttributesDTO, 'id'>,
    id: string,
  ): Promise<Attributes>;
}
