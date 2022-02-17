import React, { Suspense } from 'react';
import './App.css';
import CounterClass from './components/class/CounterClass';
import GreetingsClass from './components/class/GreetingsClass';

import GreetingsFunction from './components/function/GreetingsFunction';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import { doRequest } from './api/api';
import { getTasks, postTask } from './api/endpoints';
import { getTasksBasic, postTaskBasic, putTaskBasic, deleteTaskBasic } from './api/basic';

const StudentList = React.lazy(() => import('./components/function/StudentList/StudentList'));
const CounterFunction = React.lazy(() => import('./components/function/CounterFunction'));

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {

    doRequest(getTasks).then(res => {
      console.log("tasks > ", res);
    })

    const newTask = {
      createdAt: new Date(),
      description: "yeni bir task oluştur.",
      priority: true
    }
    doRequest(postTask(newTask));


    // getTasksBasic();

    // const newTask = {
    //   createdAt: new Date(),
    //   description: "yeni bir task oluştur.",
    //   priority: true
    // }
    // postTaskBasic(newTask);

    // putTaskBasic({
    //   createdAt: new Date(),
    //   description: "Taskı güncelle.",
    //   priority: true,
    //   id: "1"
    // })

    // deleteTaskBasic(2);
  }

  render() {
    const CounterProps = {
      time: 100
    };

    return (
      <Router>
        <div className="App">
          <GreetingsFunction></GreetingsFunction>
          <hr />
          <Suspense fallback={<h1>Loading...</h1>}>
            <Routes>
              <Route path="/counter" element={<CounterFunction {...CounterProps} />} />
              <Route path="/students" element={<StudentList />} />
            </Routes>
          </Suspense>
          <ToastContainer />
        </div>
      </Router>
    );
  }
}

export default App;
