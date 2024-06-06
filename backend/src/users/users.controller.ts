import { Body, Controller, Post } from '@nestjs/common';
import { CreateUserDto } from 'src/dto/User.dto';
import { UsersService } from 'src/users/users.service';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Post()
  createUser(@Body() createUserDto: CreateUserDto) {
    console.log(createUserDto);
  }
}
