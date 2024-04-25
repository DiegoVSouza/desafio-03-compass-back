import { Product } from '@/core/domain/models/product.entity';

export abstract class IDbFindProductByIdRepository {
  abstract findById(id: string): Promise<Product>;
}
