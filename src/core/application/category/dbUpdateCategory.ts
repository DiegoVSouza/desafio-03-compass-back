import { BadRequestException, Injectable } from '@nestjs/common';
import { CategoryRepository } from 'src/core/domain/repositories/category';
import { CategoryModelDTO } from 'src/presentation/dtos/category/categoryModel.dto';
import { Category } from 'src/core/domain/models/category.entity';
import { IDbUpdateCategoryRepository } from 'src/core/domain/protocols/db/category/updateCategoryRepository';

@Injectable()
export class DbUpdateCategory implements IDbUpdateCategoryRepository {
  constructor(private readonly categoryRepository: CategoryRepository) {}

  async update(
    payload: Omit<CategoryModelDTO, 'id'>,
    id: string,
  ): Promise<Category> {
    try {
      return await this.categoryRepository.update(payload, id);
    } catch (error) {
      if (error.message === 'Category not found') {
        throw new BadRequestException(`Category not found`);
      } else {
        throw error;
      }
    }
  }
}
