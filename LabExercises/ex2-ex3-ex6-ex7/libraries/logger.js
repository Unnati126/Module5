//to log every call with ID and result to console

function logMessage(id, operation, result) {
    console.log(`[LOG] ID: ${id} | Operation: ${operation} | Result: ${result}`);
}

module.exports = { logMessage };


//module.exports = logger;