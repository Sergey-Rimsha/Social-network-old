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
                                inputText = {props.state.newPostText} 
                                posts = {props.state.posts} 
                                newPost={props.newPost}
                                newStateText = {props.newStateText} />
                        </Route>
                        <Route path={`/dialogs`}>
                            <Dialogs
                            newMessege = {props.newMessege}
                            addMessege = {props.addMessege}
                            inputText = {props.state.newMessegeText}
                            users = {props.state.users} 
                            messeges = {props.state.messeges}/>
                        </Route>
                    </div>
                </div>
            </div>
        </Router>
    );
}

export default App;
