import { IsNotEmpty, IsString, IsUrl } from 'class-validator';

export class CreateRewardDto {
  @IsNotEmpty()
  @IsString()
  title: string;

  @IsNotEmpty()
  @IsString()
  description: string;

  @IsNotEmpty()
  @IsString()
  partner: string;

  @IsUrl()
  imageUrl: string;
}
