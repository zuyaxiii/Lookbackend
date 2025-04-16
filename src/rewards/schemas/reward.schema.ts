import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type RewardDocument = Reward & Document;

@Schema({ timestamps: true })
export class Reward {
  @Prop({ required: true })
  title: string;

  @Prop()
  description: string;

  @Prop({ required: true })
  pointsRequired: number;

  @Prop()
  imageUrl: string;
}

export const RewardSchema = SchemaFactory.createForClass(Reward);
