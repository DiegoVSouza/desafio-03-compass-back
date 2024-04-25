import { ProductModelDTO } from "@/presentation/dtos/product/productModel.dto";

export abstract class IDbListProductRepository {
  abstract getAll(): Promise<ProductModelDTO[]>;
}
