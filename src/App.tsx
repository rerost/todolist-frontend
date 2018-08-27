import * as React from 'react';
import './App.css';

import { Task, CreateTaskRequest } from './client/task_pb';
import logo from './logo.svg';

class App extends React.Component {
  public async componentDidMount() {
    const req = new CreateTaskRequest();
    const task = new Task()
    task.setTitle("test")
    req.setTask(task)
    const res = await fetch("http://localhost:3000/tasks", {mode: 'cors', method: 'POST', body: JSON.stringify(req.toObject())});
    console.log(res);
  }

  public render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.tsx</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
