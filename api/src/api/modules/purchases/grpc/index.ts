import grpc from 'grpc';
import path from 'path';
import { loadSync } from '@grpc/proto-loader';
import { ServerDefinition } from './types';
import loaderConfig from '../../../../config/grpc';

const protoPath = path.resolve(__dirname, 'proto', 'messages.proto');

const packageDefinition: grpc.PackageDefinition = loadSync(
  protoPath,
  loaderConfig,
);

const odin = grpc.loadPackageDefinition(packageDefinition) as ServerDefinition;

const client = new odin.PurchaseService(
  'localhost:3335',
  grpc.credentials.createInsecure(),
);

export default client;
