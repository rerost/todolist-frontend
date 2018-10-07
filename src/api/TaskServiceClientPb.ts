/**
 * @fileoverview gRPC-Web generated client stub for com.github.rerost.todolist_server.api
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


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
  client_: grpcWeb.AbstractClientBase;
  hostname_: string;
  credentials_: {};
  options_: { [s: string]: {}; };

  constructor (hostname: string,
               credentials: {},
               options: { [s: string]: {}; }) {
    if (!options) options = {};
    options['format'] = 'text';

    this.client_ = new grpcWeb.GrpcWebClientBase(options);
    this.hostname_ = hostname;
    this.credentials_ = credentials;
    this.options_ = options;
  }

  methodInfoListTasks = new grpcWeb.AbstractClientBase.MethodInfo(
    ListTasksResponse,
    (request: ListTasksRequest) => {
      return request.serializeBinary();
    },
    ListTasksResponse.deserializeBinary
  );

  listTasks(
    request: ListTasksRequest,
    metadata: grpcWeb.Metadata,
    callback: (err: grpcWeb.Error,
               response: ListTasksResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/com.github.rerost.todolist_server.api.TaskService/ListTasks',
      request,
      metadata,
      this.methodInfoListTasks,
      callback);
  }

  methodInfoGetTask = new grpcWeb.AbstractClientBase.MethodInfo(
    Task,
    (request: GetTaskRequest) => {
      return request.serializeBinary();
    },
    Task.deserializeBinary
  );

  getTask(
    request: GetTaskRequest,
    metadata: grpcWeb.Metadata,
    callback: (err: grpcWeb.Error,
               response: Task) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/com.github.rerost.todolist_server.api.TaskService/GetTask',
      request,
      metadata,
      this.methodInfoGetTask,
      callback);
  }

  methodInfoCreateTask = new grpcWeb.AbstractClientBase.MethodInfo(
    Task,
    (request: CreateTaskRequest) => {
      return request.serializeBinary();
    },
    Task.deserializeBinary
  );

  createTask(
    request: CreateTaskRequest,
    metadata: grpcWeb.Metadata,
    callback: (err: grpcWeb.Error,
               response: Task) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/com.github.rerost.todolist_server.api.TaskService/CreateTask',
      request,
      metadata,
      this.methodInfoCreateTask,
      callback);
  }

  methodInfoUpdateTask = new grpcWeb.AbstractClientBase.MethodInfo(
    Task,
    (request: UpdateTaskRequest) => {
      return request.serializeBinary();
    },
    Task.deserializeBinary
  );

  updateTask(
    request: UpdateTaskRequest,
    metadata: grpcWeb.Metadata,
    callback: (err: grpcWeb.Error,
               response: Task) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/com.github.rerost.todolist_server.api.TaskService/UpdateTask',
      request,
      metadata,
      this.methodInfoUpdateTask,
      callback);
  }

  methodInfoDeleteTask = new grpcWeb.AbstractClientBase.MethodInfo(
    Empty,
    (request: DeleteTaskRequest) => {
      return request.serializeBinary();
    },
    Empty.deserializeBinary
  );

  deleteTask(
    request: DeleteTaskRequest,
    metadata: grpcWeb.Metadata,
    callback: (err: grpcWeb.Error,
               response: Empty) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/com.github.rerost.todolist_server.api.TaskService/DeleteTask',
      request,
      metadata,
      this.methodInfoDeleteTask,
      callback);
  }

}

