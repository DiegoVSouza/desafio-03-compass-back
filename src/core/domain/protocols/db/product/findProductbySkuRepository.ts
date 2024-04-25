import { Product } from '@/core/domain/models/product.entity';

export abstract class IDbFindProductBySkuRepository {
  abstract findBySku(sku: string): Promise<Product>;
}
