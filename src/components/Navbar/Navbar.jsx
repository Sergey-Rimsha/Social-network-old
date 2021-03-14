import React from 'react';
import style from './Navbar.module.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    NavLink
  } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className={style.sidebar}>
            <NavLink to = "/profile" activeClassName={style.active}>
                <div>
                    Profile
                </div>
            </NavLink>

            <NavLink to = "/dialogs" activeClassName={style.active}>
                <div>
                    Messages
                </div>
            </NavLink>
            <NavLink to = "/news" activeClassName={style.active}>
                <div>
                    News
                </div>
            </NavLink>

            <NavLink to = "/music" activeClassName={style.active}>
                <div>
                    Music
                </div>
            </NavLink>

            <NavLink to = "/settings" activeClassName={style.active}>
                <div>
                    Settings
                </div>
            </NavLink>
        </nav>
    )
}

export default Navbar;