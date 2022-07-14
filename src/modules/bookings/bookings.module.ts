import { Module } from '@nestjs/common';
import { BookingsService } from './bookings.service';
import { bookingsProviders } from './bookings.providers';

@Module({
  providers: [BookingsService]
})
export class BookingsModule {}
