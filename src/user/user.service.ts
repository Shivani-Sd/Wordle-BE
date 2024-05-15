import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';

@Injectable()
export class UserService {

    constructor(
        @InjectRepository(User)
        private userRepository:Repository<User>
    ){}

    async getAllUsers()
    {
        return this.userRepository.find();
    }

    async createNewUser(name:string,email:string,numberOfGamesPlayed:number,winPercentage:number)
    {
        const newUser= this.userRepository.create({name,email,numberOfGamesPlayed,winPercentage});
        this.userRepository.save(newUser);
        return newUser;
    }

    async getUser(id:string)
    {
        const thisUser=await this.userRepository.findOne({where:{id}});
        const required={
            name:thisUser.name,
            numberOfGamesPlayed:thisUser.numberOfGamesPlayed,
            winPercentage:thisUser.winPercentage            
        }
        return required;
    }

    async deleteUser(id:string){
        await this.userRepository.delete(id);
    }

    async editUser(id:string,name:string,email:string,numberOfGamesPlayed:number,winPercentage:number){
        const user=await this.userRepository.findOne({where:{id}})
        user.name=name;
        user.email=email;
        user.numberOfGamesPlayed=numberOfGamesPlayed;
        user.winPercentage=winPercentage;
        await this.userRepository.save(user);
    }

}
