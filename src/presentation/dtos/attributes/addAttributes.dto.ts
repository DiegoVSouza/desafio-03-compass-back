import { ApiProperty } from "@nestjs/swagger";
import { Expose, plainToInstance } from "class-transformer";
import { IsNotEmpty, IsString, IsUUID } from "class-validator";

export class AddAttributesDTO {
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
    example: 'medium',
    required: true,
  })
  @Expose()
  size: string;

  @ApiProperty({
    type: String,
    example: '2f7353e6-cd32-499b-b073-7df0a428bfe4',
    required: true,
  })
  @Expose()
  @IsNotEmpty()
  @IsUUID()
  product_id: string;

  @ApiProperty({
    type: 'string',
    description: 'Image link',
  })
  @IsNotEmpty()
  @IsString()
  @Expose()
  image_link: string;

  static toDto(payload: AddAttributesDTO): AddAttributesDTO {
    return plainToInstance(AddAttributesDTO, payload, {
      excludeExtraneousValues: true,
    });
  }
}
