import User from "../database/models/User"
import { UserModel } from "../database/models/User"

async function getAllUsers():Promise<User | any>{

    try {
        // lean pull data in json strings and not parsed json
        return await UserModel.find({}).lean();

        // return {_id:}
    } catch (error) {
        throw new Error('Error in getting users')
    }
   
}

async function getUserById(id: string):Promise<User | any>{
    try{

    }catch(error){
        throw new Error('Error in getting user')
    }
}

export default {
    getAllUsers,
    getUserById
}