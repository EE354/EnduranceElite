module.exports = {
    port : process.env.PORT || 3000,
    mongoURI : process.env.MONGO_URI,
    corsOptions : {
        origin: 'http://localhost:8081', // use your actual domain name (or localhost), using * is not recommended
        methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'HEAD', 'OPTIONS'],
        allowedHeaders: ['Content-Type', 'Origin', 'X-Requested-With', 'Accept', 'x-client-key', 'x-client-token', 'x-client-secret', 'Authorization'],
        credentials: true
    }

}


