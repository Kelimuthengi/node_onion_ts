import { Response, Request } from "express";

enum ResponseStatus {
    success = 200,
    serverError = 500,
    failed = 400
}

interface ResponseData {
    data:object,
    count:number
}

abstract class ResponseApi{
    constructor(
       protected responseCode: ResponseStatus, 
       protected message: string, 
        ){
    }

    send(res: Response, response:ResponseData){
        return res.status(this.responseCode).json(response)
    }
}