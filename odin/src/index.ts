import grpc from 'grpc';
import path from 'path';
import { loadSync } from '@grpc/proto-loader';
import { ServerDefinition } from '@models/types';
import functions from './functions';
import createConnection from './database';
import loaderConfig from './config/grpc';

createConnection();

const protoPath = path.resolve(__dirname, 'proto', 'messages.proto');

const packageDefinition: grpc.PackageDefinition = loadSync(
  protoPath,
  loaderConfig,
);

const proto = grpc.loadPackageDefinition(packageDefinition)
  .PurchaseService as ServerDefinition;

const server = new grpc.Server();

server.addService(proto.service, functions);
server.bind('0.0.0.0:3335', grpc.ServerCredentials.createInsecure());

server.start();

console.log('microservice odin started in port 3335');
