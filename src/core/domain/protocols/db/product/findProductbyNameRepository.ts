import { Product } from '@/core/domain/models/product.entity';

export abstract class IDbFindProductByNameRepository {
  abstract findByName(name: string): Promise<Product>;
}
