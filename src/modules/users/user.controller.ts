import { Body, Controller, Get, Put } from '@nestjs/common';
import { UsersService } from './users.service';
import { CurrentUser } from '../../common/decorators/User/user.decorators';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UsersService) {}

  @Get('profile')
  async getProfile(@CurrentUser() user: any) {
    const Profile = await this.userService.getProfile(user?.sub);
    return {
      message: 'succcss',
      data: Profile,
    };
  }
  @Put('update')
  async updateAcount(
    @CurrentUser() user: any,
    @Body() updateuserDto: UpdateUserDto,
  ) {
     await this.userService.updateUser(user?.sub, updateuserDto);
    return {
      message: 'updated user successfully',
    };
  }
}
