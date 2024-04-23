import { Category } from "src/core/domain/models/category.entity";
import { CategoryModelDTO } from "src/presentation/dtos/category/categoryModel.dto";

export abstract class IDbUpdateCategoryRepository {
  abstract update(
    payload: Omit<CategoryModelDTO, 'id'>,
    id: string,
  ): Promise<Category>;
}
