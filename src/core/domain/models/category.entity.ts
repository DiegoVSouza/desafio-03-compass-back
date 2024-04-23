import { SchemasEnum } from 'src/infra/db/schema.enum';
import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    CreateDateColumn,
    UpdateDateColumn,
    DeleteDateColumn,
  } from 'typeorm';
  
  
  @Entity({ name: 'categories', schema: SchemasEnum.default})
  export class Category {
    @PrimaryGeneratedColumn('uuid')
    id: string;
  
    @Column()
    name: string;
  
    @Column()
    image_link: string;
  
    @Column({ type: 'text' })
    description: string;
  
    @CreateDateColumn({ name: 'created_at' })
    created_at: Date;
  
    @UpdateDateColumn({ name: 'updated_at' })
    updated_at?: Date;
  
    @DeleteDateColumn({ name: 'deleted_at' })
    deleted_at?: Date;
  }
  