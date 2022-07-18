import { Controller, Get, Post, Body, Query } from '@nestjs/common';

import { BookingsService } from './bookings.service';
import { BookingsDto } from './dto/bookings.dto';

@Controller('bookings')
export class BookingsController {
  constructor(private readonly bookingsService: BookingsService) {}

  @Get('')
  async findAll(@Query('hotelId') hotelId: number) {
    return await this.bookingsService.getBookingsByHotelId(hotelId);
  }

  @Post('addBooking')
  async addHotels(@Body() booking: BookingsDto) {
    return await this.bookingsService.createBooking(booking);
  }
}
