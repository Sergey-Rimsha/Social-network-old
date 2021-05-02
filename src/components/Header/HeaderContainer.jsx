import React from 'react';
import { connect } from 'react-redux';
import {setAuth} from './../../redux/authReducer'
import Header from './Header';


class HeaderContainer extends React.Component {

    componentDidMount() {
        this.props.setAuth()
    }

    render() {
        return (
            <Header {...this.props} />
        )
    }

}

let mapStateToprops = (state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login
});

export default connect(mapStateToprops, {setAuth})(HeaderContainer);