import { Repository } from 'typeorm';
import { Attributes } from '@/core/domain/models/attributes.entity';
import { AttributesRepository } from '@/core/domain/repositories/attributes';
import { AddAttributesDTO } from '@/presentation/dtos/attributes/addAttributes.dto';

export class AttributesTypeOrmRepository implements AttributesRepository {
  constructor(private readonly attributesRepository: Repository<Attributes>) {}

  async create(
    payload: AddAttributesDTO,
  ): Promise<Attributes> {
    const Attribute = this.attributesRepository.create(payload);
    return this.attributesRepository.save(Attribute);
  }
  
  async update(
    payload: AddAttributesDTO,
    id: string,
  ): Promise<Attributes> {
    try {
      const attributes = await this.attributesRepository.findOneOrFail({
        where: { id },
      });

      this.attributesRepository.merge(attributes, payload);

      const save = await this.attributesRepository.save(attributes);

      return save;
    } catch (error) {
      console.log(error);
      throw new Error('Attributes not found');
    }
  }

  async findById(id: string): Promise<Attributes> {
    return this.attributesRepository.findOne({ where: { id } });
  }

  async delete(id: string): Promise<void> {
    await this.attributesRepository.delete(id);
  }

  async getAll(): Promise<Attributes[]> {
    return this.attributesRepository.find();
  }


}
