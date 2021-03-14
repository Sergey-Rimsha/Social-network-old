import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';



// import logo from './logo.svg';
import './App.css';

function App() {
    return (
        <Router>
            <div className="App">
                <div className="grid">
                    <Header />
                    <Navbar />
                    <div className='content'>
                        <Route path={`/profile`} component={Profile}/>
                        <Route path={`/dialogs`} component={Dialogs}/>
                    </div>
                </div>
            </div>
        </Router>
    );
}

export default App;
