import { Product } from '@/core/domain/models/product.entity';
import { AddProductDTO } from '@/presentation/dtos/product/addProduct.dto';

export abstract class IDbUpdateProductRepository {
  abstract update(payload: AddProductDTO, id: string): Promise<Product>;
}
