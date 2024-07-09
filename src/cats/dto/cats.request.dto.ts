import { IsEmail, IsNotEmpty } from 'class-validator';

export class CatRequestDto {
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsNotEmpty()
  password: string;

  @IsNotEmpty()
  name: string;
}
