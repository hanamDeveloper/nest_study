import { ApiProperty } from '@nestjs/swagger';

export class ReadOnlyCatDto {
  @ApiProperty({
    example: 'id',
    description: '아이디',
  })
  id: string;

  @ApiProperty({
    example: 'zmf1118@gmail.com',
    description: '이메일',
  })
  email: string;

  @ApiProperty({
    example: 'amamov',
    description: '이름',
  })
  name: string;
}
