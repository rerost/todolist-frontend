import * as React from 'react';
import { TaskServiceClient } from "../api/task_grpc_web_pb";
import './App.css';

import logo from './logo.svg';

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro" onClick={this.onClickHandler}>
          To get started, edit <code>src/App.tsx</code> and save to reload.
        </p>
      </div>
    );
  }

  private onClickHandler(e: React.MouseEvent<HTMLParagraphElement>) {
    window.console.log(e)
    const taskClient = new TaskServiceClient("http://localhost:3001", {}, {})
    window.console.log(taskClient)
  }
}

export default App;
