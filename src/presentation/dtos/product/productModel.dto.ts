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

export class ProductModelDTO {
  @ApiProperty({
    type: String,
    example: 'Product ID',
    required: false,
  })
  @Expose()
  id: string;

  @ApiProperty({
    type: CategoryModelDTO,
    example: CategoryModelDTO,
    required: true,
  })
  @Expose()
  @IsNotEmpty()
  @ValidateNested()
  category: CategoryModelDTO;

  @ApiProperty({
    type: String,
    example: 'Product Name',
    required: true,
  })
  @Expose()
  @IsNotEmpty()
  @IsString()
  name: string;

  @ApiProperty({
    type: String,
    example: 'Product Description',
    required: true,
  })
  @Expose()
  @IsNotEmpty()
  @IsString()
  description: string;

  @ApiProperty({
    type: String,
    example: 'Large Product Description',
    required: true,
  })
  @Expose()
  @IsNotEmpty()
  @IsString()
  large_description: string;

  @ApiProperty({
    type: Number,
    example: 100,
    required: true,
  })
  @Expose()
  @IsNotEmpty()
  @IsNumber()
  price: number;

  @ApiProperty({
    type: Number,
    example: 90,
    required: true,
  })
  @Expose()
  @IsNotEmpty()
  @IsNumber()
  discount_price: number;

  @ApiProperty({
    type: Number,
    example: 10,
    required: true,
  })
  @Expose()
  @IsNotEmpty()
  @IsNumber()
  discount_percent: number;

  @ApiProperty({
    type: String,
    example: '00001',
    required: true,
  })
  @Expose()
  @IsNotEmpty()
  @IsString()
  sku: string;

  @ApiProperty({
    type: Boolean,
    example: true,
    required: true,
  })
  @Expose()
  @IsBoolean()
  is_new: boolean = false;


  static toDTO(payload: any): ProductModelDTO {
    return plainToClass(ProductModelDTO, payload, {
      excludeExtraneousValues: true,
    });
  }
}
