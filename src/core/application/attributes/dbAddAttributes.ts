import { Injectable } from '@nestjs/common';
import { IDbAddAttributesRepository } from '@/core/domain/protocols/db/attributes/addAttributesRepository';
import { Attributes } from '@/core/domain/models/attributes.entity';
import { AddAttributesDTO } from '@/presentation/dtos/attributes/addAttributes.dto';
import { AttributesRepository } from '@/core/domain/repositories/attributes';

@Injectable()
export class DbAddAttributes implements IDbAddAttributesRepository {
  constructor(
    private readonly attributesRepository: AttributesRepository
  ) {}

  async create(
    payload: AddAttributesDTO,
  ): Promise<Attributes> {
    return this.attributesRepository.create(payload);
  }
}
