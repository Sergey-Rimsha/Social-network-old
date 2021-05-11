import React from 'react';
import { connect } from 'react-redux';
import {setAuthLogout} from './../../redux/authReducer';
import Header from './Header';


class HeaderContainer extends React.Component {

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

export default connect(mapStateToprops, {setAuthLogout})(HeaderContainer);