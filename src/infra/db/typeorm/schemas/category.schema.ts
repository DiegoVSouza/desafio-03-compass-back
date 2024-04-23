import { EntitySchema } from 'typeorm/entity-schema/EntitySchema';
import { baseSchema } from '../base/base.schema';
import { Category } from 'src/core/domain/models/category.entity';
import { SchemasEnum } from '../../schema.enum';

export const CategorySchema = new EntitySchema<Category>({
  schema: SchemasEnum.default,
  name: Category.name,
  target: Category,
  tableName: `categories`,
  columns: {
    ...baseSchema,
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
  },
});
