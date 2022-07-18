import * as dotenv from 'dotenv';

import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

import { ValidateInputPipe } from './core/pipes/validate.pipe';

dotenv.config();

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });
  const port:number = +process.env.APP_PORT | 5000;
  app.setGlobalPrefix('api/v1');
  app.useGlobalPipes(new ValidateInputPipe());
  await app.listen(port);
}
bootstrap();
