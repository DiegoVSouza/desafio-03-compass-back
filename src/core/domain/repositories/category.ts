import { Injectable } from '@nestjs/common';
import { IDbListCategoryRepository } from '../protocols/db/category/listCategoryRespository';
import { IDbUpdateCategoryRepository } from '../protocols/db/category/updateCategoryRepository';
import { IDbFindCategoryByIdRepository } from '../protocols/db/category/findCategorybyidRepository';
import { IDbDeleteCategoryRepository } from '../protocols/db/category/deleteCategoryRepository';
import { IDbFindCategoryByNameRepository } from '../protocols/db/category/findCategorybyNameRepository';
import { Category } from '../models/category.entity';
import { AddCategoryDTO } from 'src/presentation/dtos/category/addCategory.dto';

@Injectable()
export abstract class CategoryRepository
  implements
    IDbListCategoryRepository,
    IDbUpdateCategoryRepository,
    IDbFindCategoryByIdRepository,
    IDbFindCategoryByNameRepository,
    IDbDeleteCategoryRepository
{
  abstract create(payload: AddCategoryDTO): Promise<Category>;
  abstract findById(id: string): Promise<Category>;
  abstract findByName(name: string): Promise<Category>;
  abstract getAll(): Promise<Category[]>;
  abstract delete(id: string): Promise<void>;
  abstract update(
    payload: AddCategoryDTO,
    id: string,
  ): Promise<Category>;
}
