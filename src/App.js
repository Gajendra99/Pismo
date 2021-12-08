import React from 'react';
import './App.css';
import Message from './components/Message';
import Profile from './components/Profile';
import Nav from './components/Nav';
import Home from './components/Home';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

const  App = () => {
  return (
    <Router>
      <div className="App">
        <header className="App-header">

          <Nav />
          <Routes>
            <Route path="/" exact element={<Home />}/>
            <Route path="/message" element={<Message />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/signup" element={<SignUp />} />
          </Routes>

        </header>
      </div>
    </Router>
  );
}

export default App;
