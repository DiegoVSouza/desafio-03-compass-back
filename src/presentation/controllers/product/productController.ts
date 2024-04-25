import { Product } from '@/core/domain/models/product.entity';
import { IDbAddProductRepository } from '@/core/domain/protocols/db/product/addProductRepository';
import { IDbDeleteProductRepository } from '@/core/domain/protocols/db/product/deleteProductRepository';
import { IDbListProductPagRepository } from '@/core/domain/protocols/db/product/listProductPagRespository';
import { IDbListProductRepository } from '@/core/domain/protocols/db/product/listProductRespository';
import { IDbUpdateProductRepository } from '@/core/domain/protocols/db/product/updateProductRepository';
import { AddProductDTO } from '@/presentation/DTOs/product/addProduct.DTO';
import { ProductModelDTO } from '@/presentation/dtos/product/productModel.dto';
import { ProductPagModelDTO } from '@/presentation/dtos/product/productPagModel.dto';
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
  Query,
} from '@nestjs/common';
import {
  ApiBody,
  ApiConsumes,
  ApiCreatedResponse,
  ApiOkResponse,
  ApiTags,
} from '@nestjs/swagger';


@ApiTags('Product')
@Controller('/product')
export class ProductController {
  constructor(
    private readonly dbAddProduct: IDbAddProductRepository,
    private readonly dbListProduct: IDbListProductRepository,
    private readonly dbListPagProduct: IDbListProductPagRepository,
    private readonly dbUpdateProduct: IDbUpdateProductRepository,
    private readonly dbDeleteProduct: IDbDeleteProductRepository,
  ) { }

  @Get()
  @ApiOkResponse({
    description: 'Returns Products.',
    status: HttpStatus.OK,
    type: ProductModelDTO,
    isArray: true,
  })
  // @ApiBearerAuth()
  async getAll(): Promise<ProductModelDTO[]> {
    try {
      return await this.dbListProduct.getAll();
    } catch (error) {
      throw new HttpException(error.response, error.status);
    }
  }

  @Get('/pag')
  @ApiOkResponse({
    description: 'Returns Products pagination.',
    status: HttpStatus.OK,
    type: ProductPagModelDTO,
    isArray: true,
  })
  // @ApiBearerAuth()
  async getAllPag(@Query() params): Promise<ProductPagModelDTO> {
    try {
      console.log(params)
      return await this.dbListPagProduct.getAllPag(params);
    } catch (error) {
      throw new HttpException(error.response, error.status);
    }
  }


  @Post()
  @ApiBody({
    description: 'Create Product',
    type: AddProductDTO,
  })
  @ApiCreatedResponse({ type: AddProductDTO })
  @ApiOkResponse({
    description: 'Returns Product',
    status: HttpStatus.OK,
    type: ProductModelDTO,
  })
  // @ApiBearerAuth()
  async create(
    @Body() payload: AddProductDTO,
  ): Promise<Product> {
    try {
      return await this.dbAddProduct.create(payload);
    } catch (error) {
      throw new HttpException(error.response, error.status);
    }
  }


  @Put(':id')
  @ApiBody({
    type: AddProductDTO,
  })
  @ApiOkResponse({
    description: 'Update Product',
    status: HttpStatus.OK,
    type: ProductModelDTO,
  })
  // @ApiBearerAuth()
  async update(
    @Param('id') id: string,
    @Body() payload: AddProductDTO,
  ): Promise<Product> {
    try {
      return await this.dbUpdateProduct.update(payload, id);
    } catch (error) {
      throw new HttpException(error.response, error.status);
    }
  }

  @Delete(':id')
  @ApiOkResponse({
    description: 'Delete Product',
    status: HttpStatus.OK,
  })
  // @ApiBearerAuth()
  async delete(@Param('id') id: string): Promise<void> {
    try {
      return await this.dbDeleteProduct.delete(id);
    } catch (error) {
      throw new HttpException(error.response, error.status);
    }
  }
}
