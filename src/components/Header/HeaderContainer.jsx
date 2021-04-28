import React from 'react';
import { connect } from 'react-redux';
import usersApi from '../../api/api';
import {setAuthUserDate} from './../../redux/authReducer'
import Header from './Header';


class HeaderContainer extends React.Component {

    componentDidMount() {
        usersApi.getAuth()
            .then(response => {
                if (response.resultCode === 0) {
                    let {id, login, email} = response.data;
                    this.props.setAuthUserDate(id, email, login);
                }
            });
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

export default connect(mapStateToprops, {setAuthUserDate})(HeaderContainer);