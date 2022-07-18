import { Injectable, Inject, HttpException, HttpStatus } from '@nestjs/common';

import { Bookings } from './bookings.entity';
import { BookingsDto } from './dto/bookings.dto';
import { BOOKINGS_REPOSITORY } from '../../core/constants';
import { HOTELS_BOOKING_LIMIT_MESSAGE } from '../../core/constants/Error';

@Injectable()
export class BookingsService {
  constructor(
    @Inject(BOOKINGS_REPOSITORY)
    private readonly bookingsRepository: typeof Bookings,
  ) {}

  async createBooking(booking: BookingsDto): Promise<Bookings | string> {
    const bookingCount = await this.getBookingsByHotelId(booking.hotelId);
    if (bookingCount.count <= 10) {
      return Promise.resolve(HOTELS_BOOKING_LIMIT_MESSAGE);
    }
    return await this.bookingsRepository.create<Bookings>(booking);
  }

  async getBookingsByHotelId(
    hotelId: number,
  ): Promise<{ rows: Bookings[]; count: number }> {
    return await this.bookingsRepository.findAndCountAll<Bookings>({
      where: { hotelId },
    });
  }
}
