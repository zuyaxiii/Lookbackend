import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Schema as MongooseSchema } from 'mongoose';
import { Reward } from 'src/rewards/schemas/reward.schema';

export type RedemptionDocument = Redemption & Document;

@Schema({ timestamps: true })
export class Redemption {
  @Prop({ required: true })
  sessionId: string;

  @Prop({ type: MongooseSchema.Types.ObjectId, ref: 'Reward', required: true })
  rewardId: Reward;
}

export const RedemptionSchema = SchemaFactory.createForClass(Redemption);
