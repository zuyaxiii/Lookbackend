import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Reward, RewardDocument } from './schemas/reward.schema';

@Injectable()
export class RewardsService {
  constructor(
    @InjectModel(Reward.name) private rewardModel: Model<RewardDocument>,
  ) {}

  async findAll(): Promise<Reward[]> {
    return this.rewardModel.find().exec();
  }

  async findById(id: string): Promise<Reward | null> {
    return this.rewardModel.findById(id).exec();
  }

  async create(data: Partial<Reward>): Promise<Reward> {
    return this.rewardModel.create(data);
  }
}
