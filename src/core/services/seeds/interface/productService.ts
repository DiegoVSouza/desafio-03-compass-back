import { Category } from "@/core/domain/models/category.entity";

export abstract class IProductService {
    abstract seedProducts(categories: Category[]): void;
}