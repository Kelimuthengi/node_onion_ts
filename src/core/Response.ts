import { Response, Request } from "express";

enum ResponseStatus {
    success = 200,
    serverError = 500,
    failed = 400
}

export interface ResponseData {
    data:object,
    count:number
}

abstract class ResponseApi{
    constructor(
       protected responseCode: ResponseStatus,  
        ){
    }

    send(res: Response, response:ResponseData){
        return res.status(this.responseCode).json(response)
    }
}

export class SuccessResponse extends ResponseApi{
    constructor(message: string = 'Successfull'){
        super(ResponseStatus.success)
    }
   
    send(res: Response, response:ResponseData){
        return res.status(this.responseCode).json(response)
    }
}