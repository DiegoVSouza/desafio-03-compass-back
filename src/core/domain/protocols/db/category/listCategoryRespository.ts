import { Category } from "src/core/domain/models/category.entity";

export abstract class IDbListCategoryRepository {
  abstract getAll(): Promise<Category[]>;
}
