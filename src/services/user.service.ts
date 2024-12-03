import { Injectable, forwardRef, Inject } from '@nestjs/common';
import { LoggerService } from './logger.service';

@Injectable()
export class UserService {
  constructor(
    @Inject(forwardRef(() => LoggerService)) private loggerService: LoggerService,
  ) {}

  getUser(): string {
    return 'User fetched!';
  }
}
