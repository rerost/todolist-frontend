import * as grpcWeb from 'grpc-web';
import * as React from 'react';

import { TaskServiceClient } from "../api/task_grpc_web_pb";
import { CreateTaskRequest, ListTasksRequest, ListTasksResponse, Task,  } from '../api/task_pb';

interface IStaete {
  tasks: Task[],
  title: string,
  note?: string,
}

export default class TaskContainer extends React.Component<any, IStaete> {
  private taskClient: TaskServiceClient;
  private createTaskHandler: any;
  private taskNameChangeHandler: any;

  public constructor(props: any) {
    super(props)
    this.taskClient = new TaskServiceClient("http://localhost:8080", {}, {})
    this.createTaskHandler = this.createTask.bind(this)
    this.taskNameChangeHandler = this.taskNameChange.bind(this)

    this.state = {tasks: [], title: "", note: undefined}
    this.listTasks()
  }

  public render() {
    return(
      <div>
        {
          this.state.tasks.map((task: Task)  => {
            return (
              <div key={task.getTaskId()}>
                {task.getTitle()}
              </div>
            )
          })
        }
        <form>
          <label>
            Title:
            <input type="text" name="Title" onChange={this.taskNameChangeHandler}/>
          </label>

          <button value="submit" onClick={this.createTaskHandler}/>
        </form>
      </div>
    ) 
  }

  private createTask(e: React.MouseEvent<HTMLParagraphElement>) {
    const createTaskRequest = new CreateTaskRequest
    const task = new Task
    task.setTitle(this.state.title)
    createTaskRequest.setTask(task)
    e.preventDefault()
    this.taskClient.createTask(createTaskRequest, {}, (err: grpcWeb.Error, res: Task): void => {
      window.console.log(res)
    })

  }

  private taskNameChange(e: React.FormEvent) {
    const target = e.target as HTMLSelectElement
    this.setState({title: target.value})
  }

  private listTasks() {
    const listTaskRequest = new ListTasksRequest
    const callback = (err: grpcWeb.Error, res: ListTasksResponse): void => {
      // const tasks = res.getTasks
      window.console.log(res.getTasks)
      // this.setState({tasks: tasks})
    }
    this.taskClient.listTasks(listTaskRequest, {}, callback.bind(this))
  }
}
