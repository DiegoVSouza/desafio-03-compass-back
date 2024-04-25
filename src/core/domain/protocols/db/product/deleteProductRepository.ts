export abstract class IDbDeleteProductRepository {
  abstract delete(id: string): Promise<void>;
}
