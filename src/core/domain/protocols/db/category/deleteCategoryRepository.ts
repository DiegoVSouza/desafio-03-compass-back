export abstract class IDbDeleteCategoryRepository {
  abstract delete(id: string): Promise<void>;
}
