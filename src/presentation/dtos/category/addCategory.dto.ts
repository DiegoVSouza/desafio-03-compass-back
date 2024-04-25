import { ApiProperty } from '@nestjs/swagger';
import { Expose, plainToClass } from 'class-transformer';
import { IsNotEmpty, IsString } from 'class-validator';

export class AddCategoryDTO {
  @ApiProperty({
    type: String,
    example: 'Category Name',
    required: true,
  })
  @Expose()
  @IsNotEmpty()
  @IsString()
  name: string;

  @ApiProperty({
    type: 'string',
    description: 'Image link',
  })
  @IsNotEmpty()
  @IsString()
  @Expose()
  image_link: string;

  @ApiProperty({
    type: String,
    example: 'Category Description',
    required: true,
  })
  @Expose()
  @IsNotEmpty()
  @IsString()
  description: string;

  static toDTO(payload: AddCategoryDTO): AddCategoryDTO {
    return plainToClass(AddCategoryDTO, payload, {
      excludeExtraneousValues: true,
    });
  }
}
