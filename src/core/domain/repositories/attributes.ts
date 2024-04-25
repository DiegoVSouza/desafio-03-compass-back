import { Injectable } from '@nestjs/common';
import { Attributes } from '@/core/domain/models/attributes.entity';
import { AddAttributesDTO } from '@/presentation/dtos/attributes/addAttributes.dto';
import { IDbAddAttributesRepository } from '../protocols/db/attributes/addAttributesRepository';
import { IDbDeleteAttributesRepository } from '../protocols/db/attributes/deleteAttributesRepository';
import { IDbFinddAttributesByIdRepository } from '../protocols/db/attributes/findAttributesbyidRepository';
import { IDbListAttributesRepository } from '../protocols/db/attributes/listAttributesRespository';
import { IDbUpdateAttributesRepository } from '../protocols/db/attributes/updateAttributesRepository';

@Injectable()
export abstract class AttributesRepository
  implements
  IDbAddAttributesRepository,
  IDbListAttributesRepository,
  IDbUpdateAttributesRepository,
  IDbFinddAttributesByIdRepository,
  IDbDeleteAttributesRepository {
  abstract create(payload: AddAttributesDTO): Promise<Attributes>;
  abstract findById(id: string): Promise<Attributes>;
  abstract getAll(): Promise<Attributes[]>;
  abstract delete(id: string): Promise<void>;
  abstract update(payload: AddAttributesDTO, id: string): Promise<Attributes>;
}
