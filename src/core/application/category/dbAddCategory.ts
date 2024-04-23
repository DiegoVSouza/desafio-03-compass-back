import { BadRequestException, Injectable } from '@nestjs/common';
import { CategoryRepository } from 'src/core/domain/repositories/category';
import { AddCategoryDTO } from 'src/presentation/dtos/category/addCategory.dto';
import { Category } from 'src/core/domain/models/category.entity';
import { IDbAddCategoryRepository } from 'src/core/domain/protocols/db/category/addCategoryRepository';

@Injectable()
export class DbAddCategory implements IDbAddCategoryRepository {
  constructor(
    private readonly categoryRepository: CategoryRepository,
  ) {}

  async create(
    payload: AddCategoryDTO
  ): Promise<Category> {
    const alreadyExists = await this.categoryRepository.findByName(
      payload.name,
    );

    if (alreadyExists) {
      throw new BadRequestException(
        `Category with name: ${payload.name} already exists`,
      );
    }

    return await this.categoryRepository.create(payload);
  }
}
