class ApiError extends Error {
    constructor(
        statusCode,
        message = "Something went wrong",
        errors = [],
        data = null,  // Allow data to be passed in case there's extra info to be included with the error
        stack = ""
    ) {
        super(message);  // Call the parent class constructor with the message

        this.statusCode = statusCode;
        this.success = false;
        this.errors = errors;
        this.data = data; // Set the data here (it could be null or any relevant info)

        if (stack) {
            this.stack = stack; // If a custom stack is provided, use it
        } else {
            Error.captureStackTrace(this, this.constructor); // Otherwise, generate the stack trace
        }
    }
}

export { ApiError };
