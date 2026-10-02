import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { Connection } from 'mongoose';
import configurtion from './config/configurtion';
import { AuthModule } from './modules/auth/auth.module';
import { UserModule } from './modules/users/user.module';
import { AddressModule } from './modules/address/address.module';
import { CategoryModule } from './modules/category/category.module';
import { ProductModule } from './modules/product/product.module';
import { CartModule } from './modules/cart/cart.module';
import { OrderModule } from './modules/order/order.module';
import { DashBoardModule } from './modules/dashboard/dashboard.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true, load: [configurtion] }),
    MongooseModule.forRootAsync({
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        uri: configService.get('database').url,
        onConnectionCreate: (connection: Connection) => {
          connection.on('connected', () => console.log('connected'));
          return connection;
        },
      }),
    }),
    AuthModule,
    UserModule,
    AddressModule,
    CategoryModule,
    ProductModule,
    CartModule,
    OrderModule,
    DashBoardModule,
  ],
  controllers: [],
  providers: [AppService],
})
export class AppModule {}
