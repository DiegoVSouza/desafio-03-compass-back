import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpException,
  HttpStatus,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import {
  ApiBody,
  ApiConsumes,
  ApiCreatedResponse,
  ApiOkResponse,
  ApiTags,
} from '@nestjs/swagger';
import { IDbAddAttributesRepository } from '@/core/domain/protocols/db/attributes/addAttributesRepository';
import { IDbListAttributesRepository } from '@/core/domain/protocols/db/attributes/listAttributesRespository';
import { IDbDeleteAttributesRepository } from '@/core/domain/protocols/db/attributes/deleteAttributesRepository';
import { IDbUpdateAttributesRepository } from '@/core/domain/protocols/db/attributes/updateAttributesRepository';
import { Attributes } from '@/core/domain/models/attributes.entity';
import { AddAttributesDTO } from '@/presentation/dtos/attributes/addAttributes.dto';
import { AttributesModelDTO } from '@/presentation/dtos/attributes/attributesModel.dto';

@ApiTags('Attributes')
@Controller('/attributes')
export class AttributesController {
  constructor(
    private readonly dbAddAttributes: IDbAddAttributesRepository,
    private readonly dbListAttributes: IDbListAttributesRepository,
    private readonly dbUpdateAttributes: IDbUpdateAttributesRepository,
    private readonly dbDeleteAttributes: IDbDeleteAttributesRepository,
  ) {}


  @Get()
  @ApiOkResponse({
    description: 'Returns Attributess.',
    status: HttpStatus.OK,
    type: AttributesModelDTO,
    isArray: true,
  })
  async getAll(): Promise<Attributes[]> {
    try {
      return await this.dbListAttributes.getAll();
    } catch (error) {
      throw new HttpException(error.response, error.status);
    }
  }

  @Post()
  @ApiBody({
    description: 'Create Attributes',
    type: AddAttributesDTO,
  })
  @ApiCreatedResponse({ type: AddAttributesDTO })
  @HttpCode(HttpStatus.CREATED)
  async create(
    @Body() payload: AddAttributesDTO,
  ): Promise<Attributes> {
    return await this.dbAddAttributes.create(payload);
  }

  @Put(':id')
  @ApiBody({
    type: AddAttributesDTO,
  })
  @ApiOkResponse({
    description: 'Update Attributes.',
    status: HttpStatus.OK,
    type: AttributesModelDTO,
  })
  // @ApiBearerAuth()
  async update(
    @Param('id') id: string,
    @Body() payload: Omit<AddAttributesDTO, 'id'>,
  ): Promise<Attributes> {
    try {
      return await this.dbUpdateAttributes.update(payload, id);
    } catch (error) {
      throw new HttpException(error.response, error.status);
    }
  }

  @Delete(':id')
  @ApiOkResponse({
    description: 'Delete Attributes.',
    status: HttpStatus.OK,
  })
  // @ApiBearerAuth()
  async delete(@Param('id') id: string): Promise<void> {
    try {
      return await this.dbDeleteAttributes.delete(id);
    } catch (error) {
      throw new HttpException(error.response, error.status);
    }
  }
}
