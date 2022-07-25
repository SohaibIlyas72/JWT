import { Module } from '@nestjs/common';
import{PassportModule}from '@nestjs/passport'
import { UserModule } from 'src/user/user.module';
import { LocalStategy } from './local.startegy';
import{JwtModule} from '@nestjs/jwt'
import { AuthService } from './auth.service';
import { JwtStategy } from './jwt.strategy';
@Module({
  imports: [PassportModule,UserModule,JwtModule.register({
    secret:"key",
    signOptions:{
      expiresIn:"60s"
    }
  })],
  controllers: [],
  providers: [LocalStategy,AuthService,JwtStategy],
  exports:[AuthService]
})
export class AuthModule {}
