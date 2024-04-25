import { Module } from '@nestjs/common';
import { categoryProvider } from './category.provider';
import { IDbListCategoryRepository } from 'src/core/domain/protocols/db/category/listCategoryRespository';
import { IDbDeleteCategoryRepository } from 'src/core/domain/protocols/db/category/deleteCategoryRepository';
import { IDbUpdateCategoryRepository } from 'src/core/domain/protocols/db/category/updateCategoryRepository';
import { CategoryRepository } from 'src/core/domain/repositories/category';
import { CategoryController } from 'src/presentation/controllers/category/categoryController';
import { IDbAddCategoryRepository } from '@/core/domain/protocols/db/category/addCategoryRepository';
import { ICategoryService } from 'src/core/services/seeds/interface/categoryService';

@Module({
  imports: [],
  providers: [...categoryProvider],
  controllers: [CategoryController],
  exports: [
    IDbAddCategoryRepository,
    IDbListCategoryRepository,
    IDbDeleteCategoryRepository,
    IDbUpdateCategoryRepository,
    ICategoryService,
    CategoryRepository
  ],
})
export class CategoryModule {}
