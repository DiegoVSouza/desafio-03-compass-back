import { ApiProperty } from '@nestjs/swagger';
import { Expose, plainToClass } from 'class-transformer';
import {
  IsNotEmpty,
  IsString,
  IsNumber,
  ValidateNested,
  IsBoolean,
  IsUUID,
} from 'class-validator';

export class ProductParamsDTO {
  @ApiProperty({
    type: String,
    example: 'Product ID',
    required: false,
  })
  @Expose()
  id: string;

  @ApiProperty({
    type: String,
    example: 'd2f6d8f8-8d0d-4110-bf63-af23fd441138',
    required: false,
  })
  @Expose()
  @IsUUID()
  category_id: string;

  @ApiProperty({
    type: String,
    example: 'Product Name',
    required: false,
  })
  @Expose()
  @IsString()
  name: string;

  @ApiProperty({
    type: Number,
    example: 100,
    required: false,
  })
  @Expose()
  @IsNumber()
  price: number;

  @ApiProperty({
    type: Number,
    example: 1,
    required: false,
  })
  @Expose()
  @IsNumber()
  page: number;

  @ApiProperty({
    type: Number,
    example: 8,
    required: false,
  })
  @Expose()
  @IsNumber()
  limit: number;

  @ApiProperty({
    type: Boolean,
    example: true,
    required: false,
  })
  @Expose()
  @IsBoolean()
  discount: boolean = false;

  @ApiProperty({
    type: Boolean,
    example: true,
    required: false,
  })
  @Expose()
  @IsBoolean()
  is_new: boolean = false;

  @ApiProperty({
    type: String,
    example: '00001',
    required: false,
  })
  @Expose()
  @IsString()
  sku: string;

  @ApiProperty({
    type: String,
    example: '00001',
    required: false,
  })
  @Expose()
  @IsString()
  sorted_by: string;


  static toDTO(payload: any): ProductParamsDTO {
    return plainToClass(ProductParamsDTO, payload, {
      excludeExtraneousValues: true,
    });
  }
}
