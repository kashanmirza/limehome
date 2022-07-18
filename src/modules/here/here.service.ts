import * as dotenv from 'dotenv';

import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';

import { generateHereURL } from '../../core/utils/generateHereURL';
import { hotelsListResponseParser } from '../../core/utils/hotelsListResponseParser';
import { HOTELS_QUERY_TYPE } from '../../core/constants';
dotenv.config();

@Injectable()
export class HereService {
  constructor(private readonly httpService: HttpService) {}

  async getHotelListByLatLong(latitude: number, longitude: number) {
    const response = await this.httpService
      .get(generateHereURL(latitude, longitude, HOTELS_QUERY_TYPE))
      .toPromise();
    return await hotelsListResponseParser(response.data.items);
  }
}
