module.exports = {
    production: {
        "username": process.env.DB_USERNAME || "root",
        "password": process.env.DB_PASSWORD || "123456",
        "database": process.env.DB_DATABASE || "restoraner",
        "host": process.env.DB_HOST || "127.0.0.1",
        "dialect": process.env.DB_CONNECTION || "mysql"
    },
    development: {
        "username": process.env.DB_USERNAME || "root",
        "password": process.env.DB_PASSWORD || "123456",
        "database": process.env.DB_DATABASE || "restoraner",
        "host": process.env.DB_HOST || "127.0.0.1",
        "dialect": process.env.DB_CONNECTION || "mysql"
    },
    test: {
        "username": process.env.DB_USERNAME || "root",
        "password": process.env.DB_PASSWORD || "123456",
        "database": process.env.DB_DATABASE || "restoraner",
        "host": process.env.DB_HOST || "127.0.0.1",
        "dialect": process.env.DB_CONNECTION || "mysql"
    }
}