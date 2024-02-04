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
    constructor(responseCode: ResponseStatus, message: string, ){
      
    }

    // prepare response in case you want to add somehting to the headers:

  

    send(res: Response, response:ResponseData){
        return res.status(this.responseCode).json(response)
    }
}