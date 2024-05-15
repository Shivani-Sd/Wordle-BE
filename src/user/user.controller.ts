import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { v4 as uuid, V4Options } from 'uuid';
import { UpdateValuesMissingError } from 'typeorm';

@Controller('user')
export class UserController {

    constructor(private userService: UserService) { }

    @Get()
    getAllUsers() {
        return this.userService.getAllUsers();
    }

    @Get('/:id')
    getUser(@Param('id') id: string) {
        return this.userService.getUser(id);
    }

    @Post()
    createNewUser(@Body('name') name: string, @Body('email') email: string, @Body('numberOfGamesPlayed') numberOfGamesPlayed: number, @Body('winPercentage') winPercentage: number) {

        return this.userService.createNewUser(name, email, numberOfGamesPlayed, winPercentage);
    }

    @Delete('/:id')
    deleteUser(@Param('id') id: string) {

        return this.userService.deleteUser(id);
    }

    @Patch('/:id')
    editUser(@Param('id') id:string,@Body('name') name:string,@Body('email') email:string,@Body('numberOfGamesPlayed') numberOfGamesPlayed:number, @Body('winPercentage') winPercentage:number) {
        return this.userService.editUser(id,name,email,numberOfGamesPlayed,winPercentage);
    }


}
