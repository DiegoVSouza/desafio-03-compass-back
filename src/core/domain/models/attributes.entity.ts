import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
} from 'typeorm';
import { Product } from './product.entity';

@Entity({ name: 'attributes'})
export class Attributes {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  qtd: number;

  @Column()
  color: string;

  @Column()
  size: string;

  @Column()
  image_link: string;

  @Column()
  product_id: string;

  @ManyToOne(() => Product, (product) => product.attributes)
  product: Product;

  @CreateDateColumn({
    name: 'created_at',
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP',
  })
  created_at: Date;

  @UpdateDateColumn({
    name: 'updated_at',
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP',
  })
  updated_at: Date;
}
