import { Controller, Get, Param, Post, Body } from '@nestjs/common';
import { Reward } from './schemas/reward.schema';
import { RewardsService } from './rewards.service';

@Controller('rewards')
export class RewardsController {
  constructor(private readonly rewardsService: RewardsService) {}

  @Post()
  async create(
    @Body() data: Partial<Reward>,
  ): Promise<{ message: string; reward: Reward }> {
    const reward = await this.rewardsService.create(data);
    return {
      message: 'Reward created successfully',
      reward,
    };
  }

  @Get()
  getAll(): Promise<Reward[]> {
    return this.rewardsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Reward | null> {
    return this.rewardsService.findById(id);
  }
}
