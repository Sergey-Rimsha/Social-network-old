import React from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';

// import logo from './logo.svg';
import './App.css';
import HeaderContainer from './components/Header/HeaderContainer';
import Login from './components/Login/login';

function App() {
    return (
        <Router>
            <div className="App">
                <div className="grid">
                    <HeaderContainer />
                    <Navbar />
                    <div className='content'>
                        <Route path={`/profile/:userId?`}>
                            <Profile />
                        </Route>
                        <Route path={`/dialogs`}>
                            <DialogsContainer />
                        </Route>
                        <Route path={`/users`}>
                            <UsersContainer />
                        </Route>
                        <Route path={`/login`}>
                            <Login />
                        </Route>
                    </div>
                </div>
            </div>
        </Router>
    );
}

export default App;
