import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty } from 'class-validator';

export class CatRequestDto {
  @ApiProperty({
    example: 'amamov@kakao.com',
    description: '이메일',
    required: true,
  })
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @ApiProperty({
    example: 'qwer1234!',
    description: '비밀번호',
    required: true,
  })
  @IsNotEmpty()
  password: string;

  @ApiProperty({
    example: 'amamov',
    description: '이름',
    required: true,
  })
  @IsNotEmpty()
  name: string;
}
