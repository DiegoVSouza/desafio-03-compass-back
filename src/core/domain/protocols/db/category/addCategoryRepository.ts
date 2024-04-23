import { Category } from 'src/core/domain/models/category.entity';
import { AddCategoryDTO } from 'src/presentation/dtos/category/addCategory.dto';

export abstract class IDbAddCategoryRepository {
  abstract create(
    payload: AddCategoryDTO
  ): Promise<Category>;
}
