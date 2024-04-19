import 'reflect-metadata';
import express from 'express';

const server = async () => {
    const app = express()
    try {
        const loaders = await import('./loaders')
        await loaders.default(app);
    } catch (err) {
        console.log(err)
        console.log('Loader failed. Server shutting down...')
        return
    }
    return app
}

export default server;