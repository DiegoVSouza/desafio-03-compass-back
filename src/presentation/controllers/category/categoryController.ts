import {
  Body,
  Controller,
  Delete,
  Get,
  HttpException,
  HttpStatus,
  Param,
  Post,
  Put,
  UploadedFile,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import {
  ApiBearerAuth,
  ApiBody,
  ApiConsumes,
  ApiOkResponse,
  ApiTags,
} from '@nestjs/swagger';
import { FileInterceptor } from '@nestjs/platform-express';
import { CategoryModelDTO } from 'src/presentation/dtos/category/categoryModel.dto';
import { AddCategoryDTO } from 'src/presentation/dtos/category/addCategory.dto';
import { IDbListCategoryRepository } from 'src/core/domain/protocols/db/category/listCategoryRespository';
import { Category } from 'src/core/domain/models/category.entity';
import { IDbAddCategoryRepository } from 'src/core/domain/protocols/db/category/addCategoryRepository';
import { IDbDeleteCategoryRepository } from 'src/core/domain/protocols/db/category/deleteCategoryRepository';
import { IDbUpdateCategoryRepository } from 'src/core/domain/protocols/db/category/updateCategoryRepository';

@ApiTags('Category')
@Controller('/category')
export class CategoryController {
  constructor(
    private readonly dbListCategory: IDbListCategoryRepository,
    private readonly dbAddCategory: IDbAddCategoryRepository,
    private readonly dbUpdateCategory: IDbUpdateCategoryRepository,
    private readonly dbDeleteCategory: IDbDeleteCategoryRepository,
  ) {}

  @Get()
  @ApiOkResponse({
    description: 'Returns Categorys.',
    status: HttpStatus.OK,
    type: CategoryModelDTO,
    isArray: true,
  })
  @ApiBearerAuth()
  async getAll(): Promise<CategoryModelDTO[]> {
    try {
      return await this.dbListCategory.getAll();
    } catch (error) {
      throw new HttpException(error.response, error.status);
    }
  }

  @Post()
  @ApiBody({
    type: AddCategoryDTO,
    description:
      'Create a new category',
  })
  @ApiOkResponse({
    description: 'Returns Categorys.',
    status: HttpStatus.OK,
    type: CategoryModelDTO,
  })
  @ApiConsumes('multipart/form-data')
  @ApiBearerAuth()
  async create(
    @Body() payload: AddCategoryDTO,
  ): Promise<CategoryModelDTO> {
    try {
      return await this.dbAddCategory.create(payload);
    } catch (error) {
      throw new HttpException(error.response, error.status);
    }
  }

  @Put(':id')
  @ApiBody({
    type: AddCategoryDTO,
  })
  @ApiOkResponse({
    description: 'Put success.',
    status: HttpStatus.OK,
    type: CategoryModelDTO,
  })
  @ApiBearerAuth()
  async update(
    @Param('id') id: string,
    @Body() payload: Omit<CategoryModelDTO, 'id'>,
  ): Promise<Category> {
    try {
      return await this.dbUpdateCategory.update(payload, id);
    } catch (error) {
      throw new HttpException(error.response, error.status);
    }
  }

  @Delete(':id')
  @ApiOkResponse({
    description: 'Delete success.',
    status: HttpStatus.OK,
  })
  @ApiBearerAuth()
  async delete(@Param('id') id: string): Promise<void> {
    try {
      return await this.dbDeleteCategory.delete(id);
    } catch (error) {
      throw new HttpException(error.response, error.status);
    }
  }
}
