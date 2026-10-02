import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { AddressService } from './address.service';
import { CurrentUser } from '../../common/decorators/User/user.decorators';
import { AddressDto } from './dto/address.dto';
import { UpdateAddressDto } from './dto/update-address.dto';

@Controller('address')
export class addressController {
  constructor(private readonly addressService: AddressService) {}

  @Post('create')
  async addAddress(
    @CurrentUser() user: any,
    @Body() createAddressDto: AddressDto,
  ) {
    const address = await this.addressService.AddAddress(
      user?.sub,
      createAddressDto,
    );
    return {
      message: 'create Address successfully',
      data: address,
    };
  }

  @Put('update/:addressId')
  async updateAddress(
    @CurrentUser() user: any,
    @Body() updateAddressDto: UpdateAddressDto,
    @Param('addressId') addressId: string,
  ) {
    await this.addressService.updateAddress(
      user.sub,
      addressId,
      updateAddressDto,
    );
    return {
      message: 'updated successfully',
    };
  }


  @Delete('delete/:addressId')
  async deleteAddress(
    @CurrentUser() user: any,
    @Param('addressId') addressId: string,
  ) {
    await this.addressService.deleteAddress(user.sub, addressId);
    return {
      message: 'deleted successfully',
    };
  }
  
}
