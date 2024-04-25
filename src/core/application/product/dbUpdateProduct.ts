import { BadRequestException, Injectable } from '@nestjs/common';
import { IDbUpdateProductRepository } from '@/core/domain/protocols/db/product/updateProductRepository';
import { Product } from '@/core/domain/models/product.entity';
import { AddProductDTO } from '@/presentation/dtos/product/addProduct.dto';
import { ProductRepository } from '@/core/domain/repositories/product';

@Injectable()
export class DbUpdateProduct implements IDbUpdateProductRepository {
  constructor(private readonly productRepository: ProductRepository) {}

  async update(payload: AddProductDTO, id: string): Promise<Product> {
    try {
      return await this.productRepository.update(payload, id);
    } catch (error) {
      if (error.message === 'Product not found') {
        throw new BadRequestException(`Product not found`);
      } else {
        throw error;
      }
    }
  }
}
