import { Module } from '@nestjs/common';
import { HotelsService } from './hotels.service';
import { hotelsProviders } from './hotels.providers';


@Module({
  providers: [HotelsService]
})
export class HotelsModule {}
