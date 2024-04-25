import { ProductPagModelDTO } from "@/presentation/dtos/product/productPagModel.dto";
import { ProductParamsDTO } from "@/presentation/dtos/product/productParams.dto";

export abstract class IDbListProductPagRepository {
  abstract getAllPag(params: ProductParamsDTO): Promise<ProductPagModelDTO>;
}
