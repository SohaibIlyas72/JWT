import { Controller, Get, Post, UseGuards, Request,  } from "@nestjs/common";
import{AuthGuard}from '@nestjs/passport'
import { AuthService } from "./auth/auth.service";

import { LocalStategy } from "./auth/local.startegy";
import { CONSTANTS } from "./constants";
import { Roleguard } from "./role.guard";

@Controller('app')
export class AppController{
    constructor(private readonly authservice: AuthService){

    }
    @Post('/login')
    @UseGuards(AuthGuard("local"))
    login(@Request() req):string{
        return this.authservice.generateToken(req.user);
       
    }
    @Get('/android-d')
    @UseGuards(AuthGuard("jwt"),new Roleguard(CONSTANTS.ROLES.ANDROID_DEVELOPER))
    androiddata():string{
        return "this is android dat";
    }
    @Get('/web-d')
    @UseGuards(AuthGuard("jwt"),new Roleguard(CONSTANTS.ROLES.WEB_DEVELOPER))
    webdata():string{
        return "this is web dat";
    }
}