import { Category } from "@/core/domain/models/category.entity";

export abstract class ICategoryService {
    abstract seedCategories(): Promise<Category[]>;
}