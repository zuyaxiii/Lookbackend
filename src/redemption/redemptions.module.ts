import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { RedemptionsService } from './redemptions.service';
import { RedemptionsController } from './redemptions.controller';
import { Redemption, RedemptionSchema } from './schemas/redemption.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Redemption.name, schema: RedemptionSchema },
    ]),
  ],
  controllers: [RedemptionsController],
  providers: [RedemptionsService],
})
export class RedemptionsModule {}
