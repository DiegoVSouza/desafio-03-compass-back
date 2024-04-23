import { Injectable } from '@nestjs/common';
import { Category } from 'src/core/domain/models/category.entity';
import { IDbListCategoryRepository } from 'src/core/domain/protocols/db/category/listCategoryRespository';
import { CategoryRepository } from 'src/core/domain/repositories/category';

@Injectable()
export class DbListCategory implements IDbListCategoryRepository {
  constructor(private readonly categoryRepository: CategoryRepository) {}

  async getAll(): Promise<Category[]> {
    return await this.categoryRepository.getAll();
  }
}
