import { Injectable } from '@nestjs/common';
import { Product } from '@/core/domain/models/product.entity';
import { IDbAddProductRepository } from '../protocols/db/product/addProductRepository';
import { IDbDeleteProductRepository } from '../protocols/db/product/deleteProductRepository';
import { IDbFindProductByIdRepository } from '../protocols/db/product/findProductbyidRepository';
import { IDbListProductRepository } from '../protocols/db/product/listProductRespository';
import { IDbUpdateProductRepository } from '../protocols/db/product/updateProductRepository';
import { ProductModelDTO } from '@/presentation/dtos/product/productModel.dto';
import { AddProductDTO } from '@/presentation/dtos/product/addProduct.dto';
import { ProductParamsDTO } from '@/presentation/dtos/product/productParams.dto';
import { ProductPagModelDTO } from '@/presentation/dtos/product/productPagModel.dto';
import { IDbFindProductByNameRepository } from '../protocols/db/product/findProductbyNameRepository';
import { IDbFindProductBySkuRepository } from '../protocols/db/product/findProductbySkuRepository';


@Injectable()
export abstract class ProductRepository
  implements
    IDbAddProductRepository,
    IDbListProductRepository,
    IDbUpdateProductRepository,
    IDbFindProductByIdRepository,
    IDbFindProductByNameRepository,
    IDbFindProductBySkuRepository,
    IDbDeleteProductRepository
{
  abstract create(payload: Omit<AddProductDTO,'attributes'>): Promise<Product>;
  abstract findById(id: string): Promise<Product>;
  abstract findByName(name: string): Promise<Product>;
  abstract findBySku(sku: string): Promise<Product>;
  abstract getAll(): Promise<ProductModelDTO[]>;
  abstract getAllPag(params: ProductParamsDTO): Promise<ProductPagModelDTO>;
  abstract delete(id: string): Promise<void>;
  abstract update(payload: Omit<AddProductDTO,'attributes'>, id: string): Promise<Product>;
}
