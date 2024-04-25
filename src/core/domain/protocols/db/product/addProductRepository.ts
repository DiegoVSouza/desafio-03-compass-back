import { Product } from '@/core/domain/models/product.entity';
import { AddProductDTO } from '@/presentation/dtos/product/addProduct.dto';

export abstract class IDbAddProductRepository {
  abstract create(payload: AddProductDTO): Promise<Product>;
}
