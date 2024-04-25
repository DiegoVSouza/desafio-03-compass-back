import { DbAddProduct } from '@/core/application/product/dbAddProduct';
import { DbDeleteProduct } from '@/core/application/product/dbDeleteProduct';
import { DbListPagProduct } from '@/core/application/product/dbListPagProduct';
import { DbListProduct } from '@/core/application/product/dbListProduct';
import { DbUpdateProduct } from '@/core/application/product/dbUpdateProduct';
import { Attributes } from '@/core/domain/models/attributes.entity';
import { Product } from '@/core/domain/models/product.entity';
import { IDbAddProductRepository } from '@/core/domain/protocols/db/product/addProductRepository';
import { IDbDeleteProductRepository } from '@/core/domain/protocols/db/product/deleteProductRepository';
import { IDbListProductPagRepository } from '@/core/domain/protocols/db/product/listProductPagRespository';
import { IDbListProductRepository } from '@/core/domain/protocols/db/product/listProductRespository';
import { IDbUpdateProductRepository } from '@/core/domain/protocols/db/product/updateProductRepository';
import { AttributesRepository } from '@/core/domain/repositories/attributes';
import { ProductRepository } from '@/core/domain/repositories/product';
import { AttributesTypeOrmRepository } from '@/infra/db/typeorm/repositories/attributesTypeorm.repository';
import { ProductTypeOrmRepository } from '@/infra/db/typeorm/repositories/productTypeorm.repository';
import { ProductSeedService } from '@/core/services/seeds/application/product.seed';
import { IProductService } from '@/core/services/seeds/interface/productService';
import { Provider } from '@nestjs/common';
import { getDataSourceToken } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';


export const productProvider: Provider[] = [
  DbAddProduct,
  DbListProduct,
  DbListPagProduct,
  DbDeleteProduct,
  DbUpdateProduct,
  ProductSeedService,
  {
    provide: ProductTypeOrmRepository,
    useFactory: (dataSource: DataSource) => {
      return new ProductTypeOrmRepository(dataSource.getRepository(Product));
    },
    inject: [getDataSourceToken()],
  },
  {
    provide: ProductRepository,
    useClass: ProductTypeOrmRepository,
  },
  {
    provide: AttributesTypeOrmRepository,
    useFactory: (dataSource: DataSource) => {
      return new AttributesTypeOrmRepository(
        dataSource.getRepository(Attributes),
      );
    },
    inject: [getDataSourceToken()],
  },
  {
    provide: AttributesRepository,
    useClass: AttributesTypeOrmRepository,
  },
  {
    provide: IProductService,
    useFactory: (
      productRepository: ProductRepository,
      attributesRepository: AttributesRepository,
    ): ProductSeedService => {
      return new ProductSeedService(productRepository, attributesRepository);
    },
    inject: [ProductTypeOrmRepository, AttributesTypeOrmRepository],
  },
  {
    provide: IDbAddProductRepository,
    useFactory: (
      productRepository: ProductRepository,
      attributesRepository: AttributesRepository,
    ): DbAddProduct => {
      return new DbAddProduct(productRepository, attributesRepository);
    },
    inject: [ProductTypeOrmRepository, AttributesTypeOrmRepository],
  },
  {
    provide: IDbListProductRepository,
    useFactory: (productRepository: ProductRepository): DbListProduct => {
      return new DbListProduct(productRepository);
    },
    inject: [ProductTypeOrmRepository],
  },
  {
    provide: IDbListProductPagRepository,
    useFactory: (productRepository: ProductRepository): DbListPagProduct => {
      return new DbListPagProduct(productRepository);
    },
    inject: [ProductTypeOrmRepository],
  },
  {
    provide: IDbUpdateProductRepository,
    useFactory: (productRepository: ProductRepository): DbUpdateProduct => {
      return new DbUpdateProduct(productRepository);
    },
    inject: [ProductTypeOrmRepository],
  },
  {
    provide: IDbDeleteProductRepository,
    useFactory: (productRepository: ProductRepository): DbDeleteProduct => {
      return new DbDeleteProduct(productRepository);
    },
    inject: [ProductTypeOrmRepository],
  },
];
