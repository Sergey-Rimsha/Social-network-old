import React, {Component} from 'react';
import {Route, withRouter} from "react-router-dom";
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';

// import logo from './logo.svg';
import './App.css';
import HeaderContainer from './components/Header/HeaderContainer';
import Login from './components/Login/login';
import { compose } from 'redux';
import { connect } from 'react-redux';
import {initializeApp} from './redux/appReducer';
import Preloader from './components/common/Preloader/Preloader';

class App extends Component {

    componentDidMount() {
        this.props.initializeApp();
    }

    render() {
        if (!this.props.initialized) {
            return <Preloader/>
        }

        return (
            <div className="App">
                <div className="grid">
                    <HeaderContainer />
                    <Navbar />
                    <div className='content'>
                        <Route path={`/profile/:userId?`} component={Profile} />
                        <Route path={`/dialogs`} component={DialogsContainer} />
                        <Route path={`/users`} component={UsersContainer} />
                        <Route path={`/login`} component={Login} />
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    initialized: state.app.initialized
})


export default compose(
    withRouter,
    connect(mapStateToProps, {initializeApp}))(App);