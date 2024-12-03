import { Injectable } from '@nestjs/common';
import { UserService } from './user.service';

@Injectable()
export class ProfileService {
  constructor(private userService: UserService) {}

  getProfile(): string {
    return `Profile with ${this.userService.getUser()}`;
  }
}
