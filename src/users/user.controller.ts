import { UserDto } from './user.dto';
import { Body, Controller, Param, Patch } from '@nestjs/common';

@Controller('user')
export class UserController {
  @Patch(':id')
  async updateUser(
    @Param('id') id: number,
    @Body() userData: UserDto,
  ): Promise<void> {
    console.log(`User with id ${id}, updated with data:\n ${JSON.stringify(userData)}`);
  }
}
