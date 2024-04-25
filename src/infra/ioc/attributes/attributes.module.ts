import { Module } from '@nestjs/common';
import { attributesProvider } from './attributes.provider';
import { IDbAddAttributesRepository } from '@/core/domain/protocols/db/attributes/addAttributesRepository';
import { IDbListAttributesRepository } from '@/core/domain/protocols/db/attributes/listAttributesRespository';
import { IDbDeleteAttributesRepository } from '@/core/domain/protocols/db/attributes/deleteAttributesRepository';
import { IDbUpdateAttributesRepository } from '@/core/domain/protocols/db/attributes/updateAttributesRepository';
import { AttributesController } from '@/presentation/controllers/attributes/attributesController';
import { AttributesRepository } from '@/core/domain/repositories/attributes';

@Module({
  imports: [],
  providers: [...attributesProvider],
  controllers: [AttributesController],
  exports: [
    IDbAddAttributesRepository,
    IDbListAttributesRepository,
    IDbDeleteAttributesRepository,
    IDbUpdateAttributesRepository,
    AttributesRepository,
  ],
})
export class AttributesModule {}
