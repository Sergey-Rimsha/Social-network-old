import React from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';



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
                                profileState = {props.state.profile}
                                chengePostText = {props.state.chengePostText} />
                        </Route>
                        <Route path={`/dialogs`}>
                            <Dialogs
                            dispatch = {props.dispatch}
                            dialogsState = {props.state.dialogs}
                            chengeMessegeText = {props.state.chengeMessegeText} />
                        </Route>
                    </div>
                </div>
            </div>
        </Router>
    );
}

export default App;
