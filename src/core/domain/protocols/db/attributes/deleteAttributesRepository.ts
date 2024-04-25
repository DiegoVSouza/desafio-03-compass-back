export abstract class IDbDeleteAttributesRepository {
  abstract delete(id: string): Promise<void>;
}
