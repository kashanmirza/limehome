import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HotelsModule } from './modules/hotels/hotels.module';
import { BookingsModule } from './modules/bookings/bookings.module';

@Module({
  imports: [HotelsModule, BookingsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
