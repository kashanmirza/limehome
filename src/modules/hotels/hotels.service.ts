import { Injectable, Inject } from '@nestjs/common';

import { Hotels } from './hotels.entity';
import { HotelsDto } from './dto/hotels.dto';
import { HOTELS_REPOSITORY } from '../../core/constants';
import { HereService } from '../here/here.service';

@Injectable()
export class HotelsService {
  constructor(
    @Inject(HOTELS_REPOSITORY) private readonly hotelsRepository: typeof Hotels,
    private readonly hereService: HereService,
  ) {}

  async addHotels(lat: number, long: number): Promise<Hotels[]> {
    const hotelList: Hotels[] = await this.hereService.getHotelListByLatLong(
      lat,
      long,
    );
    return await this.hotelsRepository.bulkCreate<Hotels>(hotelList, {
      updateOnDuplicate: ['uniqueId'],
    });
  }

  async getAllHotels(lat: number, long: number): Promise<Hotels[]> {
    return await this.hotelsRepository.findAll<Hotels>({
      where: {
        latitude: lat,
        longitude: long,
      },
    });
  }
}
