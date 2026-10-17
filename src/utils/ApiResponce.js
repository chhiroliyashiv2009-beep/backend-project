class ApiResponce{
    constructor(statusCode,data,message="Success"){
        this.statusCode=statusCode
        this.data=data
        this.message=message
        this.successs=statusCode<400 //100-199 =Informational reponce  200-299= Successful res 300-399= Redirection 400-499=client error 500-599=server error
         
    }
}

export {ApiResponce}