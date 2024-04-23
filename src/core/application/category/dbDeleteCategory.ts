import { BadRequestException, Injectable } from '@nestjs/common';
import { IDbDeleteCategoryRepository } from 'src/core/domain/protocols/db/category/deleteCategoryRepository';
import { CategoryRepository } from 'src/core/domain/repositories/category';

@Injectable()
export class DbDeleteCategory implements IDbDeleteCategoryRepository {
  constructor(
    private readonly categoryRepository: CategoryRepository,
  ) {}

  async delete(id: string): Promise<void> {
    try {
      const category = await this.categoryRepository.findById(id);

      if (!category) {
        throw new BadRequestException(`Category not found`);
      }

      await this.categoryRepository.delete(id);
    } catch (error) {
      console.log('Error on deleting category:', error);
      throw error;
    }
  }
}
