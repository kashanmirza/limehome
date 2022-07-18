import { Module } from '@nestjs/common';
import { BookingsService } from './bookings.service';
import { bookingsProviders } from './bookings.providers';
import { BookingsController } from './bookings.controller';

@Module({
  providers: [BookingsService, ...bookingsProviders],
  exports: [BookingsService],
  controllers: [BookingsController],
})
export class BookingsModule {}
