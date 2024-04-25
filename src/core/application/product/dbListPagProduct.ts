import { IDbListProductPagRepository } from '@/core/domain/protocols/db/product/listProductPagRespository';
import { ProductRepository } from '@/core/domain/repositories/product';
import { ProductModelDTO } from '@/presentation/dtos/product/productModel.dto';
import { ProductPagModelDTO } from '@/presentation/dtos/product/productPagModel.dto';
import { ProductParamsDTO } from '@/presentation/dtos/product/productParams.dto';
import { Injectable } from '@nestjs/common';

@Injectable()
export class DbListPagProduct implements IDbListProductPagRepository {
  constructor(private readonly productRepository: ProductRepository) {}

  async getAllPag(params:ProductParamsDTO): Promise<ProductPagModelDTO> {
    return await this.productRepository.getAllPag(params);
  }
 
}
