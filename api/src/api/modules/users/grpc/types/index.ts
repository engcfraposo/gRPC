import grpc from 'grpc';

export interface ServerDefinition extends grpc.GrpcObject {
  UserService: any;
}
