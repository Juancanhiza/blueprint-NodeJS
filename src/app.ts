import config from './config';
import server from './server';

const startServer = async () => {
    const app = await server()!;
  
    app?.listen(config.app.port, () => {
      console.log(`server running on port ${config.app.port}...`);
    })
  }
  
  startServer();