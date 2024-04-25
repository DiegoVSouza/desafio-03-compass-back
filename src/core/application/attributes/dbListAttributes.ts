import { IDbListAttributesRepository } from '@/core/domain/protocols/db/attributes/listAttributesRespository';
import { Injectable } from '@nestjs/common';
import { Attributes } from '@/core/domain/models/attributes.entity';
import { AttributesRepository } from '@/core/domain/repositories/attributes';

@Injectable()
export class DbListAttributes implements IDbListAttributesRepository {
  constructor(private readonly attributesRepository: AttributesRepository) {}

  async getAll(): Promise<Attributes[]> {
    return this.attributesRepository.getAll();
  }
}
