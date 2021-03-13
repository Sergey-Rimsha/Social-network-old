import React from 'react';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';


// import logo from './logo.svg';
import './App.css';

function App() {
    return (
        <div className="App">
            <div className="grid">
                <Header />
                <Navbar />
                <Profile />
            </div>
        </div>
    );
}

export default App;
