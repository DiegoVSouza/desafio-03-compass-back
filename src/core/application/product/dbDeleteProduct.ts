import { BadRequestException, Injectable } from '@nestjs/common';
import { IDbDeleteProductRepository } from '@/core/domain/protocols/db/product/deleteProductRepository';
import { ProductRepository } from '@/core/domain/repositories/product';

@Injectable()
export class DbDeleteProduct implements IDbDeleteProductRepository {
  constructor(private readonly productRepository: ProductRepository) { }

  async delete(id: string): Promise<void> {
    try {
      const alreadyExists = await this.productRepository.findById(id);

      if (!alreadyExists) {
        throw new BadRequestException(`Product not found`);
      }
      await this.productRepository.delete(id);
    } catch (error) {
      console.log('Error on deleting product:', error);
      throw error;
    }

  }
}
