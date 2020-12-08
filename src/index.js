import React from 'react';
import ReactDOM from 'react-dom';
import Home from './Home'
import About from './About'
import Login from './Login'
import Navbar from './Navbar'
import { BrowserRouter as Router, Route } from 'react-router-dom';


//added in and should move the two below to separate files and link about but didn't.
const Signup = () => {
  return (
    <div>
      <h1>Signup</h1>
      <form>
        <div>
          <input type="text" name="username" placeholder="Username" />
          <label htmlFor="username">Username</label>
        </div>
        <div>
          <input type="password" name="password" placeholder="Password" />
          <label htmlFor="password">Password</label>
        </div>
        <input type="submit" value="Signup" />
      </form>
    </div>
  );
};

const Message = () => {
  return (
    <div>
      <h1>Message</h1>
      <form>
        <div>
          <input type="text" name="message" placeholder="Message" />
          <label htmlFor="message">message</label>
        </div>
        <input type="submit" value="Message" />
      </form>
    </div>
  );
};

ReactDOM.render((
  <Router>
    <div>
      <Navbar />
    <Route exact path="/" component={Home} />
    <Route path="/about" component={About} />
    <Route path="/login" component={Login} />
    <Route path="/signup" component={Signup} />
    <Route path="/message" component={Message} />
    </div>
  </Router>),
  document.getElementById('root')
)
