import { AddCategoryDTO } from '@/presentation/dtos/category/addCategory.dto';
import { Category } from 'src/core/domain/models/category.entity';
import { CategoryRepository } from 'src/core/domain/repositories/category';
import { CategoryModelDTO } from 'src/presentation/dtos/category/categoryModel.dto';
import { Repository } from 'typeorm';

export class CategoryTypeOrmRepository implements CategoryRepository {
  constructor(private readonly categoryRepository: Repository<Category>) { }

  async create(payload: AddCategoryDTO): Promise<Category> {
    const category = this.categoryRepository.create(payload);
    return this.categoryRepository.save(category);
  }

  async update(
    payload: CategoryModelDTO,
    id: string,
  ): Promise<Category> {
    try {
      const category = await this.categoryRepository.findOneOrFail({
        where: { id },
      });

      this.categoryRepository.merge(category, payload);
      return this.categoryRepository.save(category);
    } catch (error) {
      throw new Error('Category not found');
    }
  }

  async findById(id: string): Promise<Category> {
    return this.categoryRepository.findOne({ where: { id } });
  }

  async findByName(name: string): Promise<Category> {
    return this.categoryRepository.findOne({ where: { name } });
  }

  async delete(id: string): Promise<void> {
    await this.categoryRepository.delete(id);
  }

  async getAll(): Promise<Category[]> {
    return this.categoryRepository.find();
  }


}
