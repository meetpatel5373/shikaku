function ResponseMessage(key) {

    var parameters = {
        "param_1": "email",
    }

    var successMessages = {
        "register": "Registered Successfully",
        "login": "Login Successful",
    }

    var obj = {
        "success_message": successMessages,
        "ex_000": {
            code: "ex_000",
            fail_msg: "Invalid Details",
            message: "exception",
            parameters: parameters,
            location: "body"
        },
        

    }

    return obj[key]
}

module.exports = {
    ResponseMessage
}