import { IDbListProductRepository } from '@/core/domain/protocols/db/product/listProductRespository';
import { ProductRepository } from '@/core/domain/repositories/product';
import { ProductModelDTO } from '@/presentation/dtos/product/productModel.dto';
import { Injectable } from '@nestjs/common';

@Injectable()
export class DbListProduct implements IDbListProductRepository {
  constructor(private readonly productRepository: ProductRepository) {}

  async getAll(): Promise<ProductModelDTO[]> {
    return await this.productRepository.getAll();
  }
}
