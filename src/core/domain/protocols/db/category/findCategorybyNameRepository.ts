import { Category } from "src/core/domain/models/category.entity";

export abstract class IDbFindCategoryByNameRepository {
  abstract findById(id: string): Promise<Category>;
}
