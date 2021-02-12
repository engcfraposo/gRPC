import * as http from 'http';
import App from './app';

const server = http.createServer(App);
server.listen(Number(process.env.APP_PORT) | 3333);

server.on('listening', (): void => {
  console.log('Api started in the port 3333');
});

server.on('error', (error: NodeJS.ErrnoException): void => {
  console.error(`${error.message}`);
});
