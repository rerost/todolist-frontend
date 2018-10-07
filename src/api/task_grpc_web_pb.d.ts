import * as grpcWeb from 'grpc-web';
import {
  CreateTaskRequest,
  DeleteTaskRequest,
  GetTaskRequest,
  ListTasksRequest,
  ListTasksResponse,
  Task,
  UpdateTaskRequest,
  Empty} from './task_pb';

export class TaskServiceClient {
  constructor (hostname: string,
               credentials: {},
               options: { [s: string]: {}; });

  listTasks(
    request: ListTasksRequest,
    metadata: grpcWeb.Metadata,
    callback: (err: grpcWeb.Error,
               response: ListTasksResponse) => void
  ): grpcWeb.ClientReadableStream;

  getTask(
    request: GetTaskRequest,
    metadata: grpcWeb.Metadata,
    callback: (err: grpcWeb.Error,
               response: Task) => void
  ): grpcWeb.ClientReadableStream;

  createTask(
    request: CreateTaskRequest,
    metadata: grpcWeb.Metadata,
    callback: (err: grpcWeb.Error,
               response: Task) => void
  ): grpcWeb.ClientReadableStream;

  updateTask(
    request: UpdateTaskRequest,
    metadata: grpcWeb.Metadata,
    callback: (err: grpcWeb.Error,
               response: Task) => void
  ): grpcWeb.ClientReadableStream;

  deleteTask(
    request: DeleteTaskRequest,
    metadata: grpcWeb.Metadata,
    callback: (err: grpcWeb.Error,
               response: Empty) => void
  ): grpcWeb.ClientReadableStream;

}

