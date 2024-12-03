import { Module } from '@nestjs/common';
import { ProfileService } from './services/profile.service';
import { LoggerService } from './services/logger.service';

@Module({
  providers: [ProfileService, LoggerService]
})
export class AppModule {}
