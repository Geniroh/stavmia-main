import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { User } from './User.schema';

@Schema({ collection: 'accounts' })
export class Account extends Document {
  @Prop({
    type: String,
    required: true,
    unique: true,
    default: () => new Types.ObjectId(),
  })
  slug: string;

  @Prop({ type: Types.ObjectId, ref: 'User', required: true })
  userId: string;

  @Prop({ type: String, required: true })
  type: string;

  @Prop({ type: String, required: true })
  provider: string;

  @Prop({ type: String, required: true })
  providerAccountId: string;

  @Prop({ type: String })
  refresh_token?: string;

  @Prop({ type: String })
  access_token?: string;

  @Prop({ type: Number })
  expires_at?: number;

  @Prop({ type: String })
  token_type?: string;

  @Prop({ type: String })
  scope?: string;

  @Prop({ type: String })
  id_token?: string;

  @Prop({ type: String })
  session_state?: string;
}

export const AccountSchema = SchemaFactory.createForClass(Account);
AccountSchema.index({ provider: 1, providerAccountId: 1 }, { unique: true });
