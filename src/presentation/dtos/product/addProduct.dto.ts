import { Expose, plainToInstance } from 'class-transformer';
import {
  IsNotEmpty,
  IsString,
  IsUUID,
  IsNumber,
  IsArray,
  ValidateNested,
  IsBoolean,
} from 'class-validator';

import { ApiProperty } from '@nestjs/swagger';
import { AddAttributesDTO } from '../attributes/addAttributes.dto';

export class AddProductDTO {

  @ApiProperty({
    type: String,
    example: 'd2f6d8f8-8d0d-4110-bf63-af23fd441138',
    required: true,
  })
  @Expose()
  @IsNotEmpty()
  @IsUUID()
  category_id: string;

  @ApiProperty({
    type: String,
    example: 'Product name.',
    required: true,
  })
  @Expose()
  @IsNotEmpty()
  @IsString()
  name: string;

  @ApiProperty({
    type: String,
    example: 'Product Description.',
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
    example: 50,
    required: true,
  })
  @Expose()
  @IsNotEmpty()
  @IsNumber()
  price: number;

  @ApiProperty({
    type: Number,
    example: 45,
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

  @ApiProperty({
    type: Array<AddAttributesDTO>,
    example: Array<AddAttributesDTO>,
    required: true,
  })
  @Expose()
  @IsNotEmpty()
  @ValidateNested()
  attributes: Omit<AddAttributesDTO,'product_id'>[];
  

  static toDTO(payload: AddProductDTO): AddProductDTO {
    return plainToInstance(AddProductDTO, payload, {
      excludeExtraneousValues: true,
    });
  }
}
