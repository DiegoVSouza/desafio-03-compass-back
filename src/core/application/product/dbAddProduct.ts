import { BadRequestException, Injectable } from '@nestjs/common';
import { IDbAddProductRepository } from '@/core/domain/protocols/db/product/addProductRepository';
import { Product } from '@/core/domain/models/product.entity';
import { ProductRepository } from '@/core/domain/repositories/product';
import { AddProductDTO } from '@/presentation/dtos/product/addProduct.dto';
import { AddAttributesDTO } from '@/presentation/dtos/attributes/addAttributes.dto';
import { AttributesRepository } from '@/core/domain/repositories/attributes';

@Injectable()
export class DbAddProduct implements IDbAddProductRepository {
  constructor(
    private readonly productRepository: ProductRepository,
    private readonly attributesRepository: AttributesRepository
  ) { }

  async create(payload: AddProductDTO): Promise<Product> {

    try {
      const alreadyExists = await this.productRepository.findBySku(payload.sku);
      if (alreadyExists) {
        throw new BadRequestException(
          `Product with sku: ${payload.sku} already exists`,
        );
      }

      const { attributes, ...restPaylod } = payload
      const product = await this.productRepository.create(restPaylod);

      const productId = product.id;

      for (const attributeData of attributes) {
        let attribute: AddAttributesDTO = {...attributeData,product_id: productId}
        await this.attributesRepository.create(attribute);
      }

      return product;

    } catch (error) {
      console.log(error)
      throw error;
    }
  }
}
