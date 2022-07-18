import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { HotelsService } from './hotels.service';
import { hotelsProviders } from './hotels.providers';
import { HotelsController } from './hotels.controller';
import { HereService } from '../here/here.service';

@Module({
  imports: [HttpModule],
  providers: [HotelsService, ...hotelsProviders, HereService],
  exports: [HotelsService],
  controllers: [HotelsController],
})
export class HotelsModule {}
