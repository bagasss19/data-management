import React, { useState } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './pages/Home'
import Navbar from './components/Navbar'
import Login from './pages/Login'
import Register from './pages/Register'
import Add from './pages/Add'
import Edit from './pages/Edit'
import Member from './pages/Member'
import PrivateRoute from './components/PrivateRoute'
import Sidebar from './components/Sidebar'

function App() {
  const[isAutheticated] = useState(localStorage.token ? true : false)
  return (
    <div className="App">
  <Router>
      <Navbar/>
      {isAutheticated ? <Sidebar/> : <></> }
        <Switch>
          <PrivateRoute exact path="/" component={Home} auth={isAutheticated}/>
          <PrivateRoute exact path="/member" component={Member} auth={isAutheticated}/>
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/add" component={Add} />
          <Route path="/edit/:id" component={Edit} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
