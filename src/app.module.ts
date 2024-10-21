import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService],
})
// NestJS needs it like so
// eslint-disable-next-line @typescript-eslint/no-extraneous-class
export class AppModule {}
