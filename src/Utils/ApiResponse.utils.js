class ApiResPonse{
    constructor(statuscode,data,message='Success'){
        this.statuscode = statuscode
        this.data = data
        this.message = message
    }
}

export {ApiResPonse}