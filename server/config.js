module.exports = {
    port : process.env.PORT || 3000,
    mongoURI : process.env.MONGO_URI || 'mongodb+srv://admin:zL1maxEtXmBVm5@cluster0.cd9r8fk.mongodb.net/',
    corsOptions : {
        "origin": "*",
        "methods": "GET,HEAD,PUT,PATCH,POST,DELETE",
        "preflightContinue": false,
        "optionsSuccessStatus": 204
    }
}


