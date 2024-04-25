import { Module } from '@nestjs/common';
import { productProvider } from './product.provider';
import { IDbAddProductRepository } from '@/core/domain/protocols/db/product/addProductRepository';
import { IDbDeleteProductRepository } from '@/core/domain/protocols/db/product/deleteProductRepository';
import { IDbListProductRepository } from '@/core/domain/protocols/db/product/listProductRespository';
import { IDbUpdateProductRepository } from '@/core/domain/protocols/db/product/updateProductRepository';
import { ProductRepository } from '@/core/domain/repositories/product';
import { ProductController } from 'src/presentation/controllers/product/productController';
import { IDbListProductPagRepository } from '@/core/domain/protocols/db/product/listProductPagRespository';
import { IProductService } from '@/core/services/seeds/interface/productService';

@Module({
  imports: [],
  providers: [...productProvider],
  controllers: [ProductController],
  exports: [
    IDbAddProductRepository,
    IDbListProductRepository,
    IDbListProductPagRepository,
    IDbDeleteProductRepository,
    IDbUpdateProductRepository,
    ProductRepository,
    IProductService
  ],
})
export class ProductModule {}
