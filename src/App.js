import React from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import DialogsContainer from './components/Dialogs/DialogsContainer';

// import logo from './logo.svg';
import './App.css';

function App(props) {
    return (
        <Router>
            <div className="App">
                <div className="grid">
                    <Header />
                    <Navbar />
                    <div className='content'>
                        <Route path={`/profile`}>
                            <Profile
                                dispatch = {props.dispatch}
                                profileState = {props.state.profile} />
                        </Route>
                        <Route path={`/dialogs`}>
                            <DialogsContainer 
                                dispatch = {props.dispatch}
                                state = {props.state} />
                        </Route>
                    </div>
                </div>
            </div>
        </Router>
    );
}

export default App;
