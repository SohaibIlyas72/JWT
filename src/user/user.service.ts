import { Injectable } from "@nestjs/common";
import { CONSTANTS } from "src/constants";
import { User } from "./user.entity";
import{}from "constants"

@Injectable()
export class UserService{
public users:User[]=[
{
    username:"user1",
    password:"student1",
    email:"user1@gmail.com",
    age:17,
    role: CONSTANTS.ROLES.ANDROID_DEVELOPER
},
{
    username:"user2",
    password:"student2",
    email:"user2@gmail.com",
    age:18,
    role: CONSTANTS.ROLES.WEB_DEVELOPER
},
{
    username:"user3",
    password:"student2",
    email:"user3@gmail.com",
    age:19,
    role: CONSTANTS.ROLES.ANDROID_DEVELOPER
}
]
    getUserByUsername(userName:string):User{
        return this.users.find((user:User)=>user.username== userName );
    }  



}