import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { faker } from '@faker-js/faker';
import { Product } from '@/core/domain/models/product.entity';
import { Category } from '@/core/domain/models/category.entity';
import { ProductRepository } from '@/core/domain/repositories/product';
import { generateAttributes } from './attributes.seed';
import { IProductService } from '../interface/productService';
import { AttributesRepository } from '@/core/domain/repositories/attributes';
import { AddAttributesDTO } from '@/presentation/dtos/attributes/addAttributes.dto';

@Injectable()
export class ProductSeedService implements IProductService {
    constructor(
        private readonly productRepository: ProductRepository,
        private readonly attributesRepository: AttributesRepository,
    ) { }

    async seedProducts(categories: Category[]) {
            let e = 0
            for (const category of categories) {
            for (let i = 0; i < 48; i++) {
                const product = new Product();
                product.category_id = category.id;
                product.name = `Produto ${i + 1 + 48*e}`;
                product.description = faker.lorem.sentence();
                product.large_description = faker.lorem.paragraph();
                product.price = faker.number.int({ min: 50, max: 500 });
                product.discount_price = faker.number.int({ min: 40, max: product.price });
                product.discount_percent = ((1 - (product.discount_price / product.price)) * 100);
                product.sku = faker.string.uuid();
                product.is_new = faker.datatype.boolean();

                if (i < 30) {
                    product.discount_price = 0
                    product.discount_percent = 0;
                }

                const productCreated = await this.productRepository.create(product);
                const productId = productCreated.id;
                let attributes = generateAttributes();

                for (const attributeData of attributes) {
                    let attribute: AddAttributesDTO = {...attributeData,product_id: productId}
                    await this.attributesRepository.create(attribute);
                }
            }
            e++
        }
    }
}
