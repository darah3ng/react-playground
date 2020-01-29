import React from 'react';
import { Route, Link, BrowserRouter as Router, Switch } from 'react-router-dom';
import Clock from './components/clock';
import FormTest from './components/formTest';
import SelectTest from './components/selectTest';
import MultipleInputs from './components/multipleInputs';
import Calculator from './components/lifting-state-up/calulator';

const Home = () => {
  return <h1>Home page</h1>;
}

function App() {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/clock'>Clock</Link>
          </li>
          <li>
          <Link to='/formtest'>FormTest</Link>
          </li>
          <li>
            <Link to='/select-test'>Select Test</Link>
          </li>
          <li>
            <Link to='/multiple-inputs'>Multiple inputs</Link>
          </li>
          <li>
            <Link to='/calculator'>Calculator</Link>
          </li>
        </ul>
        
          <Route path='/' component={Home} />
          <Route path='/clock' component={Clock} />
          <Route path='/formtest' component={FormTest} />
          <Route path='/select-test' component={SelectTest} />
          <Route path='/multiple-inputs' component={MultipleInputs} />
          <Route path='/calculator' component={Calculator} />
        
      </div>
    </Router>
  );
}

export default App;
