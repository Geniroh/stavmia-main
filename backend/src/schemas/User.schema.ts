import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { Account } from './Account.schema';
import { UserRole } from '../enum';

@Schema({ collection: 'users' })
export class User extends Document {
  @Prop({
    type: String,
    required: true,
    unique: true,
    default: () => new Types.ObjectId(),
  })
  slug: string;

  @Prop({ type: String })
  name?: string;

  @Prop({ type: String, unique: true })
  email?: string;

  @Prop({ type: Date })
  emailVerified?: Date;

  @Prop({ type: String })
  image?: string;

  @Prop({ type: String })
  password?: string;

  @Prop({ type: String, enum: UserRole, default: UserRole.USER })
  role: UserRole;

  @Prop({ type: [{ type: Types.ObjectId, ref: 'Account' }] })
  accounts: Account[];
}

export const UserSchema = SchemaFactory.createForClass(User);
