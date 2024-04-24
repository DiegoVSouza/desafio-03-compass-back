import { Provider } from '@nestjs/common';
import { getDataSourceToken } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';
import { ConfigService } from '@nestjs/config';
import { DbAddCategory } from 'src/core/application/category/dbAddCategory';
import { DbDeleteCategory } from 'src/core/application/category/dbDeleteCategory';
import { DbListCategory } from 'src/core/application/category/dbListCategory';
import { DbUpdateCategory } from 'src/core/application/category/dbUpdateCategory';
import { Category } from 'src/core/domain/models/category.entity';
import { IDbAddCategoryRepository } from 'src/core/domain/protocols/db/category/addCategoryRepository';
import { IDbDeleteCategoryRepository } from 'src/core/domain/protocols/db/category/deleteCategoryRepository';
import { IDbListCategoryRepository } from 'src/core/domain/protocols/db/category/listCategoryRespository';
import { IDbUpdateCategoryRepository } from 'src/core/domain/protocols/db/category/updateCategoryRepository';
import { CategoryRepository } from 'src/core/domain/repositories/category';
import { CategoryTypeOrmRepository } from 'src/infra/db/typeorm/repositories/categoryTypeorm.repository';

export const categoryProvider: Provider[] = [
  DbListCategory,
  DbDeleteCategory,
  DbUpdateCategory,
  DbAddCategory,
  {
    provide: CategoryTypeOrmRepository,
    useFactory: (dataSource: DataSource) => {
      return new CategoryTypeOrmRepository(dataSource.getRepository(Category));
    },
    inject: [getDataSourceToken()],
  },
  {
    provide: CategoryRepository,
    useClass: CategoryTypeOrmRepository,
  },

  {
    provide: IDbListCategoryRepository,
    useFactory: (categoryRepository: CategoryRepository): DbListCategory => {
      return new DbListCategory(categoryRepository);
    },
    inject: [CategoryTypeOrmRepository],
  },
  {
    provide: IDbUpdateCategoryRepository,
    useFactory: (categoryRepository: CategoryRepository): DbUpdateCategory => {
      return new DbUpdateCategory(categoryRepository);
    },
    inject: [CategoryTypeOrmRepository],
  },
  {
    provide: IDbDeleteCategoryRepository,
    useFactory: (
      categoryRepository: CategoryRepository,
    ): DbDeleteCategory => {
      return new DbDeleteCategory(categoryRepository);
    },
    inject: [CategoryTypeOrmRepository],
  },
  {
    provide: IDbAddCategoryRepository,
    useFactory: (
      categoryRepository: CategoryRepository,
    ): DbAddCategory => {
      return new DbAddCategory(categoryRepository);
    },
    inject: [CategoryTypeOrmRepository],
  },
];