import { BadRequestException, Injectable } from '@nestjs/common';
import { IDbDeleteAttributesRepository } from '@/core/domain/protocols/db/attributes/deleteAttributesRepository';
import { AttributesRepository } from '@/core/domain/repositories/attributes';

@Injectable()
export class DbDeleteAttributes implements IDbDeleteAttributesRepository {
  constructor(private readonly attributesRepository: AttributesRepository) { }

  async delete(id: string): Promise<void> {
    try {
      const alreadyExists = await this.attributesRepository.findById(id);

      if (!alreadyExists) {
        throw new BadRequestException(`Attribute not found`);
      }
      await this.attributesRepository.delete(id);
    } catch (error) {
      throw error;
    }

  }
}
