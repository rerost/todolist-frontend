export class CreateTaskRequest {
  constructor ();
  getTask(): {};
  setTask(a: {}): void;
  serializeBinary(): Uint8Array;
  static deserializeBinary: (bytes: {}) => CreateTaskRequest;
}

export class DeleteTaskRequest {
  constructor ();
  getTaskId(): string;
  setTaskId(a: string): void;
  serializeBinary(): Uint8Array;
  static deserializeBinary: (bytes: {}) => DeleteTaskRequest;
}

export class GetTaskRequest {
  constructor ();
  getTaskId(): string;
  setTaskId(a: string): void;
  serializeBinary(): Uint8Array;
  static deserializeBinary: (bytes: {}) => GetTaskRequest;
}

export class ListTasksRequest {
  constructor ();
  getFields(): {};
  setFields(a: {}): void;
  serializeBinary(): Uint8Array;
  static deserializeBinary: (bytes: {}) => ListTasksRequest;
}

export class ListTasksResponse {
  constructor ();
  getTasks(): {};
  setTasks(a: {}): void;
  serializeBinary(): Uint8Array;
  static deserializeBinary: (bytes: {}) => ListTasksResponse;
}

export class Task {
  constructor ();
  getTaskId(): number;
  setTaskId(a: number): void;
  getTitle(): string;
  setTitle(a: string): void;
  getCreatedAt(): {};
  setCreatedAt(a: {}): void;
  getDeadline(): {};
  setDeadline(a: {}): void;
  getNote(): {};
  setNote(a: {}): void;
  serializeBinary(): Uint8Array;
  static deserializeBinary: (bytes: {}) => Task;
}

export class UpdateTaskRequest {
  constructor ();
  getTask(): {};
  setTask(a: {}): void;
  serializeBinary(): Uint8Array;
  static deserializeBinary: (bytes: {}) => UpdateTaskRequest;
}

export class Empty {
  constructor ();
  serializeBinary(): Uint8Array;
  static deserializeBinary: (bytes: {}) => Empty;
}

