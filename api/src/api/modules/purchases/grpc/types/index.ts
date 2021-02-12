import grpc from 'grpc';

export interface ServerDefinition extends grpc.GrpcObject {
  PurchaseService: any;
}
