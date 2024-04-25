import { EntitySchema } from 'typeorm/entity-schema/EntitySchema';
import { Category } from 'src/core/domain/models/category.entity';
import { randomUUID } from 'crypto';

export const CategorySchema = new EntitySchema<Category>({
  name: Category.name,
  target: Category,
  tableName: `categories`,
  columns: {
    id: {
      type: 'uuid',
      primary: true,
      generated: true,
      default: () => randomUUID()
    },
    name: {
      type: 'varchar',
      nullable: false,
    },
    image_link: {
      type: 'varchar',
      nullable: false,
    },
    description: {
      type: 'varchar',
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
});
