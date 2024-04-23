import { Module } from '@nestjs/common';
import { categoryProvider } from './category.provider';
import { IDbListCategoryRepository } from 'src/core/domain/protocols/db/category/listCategoryRespository';
import { IDbDeleteCategoryRepository } from 'src/core/domain/protocols/db/category/deleteCategoryRepository';
import { IDbUpdateCategoryRepository } from 'src/core/domain/protocols/db/category/updateCategoryRepository';
import { CategoryRepository } from 'src/core/domain/repositories/category';
import { CategoryController } from 'src/presentation/controllers/category/categoryController';

@Module({
  imports: [],
  providers: [...categoryProvider],
  controllers: [CategoryController],
  exports: [
    IDbListCategoryRepository,
    IDbDeleteCategoryRepository,
    IDbUpdateCategoryRepository,
    CategoryRepository,
  ],
})
export class CategoryModule {}
