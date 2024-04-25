import { ApiProperty } from '@nestjs/swagger';
import { Expose, plainToClass } from 'class-transformer';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CategoryParamsDTO {
  @ApiProperty({
    type: String,
    example: '7dc6f72d-f36b-4415-bb10-1f5eed5f6f02',
    required: false,
  })
  @Expose()
  id: string;

  @ApiProperty({
    type: Number,
    example: 8,
    required: false,
  })
  @Expose()
  @IsNumber()
  limit: number;

  static toDTO(payload: CategoryParamsDTO): CategoryParamsDTO {
    return plainToClass(CategoryParamsDTO, payload, {
      excludeExtraneousValues: true,
    });
  }
}
