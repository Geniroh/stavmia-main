import { IsEmail, IsNotEmpty } from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty()
  @IsEmail()
  email: string;

  emailVerified?: Date;
  image?: string;
  name?: string;
  role?: string;
  password?: string;
}
