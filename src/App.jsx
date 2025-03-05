import React from 'react';
import Header from './components/Header';
//import Main from './components/Main';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Write from "./pages/Write";
import Calender from "./pages/Calendar";
import Settings from "./pages/Settings";
import Profile from "./pages/Profile";
import About from "./pages/About";
import Conversations from "./pages/Conversations";
import Following from "./pages/Following";
import Welcome from "./pages/Welcome";

const App = () => {
  return (
    <Router>
      <div className="app">
        {/* Header */}
        <Header />

        {/* Main Content*/}
        {/* <Main />  */}
        

        {/* Routes */}
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/home" element={<Home />} />
          <Route path="/Write" element={<Write />} />
          <Route path="/Calender" element={<Calender />} />
          <Route path="/Settings" element={<Settings />} />
          <Route path="/profile/*" element={<Profile />}> 
            <Route path="about" element={<About/>} />
            <Route path="conversations" element={<Conversations />} /> 
            <Route path="following" element={<Following />} /> 
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;


