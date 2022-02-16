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

const StudentList = React.lazy(() => import('./components/function/StudentList/StudentList'));
const CounterFunction = React.lazy(() => import('./components/function/CounterFunction'));

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showCounter: true,
      componentType: true,
      myComponents: {
        Greetings: GreetingsFunction,
        Counter: CounterFunction,
        StudentList: StudentList
      }
    };
  }
  toggleCounter() {
    this.setState({ showCounter: !this.state.showCounter });
  }
  toggleComponentType() {
    if (this.state.componentType) {
      this.setState({
        ...this.state, componentType: false, myComponents: {
          ...this.state.myComponents,
          Greetings: GreetingsClass,
          Counter: CounterClass,
        }
      })
    }
    else {
      this.setState({
        ...this.state, componentType: true, myComponents: {
          ...this.state.myComponents,
          Greetings: GreetingsFunction,
          Counter: CounterFunction,
        }
      })
    }
    this.setState({ showCounter: !this.state.showCounter });
  }
  toggleCounter() {
    this.setState({ showCounter: !this.state.showCounter });
  }
  render() {
    const { showCounter } = this.state;
    const CounterProps = {
      time: 100
    };
    const { myComponents } = this.state;

    return (
      <Router>
        <div className="App">
          <myComponents.Greetings></myComponents.Greetings>
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
