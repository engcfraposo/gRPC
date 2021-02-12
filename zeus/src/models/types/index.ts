import grpc from 'grpc';

export interface ServerDefinition extends grpc.GrpcObject {
  service: any;
}
