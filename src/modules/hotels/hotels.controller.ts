import { Controller, Get, Post, Query, Req } from '@nestjs/common';

import { HotelsService } from './hotels.service';

@Controller('hotels')
export class HotelsController {
  constructor(private readonly hotelsService: HotelsService) {}

  @Get()
  async findAll(@Query('lat') lat: number, @Query('long') long: number) {
    return await this.hotelsService.getAllHotels(lat, long);
  }

  @Post('addHotels')
  async addHotels(@Req() req: any) {
    const { lat, long } = req.body;
    return await this.hotelsService.addHotels(lat, long);
  }
}
