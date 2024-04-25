import { BadRequestException, Injectable } from '@nestjs/common';
import { IDbUpdateAttributesRepository } from '@/core/domain/protocols/db/attributes/updateAttributesRepository';
import { Attributes } from '@/core/domain/models/attributes.entity';
import { AddAttributesDTO } from '@/presentation/dtos/attributes/addAttributes.dto';
import { AttributesRepository } from '@/core/domain/repositories/attributes';

@Injectable()
export class DbUpdateAttributes implements IDbUpdateAttributesRepository {
  constructor(private readonly attributesRepository: AttributesRepository) {}

  async update(
    payload: Omit<AddAttributesDTO, 'id'>,
    id: string,
  ): Promise<Attributes> {
    try {
      return await this.attributesRepository.update(payload, id);
    } catch (error) {
      if (error.message === 'Attributes not found') {
        throw new BadRequestException(`Attributes not found`);
      } else {
        throw error;
      }
    }
  }
}
