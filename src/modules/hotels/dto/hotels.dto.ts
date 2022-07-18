import { IsNotEmpty } from 'class-validator';

export class HotelsDto {
  @IsNotEmpty()
  readonly title: string;

  @IsNotEmpty()
  readonly uniqueId: string;

  @IsNotEmpty()
  readonly address: string;

  @IsNotEmpty()
  readonly latitude: number;

  @IsNotEmpty()
  readonly longitude: number;

  @IsNotEmpty()
  readonly contact: number;

  @IsNotEmpty()
  readonly website: string;
}
