import React from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';

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
                        <Route path={`/profile`}>
                            <Profile />
                        </Route>
                        <Route path={`/dialogs`}>
                            <DialogsContainer />
                        </Route>
                        <Route path={`/users`}>
                            <UsersContainer />
                        </Route>
                    </div>
                </div>
            </div>
        </Router>
    );
}

export default App;
