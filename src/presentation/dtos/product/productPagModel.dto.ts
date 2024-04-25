import { ApiProperty } from '@nestjs/swagger';
import { Expose, plainToClass } from 'class-transformer';
import {
  IsNotEmpty,
  IsString,
  IsNumber,
  ValidateNested,
  IsBoolean,
} from 'class-validator';
import { CategoryModelDTO } from '../category/categoryModel.dto';
import { ProductModelDTO } from './productModel.dto';

export class ProductPagModelDTO {

  @ApiProperty({
    type: ProductModelDTO,
    example: ProductModelDTO,
  })
  @Expose()
  @ValidateNested()
  products: ProductModelDTO[];

  @ApiProperty({
    type: Number,
    example: 10,
    required: false,
  })
  @Expose()
  @IsNumber()
  number_of_pages: number;
  
  @ApiProperty({
    type: Number,
    example: 100,
    required: false,
  })
  @Expose()
  @IsNumber()
  number_of_products: number;

  static toDTO(payload: any): ProductPagModelDTO {
    return plainToClass(ProductPagModelDTO, payload, {
      excludeExtraneousValues: true,
    });
  }
}
