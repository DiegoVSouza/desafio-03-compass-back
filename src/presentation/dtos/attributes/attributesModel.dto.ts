import { ApiProperty } from '@nestjs/swagger';
import { Expose, plainToInstance } from 'class-transformer';
import { IsNotEmpty, IsString, IsUUID } from 'class-validator';

export class AttributesModelDTO {
  @ApiProperty({
    type: String,
    example: '918ae891-7987-4810-91ae-5414bac70058',
    required: false,
  })
  @Expose()
  id: string;

  @ApiProperty({
    type: Number,
    example: 10,
    required: true,
  })
  @Expose()
  qtd: number;

  @ApiProperty({
    type: String,
    example: 'green',
    required: true,
  })
  @Expose()
  color: string;

  @ApiProperty({
    type: String,
    example: 'large',
    required: true,
  })
  @Expose()
  size: string;

  @ApiProperty({
    type: String,
    example: '3c5fab53-a565-4713-8985-7ae2a2ac103c',
    required: true,
  })
  @Expose()
  @IsNotEmpty()
  @IsUUID()
  product_id: string;


  @ApiProperty({
    example: 'link string',
    required: true,
    isArray: true,
  })
  @IsNotEmpty()
  @IsString({ each: true })
  image_link: string;

  static toDto(payload: AttributesModelDTO): AttributesModelDTO {
    return plainToInstance(AttributesModelDTO, payload, {
      excludeExtraneousValues: true,
    });
  }
}
