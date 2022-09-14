import { Injectable } from '@nestjs/common';
import { UserService } from '../user/user.service';
import { compare } from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(private userService: UserService) {}

  async validateUser(username: string, pass: string): Promise<any> {
    const user = await this.userService.getByEmail(username);
    const passwordMatch = await compare(pass, user.password);
    if (passwordMatch) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }
}
