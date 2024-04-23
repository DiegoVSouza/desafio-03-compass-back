import { ApiProperty } from '@nestjs/swagger';
import { Expose, plainToInstance } from 'class-transformer';
import { IsNotEmpty, IsString } from 'class-validator';

export class CategoryModelDTO {
  @ApiProperty({
    type: String,
    example: '7dc6f72d-f36b-4415-bb10-1f5eed5f6f02',
    required: false,
  })
  @Expose()
  id: string;

  @ApiProperty({
    type: String,
    example: 'Category Name',
    required: true,
  })
  @Expose()
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({
    type: String,
    example: 'Image Link',
    required: true,
  })
  @Expose()
  @IsString()
  @IsNotEmpty()
  image_link: string;

  @ApiProperty({
    type: String,
    example: 'Category Description',
    required: true,
  })
  @Expose()
  @IsString()
  @IsNotEmpty()
  description: string;

  static toDTO(payload: CategoryModelDTO): CategoryModelDTO {
    return plainToInstance(CategoryModelDTO, payload, {
      excludeExtraneousValues: true,
    });
  }
}
