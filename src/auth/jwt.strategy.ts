import { Injectable } from '@nestjs/common';
import {PassportStrategy} from '@nestjs/passport'
import{Strategy,ExtractJwt} from 'passport-jwt'

@Injectable()
export class JwtStategy extends PassportStrategy(Strategy){
    constructor(){
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            ignoreExpiration: false,
            secretOrKey: "key",
          });


    }
    validate(payload:any):any{
    return payload   
     
    }

}