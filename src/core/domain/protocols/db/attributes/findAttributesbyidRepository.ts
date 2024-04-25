import { Attributes } from "@/core/domain/models/attributes.entity";

export abstract class IDbFinddAttributesByIdRepository {
  abstract findById(id: string): Promise<Attributes>;
}
