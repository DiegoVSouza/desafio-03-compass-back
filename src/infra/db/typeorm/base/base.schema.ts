import { EntitySchemaColumnOptions } from 'typeorm';

export const baseSchema = {
  id: {
    primary: true,
    type: 'uuid',
    generated: true,
  } as EntitySchemaColumnOptions,
  created_at: {
    type: 'timestamp',
    default: new Date(),
  } as EntitySchemaColumnOptions,
  updated_at: {
    type: 'timestamp',
    default: new Date(),
  } as EntitySchemaColumnOptions,
  deleted_at: {
    type: 'timestamp',
    nullable: true,
  } as EntitySchemaColumnOptions,
};
