/**
 * @fileoverview gRPC-Web generated client stub for com.github.rerost.todolist_server.api
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!



const grpc = {};
grpc.web = require('grpc-web');


var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js')

var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js')

var google_protobuf_wrappers_pb = require('google-protobuf/google/protobuf/wrappers_pb.js')

var google_protobuf_field_mask_pb = require('google-protobuf/google/protobuf/field_mask_pb.js')
const proto = {};
proto.com = {};
proto.com.github = {};
proto.com.github.rerost = {};
proto.com.github.rerost.todolist_server = {};
proto.com.github.rerost.todolist_server.api = require('./task_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.com.github.rerost.todolist_server.api.TaskServiceClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

  /**
   * @private @const {?Object} The credentials to be used to connect
   *    to the server
   */
  this.credentials_ = credentials;

  /**
   * @private @const {?Object} Options for the client
   */
  this.options_ = options;
};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.com.github.rerost.todolist_server.api.TaskServicePromiseClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!proto.com.github.rerost.todolist_server.api.TaskServiceClient} The delegate callback based client
   */
  this.delegateClient_ = new proto.com.github.rerost.todolist_server.api.TaskServiceClient(
      hostname, credentials, options);

};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.com.github.rerost.todolist_server.api.ListTasksRequest,
 *   !proto.com.github.rerost.todolist_server.api.ListTasksResponse>}
 */
const methodInfo_ListTasks = new grpc.web.AbstractClientBase.MethodInfo(
  proto.com.github.rerost.todolist_server.api.ListTasksResponse,
  /** @param {!proto.com.github.rerost.todolist_server.api.ListTasksRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.com.github.rerost.todolist_server.api.ListTasksResponse.deserializeBinary
);


/**
 * @param {!proto.com.github.rerost.todolist_server.api.ListTasksRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.com.github.rerost.todolist_server.api.ListTasksResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.com.github.rerost.todolist_server.api.ListTasksResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.com.github.rerost.todolist_server.api.TaskServiceClient.prototype.listTasks =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/com.github.rerost.todolist_server.api.TaskService/ListTasks',
      request,
      metadata,
      methodInfo_ListTasks,
      callback);
};


/**
 * @param {!proto.com.github.rerost.todolist_server.api.ListTasksRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.com.github.rerost.todolist_server.api.ListTasksResponse>}
 *     The XHR Node Readable Stream
 */
proto.com.github.rerost.todolist_server.api.TaskServicePromiseClient.prototype.listTasks =
    function(request, metadata) {
  return new Promise((resolve, reject) => {
    this.delegateClient_.listTasks(
      request, metadata, (error, response) => {
        error ? reject(error) : resolve(response);
      });
  });
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.com.github.rerost.todolist_server.api.GetTaskRequest,
 *   !proto.com.github.rerost.todolist_server.api.Task>}
 */
const methodInfo_GetTask = new grpc.web.AbstractClientBase.MethodInfo(
  proto.com.github.rerost.todolist_server.api.Task,
  /** @param {!proto.com.github.rerost.todolist_server.api.GetTaskRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.com.github.rerost.todolist_server.api.Task.deserializeBinary
);


/**
 * @param {!proto.com.github.rerost.todolist_server.api.GetTaskRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.com.github.rerost.todolist_server.api.Task)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.com.github.rerost.todolist_server.api.Task>|undefined}
 *     The XHR Node Readable Stream
 */
proto.com.github.rerost.todolist_server.api.TaskServiceClient.prototype.getTask =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/com.github.rerost.todolist_server.api.TaskService/GetTask',
      request,
      metadata,
      methodInfo_GetTask,
      callback);
};


/**
 * @param {!proto.com.github.rerost.todolist_server.api.GetTaskRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.com.github.rerost.todolist_server.api.Task>}
 *     The XHR Node Readable Stream
 */
proto.com.github.rerost.todolist_server.api.TaskServicePromiseClient.prototype.getTask =
    function(request, metadata) {
  return new Promise((resolve, reject) => {
    this.delegateClient_.getTask(
      request, metadata, (error, response) => {
        error ? reject(error) : resolve(response);
      });
  });
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.com.github.rerost.todolist_server.api.CreateTaskRequest,
 *   !proto.com.github.rerost.todolist_server.api.Task>}
 */
const methodInfo_CreateTask = new grpc.web.AbstractClientBase.MethodInfo(
  proto.com.github.rerost.todolist_server.api.Task,
  /** @param {!proto.com.github.rerost.todolist_server.api.CreateTaskRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.com.github.rerost.todolist_server.api.Task.deserializeBinary
);


/**
 * @param {!proto.com.github.rerost.todolist_server.api.CreateTaskRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.com.github.rerost.todolist_server.api.Task)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.com.github.rerost.todolist_server.api.Task>|undefined}
 *     The XHR Node Readable Stream
 */
proto.com.github.rerost.todolist_server.api.TaskServiceClient.prototype.createTask =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/com.github.rerost.todolist_server.api.TaskService/CreateTask',
      request,
      metadata,
      methodInfo_CreateTask,
      callback);
};


