import { Controller, Get } from '@nestjs/common';
import { UserEntity } from './user.entity';

@Controller('user')
export class UserController {
  @Get('/')
  async test() {
    const user = new UserEntity();
    user.name = 'Abc';
    user.lastName = 'VVV';
    user.email = 'asdadasd';
    user.age = 12;
    user.id = '213123';

    await UserEntity.save(user);
  }
}
