import { CategoryParamsDTO } from "@/presentation/dtos/category/categoryParams.dto";
import { Category } from "src/core/domain/models/category.entity";

export abstract class IDbListCategoryRepository {
  abstract getAll(params:CategoryParamsDTO): Promise<Category[]>;
}
