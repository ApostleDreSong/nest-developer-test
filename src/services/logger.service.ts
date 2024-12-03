import { Injectable, forwardRef, Inject } from '@nestjs/common';
import { UserService } from './user.service';

@Injectable()
export class LoggerService {
  constructor(
    @Inject(forwardRef(() => UserService)) private userService: UserService,
  ) {}

  logMessage(): string {
    return 'LoggerService logging: ' + this.userService.getUser();
  }
}
