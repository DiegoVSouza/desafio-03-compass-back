import { Provider } from '@nestjs/common';
import { getDataSourceToken } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';
import { IDbDeleteAttributesRepository } from '@/core/domain/protocols/db/attributes/deleteAttributesRepository';
import { IDbAddAttributesRepository } from '@/core/domain/protocols/db/attributes/addAttributesRepository';
import { IDbListAttributesRepository } from '@/core/domain/protocols/db/attributes/listAttributesRespository';
import { IDbUpdateAttributesRepository } from '@/core/domain/protocols/db/attributes/updateAttributesRepository';
import { Attributes } from '@/core/domain/models/attributes.entity';
import { DbListAttributes } from '@/core/application/attributes/dbListAttributes';
import { DbDeleteAttributes } from '@/core/application/attributes/dbDeleteAttributes';
import { DbAddAttributes } from '@/core/application/attributes/dbAddAttributes';
import { DbUpdateAttributes } from '@/core/application/attributes/dbUpdateAttributes';
import { AttributesRepository } from '@/core/domain/repositories/attributes';
import { AttributesTypeOrmRepository } from '@/infra/db/typeorm/repositories/attributesTypeorm.repository';

export const attributesProvider: Provider[] = [
  DbAddAttributes,
  DbListAttributes,
  DbDeleteAttributes,
  DbUpdateAttributes,
  {
    provide: AttributesTypeOrmRepository,
    useFactory: (dataSource: DataSource) => {
      return new AttributesTypeOrmRepository(
        dataSource.getRepository(Attributes),
      );
    },
    inject: [getDataSourceToken()],
  },
  {
    provide: AttributesRepository,
    useClass: AttributesTypeOrmRepository,
  },
  {
    provide: IDbAddAttributesRepository,
    useClass: DbAddAttributes,
  },
  {
    provide: IDbAddAttributesRepository,
    useFactory: (
      attributesRepository: AttributesRepository
    ): DbAddAttributes => {
      return new DbAddAttributes(attributesRepository);
    },
    inject: [AttributesTypeOrmRepository],
  },
  {
    provide: IDbListAttributesRepository,
    useFactory: (
      attributesRepository: AttributesRepository,
    ): DbListAttributes => {
      return new DbListAttributes(attributesRepository);
    },
    inject: [AttributesTypeOrmRepository],
  },
  {
    provide: IDbUpdateAttributesRepository,
    useFactory: (
      attributesRepository: AttributesRepository,
    ): DbUpdateAttributes => {
      return new DbUpdateAttributes(attributesRepository);
    },
    inject: [AttributesTypeOrmRepository],
  },
  {
    provide: IDbDeleteAttributesRepository,
    useFactory: (
      attributesRepository: AttributesRepository,
    ): DbDeleteAttributes => {
      return new DbDeleteAttributes(attributesRepository);
    },
    inject: [AttributesTypeOrmRepository],
  },
];
