
import { Request, Response } from "express"
import userentity from "../../Entity/userentity"
async function getusers(req:Request, res: Response):Promise<any>{

    return userentity.getAllUsers()
}

export default {
    getusers
}