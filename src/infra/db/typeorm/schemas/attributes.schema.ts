import { EntitySchema } from 'typeorm';
import { Attributes } from '@/core/domain/models/attributes.entity';

export const AttributesSchema = new EntitySchema<Attributes>({
  name: Attributes.name,
  target: Attributes,
  tableName: `attributes`,
  columns: {
    id: {
      type: 'uuid',
      primary: true,
      generated: 'uuid',
    },
    color: {
      type: 'varchar',
    },
    qtd: {
      type: 'int',
    },
    size: {
      type: 'varchar',
    },
    image_link: {
      type: 'varchar',
      nullable: false,
    },
    created_at: {
      type: 'timestamp',
      createDate: true,
    },
    updated_at: {
      type: 'timestamp',
      updateDate: true,
    },
    product_id: {
      type: 'uuid',
      nullable: false,
    },
  },
  relations: {
    product: {
      type: 'many-to-one',
      target: 'Product',
      joinColumn: { name: 'product_id' },
    },
  },
});
