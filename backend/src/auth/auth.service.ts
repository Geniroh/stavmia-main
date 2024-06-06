import { Injectable, BadRequestException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from 'src/schemas/user.schema';
import { CreateUserDto } from 'src/dto/user.dto';

@Injectable()
export class AuthService {
  constructor(@InjectModel(User.name) private userModel: Model<User>) {}

  async validateUser(userDetails: CreateUserDto): Promise<User> {
    console.log(userDetails);
    const { email } = userDetails;

    const existingUser = await this.userModel.findOne({ email }).exec();
    if (existingUser) return existingUser;
    // if (existingUser) {
    //   throw new BadRequestException('Email already exists');
    // }
    const newUser = new this.userModel(userDetails);
    return newUser.save();
  }
}
