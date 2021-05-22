import React from 'react';
import { NavLink } from 'react-router-dom';
import style from './Header.module.css';

const Header = (props) => {
    return (
        <header className={style.header}>
            <div className={style.imgWrap}>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9Ucd0xw8lbKSKL_fUhPdLA4Leco53f0EKIQ&usqp=CAU" alt="logo"></img>
            </div>

            <div className={style.authLogin}>
                {props.isAuth
                    ? <div>{props.login} - <button onClick={props.setAuthLogout}>Log out</button> </div>
                    : <NavLink to={'/login'}> login </NavLink> }
            </div>

        </header>
    )
}

export default Header