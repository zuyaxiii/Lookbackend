import {
  Controller,
  Post,
  Body,
  Get,
  Query,
  BadRequestException,
} from '@nestjs/common';
import { RedemptionsService } from './redemptions.service';
import { Redemption } from './schemas/redemption.schema';

@Controller('redemptions')
export class RedemptionsController {
  constructor(private readonly redemptionsService: RedemptionsService) {}

  @Post()
  redeem(@Body() body: { sessionId: string; rewardId: string }) {
    const { sessionId, rewardId } = body;
    if (!sessionId || !rewardId) {
      throw new BadRequestException('Missing sessionId or rewardId');
    }
    return this.redemptionsService.redeem(sessionId, rewardId);
  }

  @Get()
  async getUserRedemptions(
    @Query('sessionId') sessionId: string,
  ): Promise<Redemption[]> {
    if (!sessionId) {
      throw new BadRequestException('Missing sessionId');
    }

    const redemptions =
      await this.redemptionsService.getRedemptionsBySession(sessionId);
    return redemptions;
  }
}
