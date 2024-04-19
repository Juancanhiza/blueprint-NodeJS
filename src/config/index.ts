import dotenv from 'dotenv';

const envFound = dotenv.config();
if(envFound.error) {
    throw new Error('.env file not found!');
}

process.env.NODE_ENV = process.env.NODE_ENV || 'dev';

export default {
    db: {
        port: parseInt(process.env.DB_PORT || '5444', 10),
        host: process.env.DB_HOST || '127.0.0.1',
        name: process.env.DB_NAME || 'testdb',
        user: process.env.DB_USER || 'user',
        pass: process.env.DB_PASS || '12345',
    },
    app: {
        host: process.env.HOST || '127.0.0.1',
        port: parseInt(process.env.PORT || '3000', 10),
    }
}