/**
 * @param {!proto.com.github.rerost.todolist_server.api.CreateTaskRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.com.github.rerost.todolist_server.api.Task>}
 *     The XHR Node Readable Stream
 */
proto.com.github.rerost.todolist_server.api.TaskServicePromiseClient.prototype.createTask =
    function(request, metadata) {
  return new Promise((resolve, reject) => {
    this.delegateClient_.createTask(
      request, metadata, (error, response) => {
        error ? reject(error) : resolve(response);
      });
  });
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.com.github.rerost.todolist_server.api.UpdateTaskRequest,
 *   !proto.com.github.rerost.todolist_server.api.Task>}
 */
const methodInfo_UpdateTask = new grpc.web.AbstractClientBase.MethodInfo(
  proto.com.github.rerost.todolist_server.api.Task,
  /** @param {!proto.com.github.rerost.todolist_server.api.UpdateTaskRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.com.github.rerost.todolist_server.api.Task.deserializeBinary
);


/**
 * @param {!proto.com.github.rerost.todolist_server.api.UpdateTaskRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.com.github.rerost.todolist_server.api.Task)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.com.github.rerost.todolist_server.api.Task>|undefined}
 *     The XHR Node Readable Stream
 */
proto.com.github.rerost.todolist_server.api.TaskServiceClient.prototype.updateTask =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/com.github.rerost.todolist_server.api.TaskService/UpdateTask',
      request,
      metadata,
      methodInfo_UpdateTask,
      callback);
};


/**
 * @param {!proto.com.github.rerost.todolist_server.api.UpdateTaskRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.com.github.rerost.todolist_server.api.Task>}
 *     The XHR Node Readable Stream
 */
proto.com.github.rerost.todolist_server.api.TaskServicePromiseClient.prototype.updateTask =
    function(request, metadata) {
  return new Promise((resolve, reject) => {
    this.delegateClient_.updateTask(
      request, metadata, (error, response) => {
        error ? reject(error) : resolve(response);
      });
  });
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.com.github.rerost.todolist_server.api.DeleteTaskRequest,
 *   !proto.google.protobuf.Empty>}
 */
const methodInfo_DeleteTask = new grpc.web.AbstractClientBase.MethodInfo(
  google_protobuf_empty_pb.Empty,
  /** @param {!proto.com.github.rerost.todolist_server.api.DeleteTaskRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  google_protobuf_empty_pb.Empty.deserializeBinary
);


/**
 * @param {!proto.com.github.rerost.todolist_server.api.DeleteTaskRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.protobuf.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.protobuf.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.com.github.rerost.todolist_server.api.TaskServiceClient.prototype.deleteTask =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/com.github.rerost.todolist_server.api.TaskService/DeleteTask',
      request,
      metadata,
      methodInfo_DeleteTask,
      callback);
};


/**
 * @param {!proto.com.github.rerost.todolist_server.api.DeleteTaskRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.protobuf.Empty>}
 *     The XHR Node Readable Stream
 */
proto.com.github.rerost.todolist_server.api.TaskServicePromiseClient.prototype.deleteTask =
    function(request, metadata) {
  return new Promise((resolve, reject) => {
    this.delegateClient_.deleteTask(
      request, metadata, (error, response) => {
        error ? reject(error) : resolve(response);
      });
  });
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.protobuf.Empty,
 *   !proto.com.github.rerost.todolist_server.api.Task>}
 */
const methodInfo_StreamTask = new grpc.web.AbstractClientBase.MethodInfo(
  proto.com.github.rerost.todolist_server.api.Task,
  /** @param {!proto.google.protobuf.Empty} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.com.github.rerost.todolist_server.api.Task.deserializeBinary
);


/**
 * @param {!proto.google.protobuf.Empty} request The request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.com.github.rerost.todolist_server.api.Task>}
 *     The XHR Node Readable Stream
 */
proto.com.github.rerost.todolist_server.api.TaskServiceClient.prototype.streamTask =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/com.github.rerost.todolist_server.api.TaskService/StreamTask',
      request,
      metadata,
      methodInfo_StreamTask);
};


/**
 * @param {!proto.google.protobuf.Empty} request The request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.com.github.rerost.todolist_server.api.Task>}
 *     The XHR Node Readable Stream
 */
proto.com.github.rerost.todolist_server.api.TaskServicePromiseClient.prototype.streamTask =
    function(request, metadata) {
  return this.delegateClient_.client_.serverStreaming(this.delegateClient_.hostname_ +
      '/com.github.rerost.todolist_server.api.TaskService/StreamTask',
      request,
      metadata,
      methodInfo_StreamTask);
};


module.exports = proto.com.github.rerost.todolist_server.api;

