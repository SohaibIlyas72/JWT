import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AuthModule } from './auth/auth.module';
import { AuthService } from './auth/auth.service';
import { UserModule } from './user/user.module';

@Module({
  imports: [UserModule,AuthModule],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
