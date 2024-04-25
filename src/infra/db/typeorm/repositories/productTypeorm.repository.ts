import { Repository } from 'typeorm';
import { Product } from '@/core/domain/models/product.entity';
import { AddProductDTO } from '@/presentation/dtos/product/addProduct.dto';
import { ProductRepository } from '@/core/domain/repositories/product';
import { ProductParamsDTO } from '@/presentation/dtos/product/productParams.dto';
import { ProductPagModelDTO } from '@/presentation/dtos/product/productPagModel.dto';


export class ProductTypeOrmRepository implements ProductRepository {
  constructor(private readonly productRepository: Repository<Product>) { }

  async getAllPag(params: ProductParamsDTO): Promise<ProductPagModelDTO> {
    const queryBuilder = this.productRepository.createQueryBuilder('product');
    if (params.id) {
      queryBuilder.where('product.id = :id', { id: params.id });
    }

    if (params.category_id) {
      queryBuilder.andWhere('product.category_id = :categoryId', {
        categoryId: params.category_id,
      });
    }

    if (params.name) {
      queryBuilder.andWhere('product.name LIKE :name', {
        name: `%${params.name}%`,
      });
    }

    if (params.price) {
      queryBuilder.andWhere('product.price = :price', { price: params.price });
    }

    if (params.discount !== undefined) {
      if (params.discount) {
        queryBuilder.andWhere('product.discount_percent > 0');
      } else {
        queryBuilder.andWhere('product.discount_percent = 0');
      }
    }

    if (params.is_new !== undefined) {
      queryBuilder.andWhere('product.is_new = :is_new', { is_new: params.is_new });
    }

    if (params.sku) {
      queryBuilder.andWhere('product.sku = :sku', { sku: params.sku });
    }

    if (params.sorted_by) {
      const sortOrder = params.sorted_by.toLowerCase() === 'asc' ? 'ASC' : 'DESC';
      queryBuilder.orderBy('product.name', sortOrder);
    }

    if (params.limit) {
      queryBuilder.take(params.limit);
    }

    if (params.page) {
      queryBuilder.skip((Number(params.page) - 1) * params.limit);
    }


    queryBuilder.leftJoinAndSelect('product.category', 'category');
    queryBuilder.leftJoinAndSelect('product.attributes', 'attributes');

    const products = await queryBuilder.getMany();

    const number_of_products = await queryBuilder.getCount();

    const number_of_pages = Math.ceil(number_of_products / params.limit);
    
    return { products, number_of_pages, number_of_products };
  }

  findBySku(sku: string): Promise<Product> {
    return this.productRepository.findOne({ where: { sku } });
  }

  async create(payload: AddProductDTO): Promise<Product> {
    const product = this.productRepository.create(payload);
    return this.productRepository.save(product);
  }

  findByName(name: string): Promise<Product> {
    return this.productRepository.findOne({ where: { name } });
  }

  async update(payload: AddProductDTO, id: string): Promise<Product> {
    try {
      const product = await this.productRepository.findOneOrFail({
        where: { id },
      });

      this.productRepository.merge(product, payload);
      return this.productRepository.save(product);
    } catch (error) {
      throw new Error('Error update product');
    }
  }

  async findById(id: string): Promise<Product> {
    return this.productRepository.findOne({ where: { id } });
  }

  async delete(id: string): Promise<void> {
    await this.productRepository.delete(id);
  }

  async getAll(): Promise<Product[]> {

    return await this.productRepository.find({
      relations: ['category', 'attributes'],
    });
  }


}
