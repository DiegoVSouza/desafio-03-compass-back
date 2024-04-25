import { EntitySchema } from 'typeorm';
import { Product } from '@/core/domain/models/product.entity';
import { Attributes } from '@/core/domain/models/attributes.entity';
import { Category } from '@/core/domain/models/category.entity';

export const ProductsSchema = new EntitySchema<Product>({
  name: Product.name,
  target: Product,
  tableName: `products`,
  columns: {
    id: {
      type: 'uuid',
      primary: true,
      generated: 'uuid',
      nullable: false,
    },
    name: {
      type: 'varchar',
      length: 255,
      nullable: false,
    },
    description: {
      type: 'text',
      nullable: false,
    },
    large_description: {
      type: 'text',
      nullable: false,
    },
    price: {
      type: 'numeric',
      nullable: false,
    },
    discount_price: {
      type: 'numeric',
      nullable: false,
    },
    discount_percent: {
      type: 'numeric',
      nullable: false,
    },
    sku: {
      type: 'varchar',
      length: 255,
      nullable: false,
    },
    is_new: {
      type: 'boolean',
      nullable: false,
      default: false
    },
    category_id: {
      type: 'uuid',
      nullable: false,
    },
    created_at: {
      type: 'timestamp',
      default: () => 'CURRENT_TIMESTAMP',
      nullable: false,
    },
    updated_at: {
      type: 'timestamp',
      default: () => 'CURRENT_TIMESTAMP',
      nullable: false,
    },
    deleted_at: {
      type: 'timestamp',
      default: () => 'CURRENT_TIMESTAMP',
      nullable: true,
    },
  },
  relations: {
    category: {
      type: 'many-to-one',
      target: () => Category,
      joinColumn: { name: 'category_id' },
      eager: true,
    },
    attributes: {
      type: 'one-to-many',
      target: () => Attributes,
      inverseSide: 'product',
      eager: true,
    },
  },
});
