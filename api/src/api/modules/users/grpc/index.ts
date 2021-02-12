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

const zeus = grpc.loadPackageDefinition(packageDefinition) as ServerDefinition;

const client = new zeus.UserService(
  'localhost:3334',
  grpc.credentials.createInsecure(),
);

export default client;
