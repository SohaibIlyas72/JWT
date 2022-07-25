import { CanActivate, ExecutionContext } from "@nestjs/common";
import { userInfo } from "os";
import { Observable } from "rxjs";

 

export class Roleguard implements CanActivate{
    private rolepassed: string;
    constructor(role:string){
        this.rolepassed=role;
    }
    canActivate(context: ExecutionContext): boolean{
        const ctx =context.switchToHttp();
        const request:any = ctx.getRequest<Request>();

        return this.rolepassed==request.user.role;
    }
}