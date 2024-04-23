import { Category } from "src/core/domain/models/category.entity";

export abstract class IDbFindCategoryByIdRepository {
  abstract findById(id: string): Promise<Category>;
}
