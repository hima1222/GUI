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
import SignupPage from './pages/SignupPage';
import Layout from './pages/Layout';

const App = () => {
  return (
    <Router>
      <div className="app">
        
        {/* <Header /> */}
        
        {/* Routes */}
        <Routes>
          <Route path="/" element={<Layout><Welcome /></Layout>} />
          <Route path="/home" element={<Layout><Home /></Layout>} />
          <Route path="/Write" element={<Layout><Write /></Layout>} />
          <Route path="/Calender" element={<Layout><Calender /></Layout>} />
          <Route path="/Settings" element={<Layout><Settings /></Layout>} />
          <Route path="/profile/*" element={<Layout><Profile /></Layout>}> 
            <Route path="about" element={<About/>} />
            <Route path="conversations" element={<Conversations />} />  
            <Route path="following" element={<Following />} /> 
          </Route>
          <Route path="/signupPage" element={<SignupPage/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;


