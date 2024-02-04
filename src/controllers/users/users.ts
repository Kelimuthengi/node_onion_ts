
import { Request, Response } from "express"
import userentity from "../../Entity/userentity"
import { ResponseData, SuccessResponse } from "../../core/Response";
async function getusers(req:Request, res: Response):Promise<any>{

    let userData =  userentity.getAllUsers();
    let count = 10

    return new SuccessResponse('Users found!').send(res, {data: userData, count})
}

export default {
    getusers
}