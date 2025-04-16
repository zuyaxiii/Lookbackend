import { Injectable, BadRequestException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Redemption, RedemptionDocument } from './schemas/redemption.schema';

@Injectable()
export class RedemptionsService {
  constructor(
    @InjectModel(Redemption.name)
    private redemptionModel: Model<RedemptionDocument>,
  ) {}

  async redeem(sessionId: string, rewardId: string): Promise<Redemption> {
    const alreadyRedeemed = await this.redemptionModel.findOne({
      sessionId,
      rewardId,
    });
    if (alreadyRedeemed) {
      throw new BadRequestException('Already redeemed this reward.');
    }

    const redemption = new this.redemptionModel({ sessionId, rewardId });
    return redemption.save();
  }

  async getRedemptionsBySession(sessionId: string): Promise<Redemption[]> {
    return this.redemptionModel.find({ sessionId }).populate('rewardId').exec();
  }
}
