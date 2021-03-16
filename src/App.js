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
                            <Profile posts = {props.state.posts} />
                        </Route>
                        <Route path={`/dialogs`}>
                            <Dialogs users={props.state.users} messeges={props.state.messeges}/>
                        </Route>
                    </div>
                </div>
            </div>
        </Router>
    );
}

export default App;
